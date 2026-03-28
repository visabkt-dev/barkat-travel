const { Client } = require('pg');

const client = new Client({
  host: 'aws-1-us-east-1.pooler.supabase.com',
  port: 5432,
  user: 'postgres.oublaakgqdflknupivra',
  password: 'QaoBZUVNX56agTyX',
  database: 'postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();
  console.log("Connected. Setting up Review Automation...");

  // 1. CREATE review_requests TABLE
  await client.query(`
    CREATE TABLE IF NOT EXISTS review_requests (
      id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at      TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
      booking_id      UUID NOT NULL,
      booking_table   TEXT NOT NULL DEFAULT 'leads',
      customer_name   TEXT,
      whatsapp        TEXT,
      scheduled_at    TIMESTAMP WITH TIME ZONE NOT NULL,
      sent_at         TIMESTAMP WITH TIME ZONE,
      status          VARCHAR(30) DEFAULT 'pending',
      wa_response     JSONB
    );
  `);
  console.log("review_requests table created.");

  // 2. UNIQUE constraint to prevent duplicate review requests per booking
  await client.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'review_requests_booking_id_unique'
      ) THEN
        ALTER TABLE review_requests
          ADD CONSTRAINT review_requests_booking_id_unique UNIQUE (booking_id);
      END IF;
    END $$;
  `);
  console.log("Unique constraint on booking_id applied.");

  // 3. RLS
  await client.query(`ALTER TABLE review_requests ENABLE ROW LEVEL SECURITY;`);
  console.log("RLS enabled on review_requests.");

  // 4. SUPABASE DB FUNCTION — called by trigger when status changes to 'completed'
  await client.query(`
    CREATE OR REPLACE FUNCTION schedule_review_request()
    RETURNS TRIGGER AS $$
    BEGIN
      -- Only fire when status changes TO 'completed'
      IF NEW.status = 'completed' AND (OLD.status IS DISTINCT FROM 'completed') THEN
        INSERT INTO review_requests (
          booking_id,
          booking_table,
          customer_name,
          whatsapp,
          scheduled_at,
          status
        )
        VALUES (
          NEW.id,
          TG_TABLE_NAME,
          NEW.name,
          NEW.whatsapp,
          timezone('utc', now()) + INTERVAL '24 hours',
          'pending'
        )
        ON CONFLICT (booking_id) DO NOTHING;  -- duplicate prevention
      END IF;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("schedule_review_request() function created.");

  // 5. TRIGGERS on all 3 booking tables + master leads
  const triggerTables = ['leads', 'transport_trips', 'visa_applications', 'hotel_bookings'];
  for (const table of triggerTables) {
    await client.query(`
      DROP TRIGGER IF EXISTS trg_review_${table} ON ${table};
      CREATE TRIGGER trg_review_${table}
        AFTER UPDATE OF status ON ${table}
        FOR EACH ROW EXECUTE FUNCTION schedule_review_request();
    `);
    console.log(`Trigger installed on ${table}.`);
  }

  // 6. INDEX for fast pending queries by the cron job
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_review_requests_pending
      ON review_requests (status, scheduled_at)
      WHERE status = 'pending';
  `);
  console.log("Index created for cron queries.");

  await client.end();
  console.log("\n✅ Review Automation fully configured in database.");
}

main().catch(err => { console.error(err); process.exit(1); });
