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
  console.log("Connected to PostgreSQL for System Upgrade...");
  
  // 1. Create Transport Trips Table
  await client.query(`
    CREATE TABLE IF NOT EXISTS transport_trips (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
      name TEXT,
      whatsapp TEXT,
      email TEXT,
      service_type TEXT,
      pickup TEXT,
      dropoff TEXT,
      travel_date DATE,
      passengers TEXT,
      additional_info TEXT,
      status VARCHAR(50) DEFAULT 'new',
      admin_notes TEXT,
      driver_name TEXT,
      driver_phone TEXT,
      vehicle_assigned TEXT,
      price_quoted DECIMAL(10,2)
    );
  `);
  console.log("transport_trips table created.");

  // 2. Create Visa Applications Table
  await client.query(`
    CREATE TABLE IF NOT EXISTS visa_applications (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
      name TEXT,
      whatsapp TEXT,
      email TEXT,
      visa_type TEXT,
      nationality TEXT,
      applicants INTEGER,
      travel_date DATE,
      additional_info TEXT,
      status VARCHAR(50) DEFAULT 'new',
      admin_notes TEXT,
      passport_number TEXT,
      mofa_number TEXT,
      price_quoted DECIMAL(10,2)
    );
  `);
  console.log("visa_applications table created.");

  // 3. Create Hotel Bookings Table
  await client.query(`
    CREATE TABLE IF NOT EXISTS hotel_bookings (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
      name TEXT,
      whatsapp TEXT,
      email TEXT,
      city TEXT,
      check_in DATE,
      check_out DATE,
      passengers TEXT,
      additional_info TEXT,
      status VARCHAR(50) DEFAULT 'new',
      admin_notes TEXT,
      hotel_name TEXT,
      room_type TEXT,
      price_quoted DECIMAL(10,2)
    );
  `);
  console.log("hotel_bookings table created.");

  // RLS Policies Setup
  const tables = ['transport_trips', 'visa_applications', 'hotel_bookings'];
  for (const table of tables) {
    await client.query(`ALTER TABLE ${table} ENABLE ROW LEVEL SECURITY;`);
    await client.query(`DROP POLICY IF EXISTS "Allow anonymous inserts" ON ${table};`);
    await client.query(`CREATE POLICY "Allow anonymous inserts" ON ${table} FOR INSERT TO anon WITH CHECK (true);`);
  }
  console.log("RLS Policies configured for Anon inserts.");

  await client.end();
}

main().catch(console.error);
