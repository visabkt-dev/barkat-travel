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
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
      action_type VARCHAR(50),
      table_name VARCHAR(50),
      record_id UUID,
      admin_user TEXT,
      old_data JSONB,
      new_data JSONB,
      ip_address TEXT
    );
  `);
  
  await client.query(`ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;`);
  
  console.log("Audit Logs Database Configured.");
  await client.end();
}

main().catch(console.error);
