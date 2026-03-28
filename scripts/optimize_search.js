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

  console.log("Fixing and Optimizing Search System...");

  // 1. Add created_at if missing
  await client.query(`
    ALTER TABLE leads ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now());
  `);
  console.log("Column 'created_at' verified/added.");

  // 2. Create B-Tree Indexes for fast filtering
  await client.query(`CREATE INDEX IF NOT EXISTS idx_leads_whatsapp ON leads (whatsapp);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_leads_email ON leads (email);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_leads_service_status ON leads (service_type, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);`);

  // 3. Add GIN Index for Full-Text Search
  await client.query(`
    DO $$ 
    BEGIN 
      IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='leads' AND column_name='fts_token') THEN
        ALTER TABLE leads ADD COLUMN fts_token tsvector 
        GENERATED ALWAYS AS (
          to_tsvector('english', 
            coalesce(name, '') || ' ' || 
            coalesce(whatsapp, '') || ' ' || 
            coalesce(email, '') || ' ' || 
            coalesce(pickup, '') || ' ' || 
            coalesce(dropoff, '') || ' ' || 
            coalesce(city, '') || ' ' || 
            coalesce(service_type, '')
          )
        ) STORED;
      END IF;
    END $$;
  `);

  await client.query(`CREATE INDEX IF NOT EXISTS idx_leads_fts ON leads USING GIN (fts_token);`);

  console.log("Indexes and FTS Tokens created.");

  await client.end();
  console.log("\n✅ Database Search Optimization Complete.");
}

main().catch(err => { console.error(err); process.exit(1); });
