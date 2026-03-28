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

  await client.query(`
    CREATE TABLE IF NOT EXISTS system_events (
      id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
      event_type  TEXT NOT NULL,
      payload     JSONB NOT NULL,
      processed   BOOLEAN DEFAULT FALSE,
      attempts    INTEGER DEFAULT 0,
      last_error  TEXT,
      next_retry  TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
    );
  `);
  console.log("system_events table created.");

  await client.query(`ALTER TABLE system_events ENABLE ROW LEVEL SECURITY;`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_events_unprocessed ON system_events (processed) WHERE processed = FALSE;`);

  await client.end();
  console.log("\n✅ Event-Driven DB initialized.");
}

main().catch(err => { console.error(err); process.exit(1); });
