import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { verifyAdminToken } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    // Get all room inventory with hotel names
    const { data, error } = await supabase
      .from("hotel_rooms")
      .select(`
        *,
        hotels ( name, location )
      `)
      .order("hotel_id", { ascending: true })
      .order("room_number", { ascending: true });

    if (error) throw error;

    // Aggregate stats per hotel
    const { data: hotels, error: hError } = await supabase.from("hotels").select("*");
    if (hError) throw hError;

    const stats = hotels.map(h => {
      const hotelRooms = data.filter(r => r.hotel_id === h.id);
      return {
        id: h.id,
        name: h.name,
        total: h.total_rooms,
        available: hotelRooms.filter(r => r.status === 'available').length,
        occupied: hotelRooms.filter(r => r.status === 'occupied').length,
        maintenance: hotelRooms.filter(r => r.status === 'maintenance').length,
        rooms: hotelRooms
      };
    });

    return NextResponse.json({ data: stats });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = req.cookies.get("admin_session");
  if (!verifyAdminToken(session?.value)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  try {
    const { id, status } = await req.json();
    const { data, error } = await supabase
      .from("hotel_rooms")
      .update({ status })
      .eq("id", id)
      .select()
      .single();
    
    if (error) throw error;
    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
