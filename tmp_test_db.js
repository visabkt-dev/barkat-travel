const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function test() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  console.log("Testing hotel_bookings access...");
  const { data, count, error } = await supabase
    .from('hotel_bookings')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error("ERROR:", error);
  } else {
    console.log("SUCCESS! Count:", count);
  }

  console.log("Testing transport_trips access...");
  const { count: tCount, error: tError } = await supabase
    .from('transport_trips')
    .select('*', { count: 'exact', head: true });

  if (tError) {
    console.error("TRANSPORT ERROR:", tError);
  } else {
    console.log("TRANSPORT SUCCESS! Count:", tCount);
  }
}

test();
