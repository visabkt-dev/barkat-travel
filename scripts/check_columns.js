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

  const { rows } = await client.query(`
    SELECT column_name FROM information_schema.columns 
    WHERE table_name = 'leads';
  `);
  console.log("Columns in leads table:", rows.map(r => r.column_name));

  await client.end();
}

main().catch(err => { console.error(err); process.exit(1); });
