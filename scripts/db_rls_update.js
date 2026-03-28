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
  
  await client.query(`ALTER TABLE leads ENABLE ROW LEVEL SECURITY;`);
  console.log("Enabled RLS");

  // Drop exist public read policy if it's there
  await client.query(`DROP POLICY IF EXISTS "Enable read access for all users" ON leads;`);
  await client.query(`DROP POLICY IF EXISTS "Allow anonymous inserts" ON leads;`);
  await client.query(`DROP POLICY IF EXISTS "Allow anonymous select" ON leads;`);

  // Create an insert policy for anon users
  await client.query(`CREATE POLICY "Allow anonymous inserts" ON leads FOR INSERT TO anon WITH CHECK (true);`);
  console.log("Created anon insert policy");

  // We do NOT create any select policy for anon. 
  // Admin routes will use the service_role key to bypass RLS.

  await client.end();
}

main().catch(console.error);
