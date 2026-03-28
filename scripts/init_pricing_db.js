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
  
  // Create Pricing Engine Table
  await client.query(`
    CREATE TABLE IF NOT EXISTS pricing_rules (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
      category TEXT,
      route_name TEXT,
      vehicle_type TEXT,
      price_sar DECIMAL(10,2),
      is_active BOOLEAN DEFAULT true
    );
  `);
  
  // Set up security
  await client.query(`ALTER TABLE pricing_rules ENABLE ROW LEVEL SECURITY;`);
  
  // Public Select policy (for frontend to read prices)
  await client.query(`DROP POLICY IF EXISTS "Allow public read prices" ON pricing_rules;`);
  await client.query(`CREATE POLICY "Allow public read prices" ON pricing_rules FOR SELECT USING (true);`);

  console.log("Pricing Engine Database configured.");
  await client.end();
}

main().catch(console.error);
