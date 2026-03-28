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
  console.log("Setting up Enterprise-Grade Indexes for all modules...");

  // 1. Hotel Bookings
  await client.query(`CREATE INDEX IF NOT EXISTS idx_hotels_city ON hotel_bookings (city);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_hotels_dates ON hotel_bookings (check_in, check_out);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_hotels_name ON hotel_bookings (hotel_name);`);

  // 2. Transport Trips
  await client.query(`CREATE INDEX IF NOT EXISTS idx_trans_driver ON transport_trips (driver_name);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_trans_route ON transport_trips (pickup, dropoff);`);

  // 3. Visa Applications
  await client.query(`CREATE INDEX IF NOT EXISTS idx_visa_passport ON visa_applications (passport_number);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_visa_mofa ON visa_applications (mofa_number);`);

  // 4. Pricing Rules
  await client.query(`CREATE INDEX IF NOT EXISTS idx_pricing_cat ON pricing_rules (category);`);

  console.log("✅ All sub-modules optimized for sub-second performance.");
  await client.end();
}

main().catch(err => { console.error(err); process.exit(1); });
