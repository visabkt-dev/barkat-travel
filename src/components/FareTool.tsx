"use client";
import React, { useState } from "react";
import { getWhatsAppLink, CONTACT_INFO } from "@/lib/constants";
import { Car, MapPin, DollarSign, ShieldCheck } from "lucide-react";

export default function FareTool() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateFare = (e: React.FormEvent) => {
    e.preventDefault();
    if (!departure || !destination || !vehicle) return;

    let baseFare = 0;
    
    // Simple mock calculation logic for demonstration
    if (destination.includes("ziyarat")) baseFare = 400;
    else if (destination === "makkah") baseFare = 2800;
    else if (destination === "madinah") baseFare = 3200;
    else if (destination === "taif") baseFare = 800;
    else if (destination === "riyadh") baseFare = 1500;
    else if (destination === "jeddah") baseFare = 3000;

    let finalFare = baseFare;
    let vehicleName = "";
    let capacity = "";
    
    // adjust if it is purely an internal saudi route (less cost)
    if (
      ["makkah", "madinah", "jeddah", "taif", "riyadh"].includes(departure) &&
      ["makkah", "madinah", "jeddah", "taif", "riyadh", "ziyarat makkah", "ziyarat madinah", "ziyarat taif"].includes(destination)
    ) {
        if (departure === "jeddah" && destination === "makkah") baseFare = 250;
        else if (departure === "makkah" && destination === "madinah") baseFare = 450;
        else if (departure === "jeddah" && destination === "taif") baseFare = 350;
        else baseFare = 450;
    }

    if (vehicle === "camry") {
      finalFare = baseFare * 1;
      vehicleName = "Toyota Camry";
      capacity = "Up to 4 Passengers";
    } else if (vehicle === "staria") {
      finalFare = baseFare * 1.5;
      vehicleName = "Hyundai Staria";
      capacity = "Up to 7 Passengers";
    } else if (vehicle === "yukon") {
      finalFare = baseFare * 2.5; 
      vehicleName = "GMC Yukon Executive";
      capacity = "Up to 7 Passengers (Luxury)";
    } else if (vehicle === "bus") {
      finalFare = 150; // Per seat price
      vehicleName = "Luxury Bus (Shared)";
      capacity = "Per Seat Booking";
    }

    setResult({
      fare: vehicle === "bus" ? `SAR ${finalFare}` : `SAR ${finalFare.toLocaleString()}`,
      route: `${departure.charAt(0).toUpperCase() + departure.slice(1)} → ${destination.charAt(0).toUpperCase() + destination.slice(1).replace('_', ' ')}`,
      vehicleName,
      capacity,
      isPerSeat: vehicle === "bus"
    });
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {!result ? (
        <form onSubmit={calculateFare} className="space-y-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <label className="block text-brand-blue font-black text-sm uppercase tracking-widest mb-2"><MapPin size={16} className="inline mr-2 text-brand-gold"/> 1. Select Departure</label>
              <select
                required
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-bold"
              >
                <option value="" disabled>Where from?</option>
                <optgroup label="GCC Cities">
                  <option value="doha">Doha</option>
                  <option value="dubai">Dubai</option>
                  <option value="muscat">Muscat</option>
                  <option value="manama">Manama</option>
                </optgroup>
                <optgroup label="Saudi Arabia">
                  <option value="makkah">Makkah</option>
                  <option value="madinah">Madinah</option>
                  <option value="jeddah">Jeddah</option>
                  <option value="taif">Taif</option>
                  <option value="riyadh">Riyadh</option>
                </optgroup>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-brand-blue font-black text-sm uppercase tracking-widest mb-2"><MapPin size={16} className="inline mr-2 text-brand-gold"/> 2. Select Destination</label>
              <select
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-bold"
              >
                <option value="" disabled>Where to?</option>
                <optgroup label="Saudi Inter-city">
                  <option value="makkah">Makkah</option>
                  <option value="madinah">Madinah</option>
                  <option value="jeddah">Jeddah</option>
                  <option value="taif">Taif</option>
                  <option value="riyadh">Riyadh</option>
                </optgroup>
                <optgroup label="Ziyarat (Tours)">
                  <option value="ziyarat makkah">Makkah Ziyarat</option>
                  <option value="ziyarat madinah">Madinah Ziyarat</option>
                  <option value="ziyarat taif">Taif Ziyarat</option>
                </optgroup>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-brand-blue font-black text-sm uppercase tracking-widest mb-2"><Car size={16} className="inline mr-2 text-brand-gold"/> 3. Select Vehicle</label>
              <select
                required
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-bold"
              >
                <option value="" disabled>Choose your transport type...</option>
                <option value="camry">Toyota Camry (4 Pax Sedan)</option>
                <option value="staria">Hyundai Staria (7 Pax Minivan)</option>
                <option value="yukon">GMC Yukon (VVIP Luxury SUV)</option>
                <option value="bus">Luxury Bus (Cost Per Seat)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={!departure || !destination || !vehicle}
            className="w-full bg-brand-gold hover:bg-white text-brand-blue hover:text-brand-gold border border-brand-gold transition-all duration-300 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-2 shadow-xl shadow-brand-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Exact Fare <DollarSign size={20} />
          </button>
        </form>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-gold">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Estimated Rate</h2>
          <div className="text-4xl md:text-6xl font-black text-brand-blue mb-2 tracking-tight">
            {result.fare}
            {result.isPerSeat && <span className="text-sm text-gray-400 ml-2 font-medium">/ seat</span>}
          </div>
          <p className="text-brand-blue/60 mb-8 pb-8 border-b border-gray-100">Zero hidden fees. Includes parking & taxes.</p>

          <div className="grid grid-cols-2 gap-4 text-left max-w-sm mx-auto mb-8 bg-gray-50 p-6 rounded-2xl">
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Route</span>
              <span className="block text-sm font-bold text-brand-blue truncate">{result.route}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Vehicle</span>
              <span className="block text-sm font-bold text-brand-blue truncate">{result.vehicleName}</span>
            </div>
            <div className="col-span-2 mt-2 pt-4 border-t border-gray-200">
               <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Capacity</span>
              <span className="block text-sm font-bold text-brand-blue truncate">{result.capacity}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-8 py-4 rounded-xl font-black text-sm hover:brightness-110 transition-all shadow-xl"
            >
              Lock in this Rate
            </a>
            <button
              onClick={() => setResult(null)}
              className="text-brand-blue underline text-sm font-bold py-4 px-6 hover:text-brand-gold transition-colors"
            >
              Recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
