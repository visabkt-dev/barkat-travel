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
  const res = await client.query("SELECT policyname FROM pg_policies WHERE tablename = 'leads'");
  console.log("Policies:", res.rows);
  await client.end();
}

main().catch(console.error);
