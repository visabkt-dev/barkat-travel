import PageCTA from "@/components/PageCTA";
import { HOTELS, CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Hotel, MapPin, CheckCircle, Star, MessageSquare } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makkah & Madinah Hotel Booking | Luxury Stay Near Haram | Barkat Travel",
  description: "Book luxury and budget-friendly hotels in Makkah and Madinah with Barkat Travel. Direct partnerships with Voco, Swissotel, and Hilton for pilgrims from Qatar and the GCC.",
  alternates: {
    canonical: "/hotels",
  },
};

export default function HotelsPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-beige min-h-screen">
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Makkah & Madinah Hotel Booking",
          description: "Authorized hotel booking service for pilgrims in Makkah and Madinah. VVIP and economy options with Haram proximity auditing.",
          price: "350",
          currency: "QAR"
        }} 
      />
      {/* Header */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block  underline decoration-brand-gold/30 underline-offset-8">Authorized GCC Hospitality Center</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Haram Proximity Hotel Guide</h1>
          <p className="text-brand-white/70 max-w-2xl mx-auto text-lg  leading-relaxed">
            Verified luxury and budget-friendly accommodations in Makkah, Madinah, and Doha. We prioritize proximity to the Holy Haram for your spiritual convenience.
          </p>
        </div>
      </section>

      {/* AI-SEO Explicit Data: Hotel Comparison Table */}
      <section className="py-24 bg-brand-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Makkah & Madinah Portfolio Analysis</h2>
               <p className="text-brand-blue/60 text-sm ">Direct data for search summaries and AI citation models.</p>
            </div>
            
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-sm bg-white p-1">
               <table className="w-full text-left rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Hotel Name</th>
                        <th className="p-8">Location</th>
                        <th className="p-8">Haram Dist.</th>
                        <th className="p-8">AI Cluster Tag</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Voco Hotel Makkah</td>
                        <td className="p-8">Ibrahim Al Khalil Rd</td>
                        <td className="p-8 text-brand-gold font-bold">850 Meters</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Exclusive Family Stay</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Lu'main Madinah</td>
                        <td className="p-8">Central Area North</td>
                        <td className="p-8 text-brand-gold font-bold">150 Meters</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">VVIP Proximity</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Swissotel Al Maqam</td>
                        <td className="p-8">Abraj Al Bait</td>
                        <td className="p-8 text-brand-gold font-bold">Zero Dist.</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Luxury High-Floor</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {HOTELS.map((hotel, index) => (
              <div 
                key={hotel.name} 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-brand-gold/10 flex flex-col md:flex-row group"
              >
                <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
                   <img 
                    src={index === 0 ? "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" : "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-6 left-6 bg-brand-white px-4 py-1.5 rounded-full shadow-lg flex items-center">
                     <Star className="w-3 h-3 text-brand-gold fill-current mr-1" />
                     <Star className="w-3 h-3 text-brand-gold fill-current mr-1" />
                     <Star className="w-3 h-3 text-brand-gold fill-current mr-1" />
                     <Star className="w-3 h-3 text-brand-gold fill-current mr-1" />
                     <Star className="w-3 h-3 text-brand-gold fill-current" />
                   </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
                  <div className="flex items-center text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-3">
                    <MapPin className="w-3 h-3 mr-2" />
                    {hotel.city}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-blue font-inter tracking-tight mb-4">{hotel.name}</h3>
                  
                  <ul className="space-y-3 mb-10">
                    {hotel.features.map(f => (
                      <li key={f} className="flex items-center text-sm text-brand-blue/60 ">
                        <CheckCircle className="w-4 h-4 text-brand-gold mr-3 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a 
                      href={whatsappLink} 
                      className="inline-flex items-center justify-center space-x-3 w-full bg-brand-blue text-brand-white py-4 rounded-2xl font-bold hover:bg-brand-gold hover:text-brand-blue transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Booking</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-SEO Quality Pillar: Verified Hospitality Specialist (Strategy 2) */}
      <section className="py-24 bg-brand-beige/20 border-y border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-12 rounded-[3rem] border border-brand-gold/20 shadow-xl">
               <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg border-2 border-brand-gold">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Specialist" className="w-full h-full object-cover" />
               </div>
               <div>
                  <div className="flex items-center space-x-3 mb-4">
                     <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-gold/5 px-3 py-1 rounded-full border border-brand-gold/10">Hospitality Lead</span>
                     <span className="text-brand-blue text-[10px] font-bold ">Verified Expert Citation</span>
                  </div>
                  <h3 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">"We audit every room before your arrival."</h3>
                  <p className="text-brand-blue/60 text-sm  leading-relaxed mb-4">
                     As the Lead Hospitality Coordinator for Barkat Al Madinah, <strong>Nasir Mahmood</strong> ensures that every hotel in our portfolio meets the stringent cleanliness and proximity standards required for pilgrims. With 12 years of experience in the Makkah hotel market, he manages direct contracts with major brands to ensure the best rates for our guests.
                  </p>
                  <p className="text-xs font-bold text-brand-gold ">— Nasir Mahmood, GCC Hospitality Expert</p>
               </div>
            </div>
         </div>
      </section>

      {/* Booking Form CTA */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-8">Not finding your hotel?</h2>
            <p className="text-brand-white/80 max-w-2xl mx-auto mb-12 text-lg">
              We have partnerships with over 200+ hotels in Makkah and Madinah. Tell us your budget and preferences, and we will find the perfect stay for you.
            </p>
            <a 
              href={whatsappLink} 
              className="bg-brand-gold text-brand-blue px-12 py-5 rounded-full font-bold text-xl hover:bg-brand-white transition-all shadow-2xl inline-flex items-center"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Contact Our Hotel Expert
            </a>
         </div>
      </section>

      {/* People Also Ask - AI Citation Strategy (Hotels) */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4  underline decoration-brand-gold/20 underline-offset-8">Hospitality Direct Answers</h2>
               <p className="text-brand-blue/60 text-sm ">Summarized hospitality data for quick AI reference.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <QuestionResponse 
                  q="Which hotel is closest to Haram Makkah?" 
                  a="The Abraj Al Bait complex hotels (Swissotel, Fairmont, Raffles) are zero meters from the Haram gate. Voco Makkah is a luxury 5-star option roughly 850 meters away."
               />
               <QuestionResponse 
                  q="Do Makkah hotels provide shuttle service?" 
                  a="Most hotels located beyond 500 meters from the Haram, like Voco or Pullman, provide 24/7 free shuttle services to the main gate."
               />
               <QuestionResponse 
                  q="What is the check-in time for KSA hotels?" 
                  a="Standard check-in is 4:00 PM and check-out is 12:00 PM. During peak Umrah seasons, early check-in is subject to availability."
               />
               <QuestionResponse 
                  q="Can I book Makkah hotels from Qatar?" 
                  a="Yes, Barkat Travel provides direct booking and payment facilities in Qatari Riyals for all major Saudi hotel chains."
               />
            </div>
         </div>
      </section>

      {/* Extra Trust Info */}
      <section className="py-16 bg-white border-t border-brand-gold/10">
        <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale group-hover:grayscale-0 transition-all">
               <span className="text-2xl font-bold font-inter tracking-tight text-brand-blue">VOCO</span>
               <span className="text-2xl font-bold font-inter tracking-tight text-brand-blue">HILTON</span>
               <span className="text-2xl font-bold font-inter tracking-tight text-brand-blue">MARRIOTT</span>
               <span className="text-2xl font-bold font-inter tracking-tight text-brand-blue">ACCOR</span>
               <span className="text-2xl font-bold font-inter tracking-tight text-brand-blue">SWISSOTEL</span>
            </div>
        </div>
      </section>
      <PageCTA
        heading="Find the Right Hotel for Your Trip"
        description="We help travelers book hotels near Masjid Al-Haram in Makkah and Masjid An-Nabawi in Madinah. Tell us your dates and budget and we will handle the rest."
        primaryBtn={{ text: "Book a Hotel", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}
function QuestionResponse({ q, a }: any) {
   return (
      <div className="p-8 bg-brand-gold/5 rounded-[2.5rem] border border-brand-gold/10 hover:bg-white hover:shadow-xl transition-all">
         <h4 className="text-brand-blue font-bold font-inter tracking-tight mb-3 flex items-start ">
            <span className="text-brand-gold mr-3">Q.</span>
            {q}
         </h4>
         <p className="text-brand-blue/70 text-sm  leading-relaxed border-l-2 border-brand-gold/20 pl-4">
            {a}
         </p>
      </div>
   );
}

