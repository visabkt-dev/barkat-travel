const { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oublaakgqdflknupivra.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YmxhYWtncWRmbGtudXBpdnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NDA1NjYsImV4cCI6MjA4OTExNjU2Nn0.-gscddaBYFY-LyE_hM-8nv8luzk-6-TmBU-jUKFonyY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data, error } = await supabase.from('leads').select('*').limit(1);
  console.log("Anon Read:", !!data ? "Success (Vulnerable)" : "Failed (Secure)", error || "");
}
check();
