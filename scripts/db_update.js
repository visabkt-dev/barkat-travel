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
  console.log("Connected to PostgreSQL");
  
  // Add status column if not exists
  await client.query(`ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new';`);
  console.log("Added status column");

  // Add admin_notes column if not exists
  await client.query(`ALTER TABLE leads ADD COLUMN IF NOT EXISTS admin_notes TEXT;`);
  console.log("Added admin_notes column");

  await client.end();
}

main().catch(console.error);
