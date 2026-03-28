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
    CREATE TABLE IF NOT EXISTS email_logs (
      id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
      recipient   TEXT NOT NULL,
      subject     TEXT NOT NULL,
      template    VARCHAR(60),
      status      VARCHAR(20) DEFAULT 'pending',
      attempts    INTEGER DEFAULT 0,
      sent_at     TIMESTAMP WITH TIME ZONE,
      error       TEXT,
      resend_id   TEXT,
      booking_id  UUID,
      metadata    JSONB
    );
  `);

  await client.query(`ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;`);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs (status, created_at);
  `);

  console.log("email_logs table created and indexed.");
  await client.end();
}

main().catch(err => { console.error(err); process.exit(1); });
