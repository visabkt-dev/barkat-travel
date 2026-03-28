import React from "react";
import type { Metadata } from "next";
import GetQuoteForm from "@/components/GetQuoteForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import { CheckCircle, ShieldCheck, MapPin, Star, MessageSquare } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Custom Umrah Quote | Doha to Makkah | Barkat Travel",
  description: "Request a custom quotation for private VIP Umrah transport from Doha to Makkah and Madinah. Premium GMC Yukon, luxury bus, or family van options available.",
  alternates: {
    canonical: "/get-quote",
  },
};

export default function GetQuotePage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  const schemaData = {
    "@type": "Service",
    "name": "Umrah Transport & Chauffeur Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Barkat Travel",
      "telephone": CONTACT_INFO.qatar.phones[0]
    },
    "serviceType": ["Private Taxi", "Chauffeur Service", "Umrah Transport"],
    "areaServed": [
      { "@type": "City", "name": "Doha" },
      { "@type": "City", "name": "Makkah" },
      { "@type": "City", "name": "Madinah" }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-24">
      <SchemaMarkup schemaType="Service" data={schemaData} />

      <div className="container mx-auto px-4">
        
        {/* ── HERO TEXT & TRUST SIGNALS ── */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" /> Direct Umrah Booking
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-inter text-brand-blue mb-6 leading-[1.1] tracking-tight">
             Request Your <span className="text-brand-gold">Umrah Transport Quote</span>
          </h1>
          <p className="text-brand-blue/70 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
             Private and group transport from Qatar to Makkah & Madinah. Fill out the multi-step form below to request accurate pricing for your desired vehicle and travel dates.
          </p>
          
          {/* Trust Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_,i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <span className="text-sm font-bold text-brand-blue">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span className="text-sm font-bold text-brand-blue">Licensed GCC Transport</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span className="text-sm font-bold text-brand-blue">24/7 WhatsApp Support</span>
            </div>
          </div>
        </div>
        
        {/* ── QUOTE FORM & SIDEBAR CONTENT ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <GetQuoteForm />
          </div>

          {/* Sidebar Area: Visuals & Conversion Boost */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            
            {/* Visual Callout */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[280px]">
               <img src="https://images.unsplash.com/photo-1565552643952-b43cb3b5d27b?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Luxury Chauffeur Service" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white mb-2 leading-tight">Premium Fleet <br/>For Your Family</h3>
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                     <MapPin className="w-4 h-4" /> Seamless Border Crossing
                  </div>
               </div>
            </div>

            {/* Why Book With Us Section */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
               <h3 className="text-xl font-black text-brand-blue mb-6 font-inter">Why Book With Barkat Travel?</h3>
               <ul className="space-y-4">
                 {[
                   "Priority Border Clearance Assistance",
                   "Professional, Arabic & Urdu Speaking Umrah Drivers",
                   "Modern Fleet (GMC, Staria, Hiace, Coaster)",
                   "Fixed Transparent Pricing (No Hidden Fees)",
                   "Direct Door-to-Door Service from Doha to your Makkah/Madinah Hotel"
                 ].map((point, i) => (
                   <li key={i} className="flex gap-3 items-start">
                     <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                     <span className="text-sm text-brand-blue/80 leading-relaxed font-medium">{point}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Instant WhatsApp Option */}
            <div className="bg-[#25D366]/10 rounded-3xl p-8 border border-[#25D366]/20 text-center">
               <MessageSquare className="w-8 h-8 text-[#25D366] mx-auto mb-4" />
               <h3 className="text-lg font-black text-brand-blue mb-2">Need a quote instantly?</h3>
               <p className="text-sm text-brand-blue/70 mb-6">Skip the form and message our live agents directly on WhatsApp for immediate pricing.</p>
               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-xl font-bold transition-all shadow-md">
                   Get Instant Quote via WhatsApp
               </a>
            </div>

          </div>
        </div>

        {/* ── SEO CONTENT SUMMARY ── */}
        <div className="max-w-4xl mx-auto mt-24 text-center border-t border-gray-200 pt-16">
           <h2 className="text-xl font-bold text-brand-blue mb-4">Dedicated Umrah Transport Services</h2>
           <p className="text-sm text-brand-blue/60 leading-relaxed max-w-3xl mx-auto">
             Barkat Travel provides private Umrah transport services from Doha to Makkah and Madinah. Travelers can request a custom quote for luxury taxis, family transport, or group Umrah travel with professional drivers and border assistance. We ensure smooth travel with our premium GMC Yukon executive rides, Hyundai Staria family vans, and large Coaster buses. Your spiritual journey from Qatar to Saudi Arabia begins with a secure, reliable, and comfortable ride.
           </p>
        </div>

      </div>
    </div>
  );
}
