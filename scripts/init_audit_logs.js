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
    CREATE TABLE IF NOT EXISTS audit_logs (
      id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      action      TEXT NOT NULL,
      details     TEXT,
      admin_user  TEXT DEFAULT 'admin',
      created_at  TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
      metadata    JSONB DEFAULT '{}'
    );
  `);
  console.log("audit_logs table created.");

  await client.query(`ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;`);

  await client.end();
  console.log("\n✅ Audit Log System ready.");
}

main().catch(err => { console.error(err); process.exit(1); });
