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

  // 1. Create admin_notes_history table
  await client.query(`
    CREATE TABLE IF NOT EXISTS admin_notes_history (
      id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      record_id   UUID NOT NULL,
      table_name  TEXT NOT NULL,
      action_type TEXT NOT NULL, -- 'note_update', 'status_change', 'creation'
      old_value   TEXT,
      new_value   TEXT,
      note        TEXT,         -- The actual note content if applicable
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
      admin_user  TEXT DEFAULT 'admin'
    );
  `);
  console.log("admin_notes_history table created.");

  await client.query(`ALTER TABLE admin_notes_history ENABLE ROW LEVEL SECURITY;`);

  // 2. Trigger function to track changes
  await client.query(`
    CREATE OR REPLACE FUNCTION track_admin_actions()
    RETURNS TRIGGER AS $$
    BEGIN
      -- Track status changes
      IF (TG_OP = 'UPDATE') AND (OLD.status IS DISTINCT FROM NEW.status) THEN
        INSERT INTO admin_notes_history (record_id, table_name, action_type, old_value, new_value, admin_user)
        VALUES (NEW.id, TG_TABLE_NAME, 'status_change', OLD.status, NEW.status, 'admin');
      END IF;

      -- Track admin notes updates
      IF (TG_OP = 'UPDATE') AND (OLD.admin_notes IS DISTINCT FROM NEW.admin_notes) THEN
        INSERT INTO admin_notes_history (record_id, table_name, action_type, old_value, new_value, note, admin_user)
        VALUES (NEW.id, TG_TABLE_NAME, 'note_update', OLD.admin_notes, NEW.admin_notes, NEW.admin_notes, 'admin');
      END IF;

      -- Track creation
      IF (TG_OP = 'INSERT') THEN
         INSERT INTO admin_notes_history (record_id, table_name, action_type, new_value, admin_user)
         VALUES (NEW.id, TG_TABLE_NAME, 'creation', 'new', 'system');
      END IF;

      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);

  // 3. Attach triggers to all relevant tables
  const tables = ['leads', 'transport_trips', 'visa_applications', 'hotel_bookings'];
  for (const t of tables) {
    await client.query(`
      DROP TRIGGER IF EXISTS trg_track_actions_${t} ON ${t};
      CREATE TRIGGER trg_track_actions_${t}
        AFTER INSERT OR UPDATE ON ${t}
        FOR EACH ROW EXECUTE FUNCTION track_admin_actions();
    `);
    console.log(`History trigger installed on ${t}.`);
  }

  // 4. Index for fast history lookup
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_history_record ON admin_notes_history (record_id, created_at DESC);
  `);

  await client.end();
  console.log("\n✅ Admin History System fully configured.");
}

main().catch(err => { console.error(err); process.exit(1); });
