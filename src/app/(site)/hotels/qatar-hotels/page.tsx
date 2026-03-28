import HotelForm from "@/components/HotelForm";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Hotel, MapPin, CheckCircle, MessageSquare, Star, ArrowRight, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qatar Hotel Booking | Luxury Doha Stays | Barkat Travel",
  description: "Inquire about your stay in Qatar with Barkat Travel. Luxury hotels in Doha, Lusail, and West Bay for business travelers and tourists. Best corporate and transit rates.",
  keywords: ["Qatar hotel booking", "Doha luxury hotels", "Lusail hotel rates", "Doha stopover hotels", "Barkat Travel Qatar hotels"],
  alternates: {
    canonical: "/hotels/qatar-hotels",
  },
};

const faqs = [
  {
    q: "Do you offer corporate rates for long-term stays in Doha?",
    a: "Yes, we specialize in corporate and long-term accommodation for business executives in West Bay and Lusail with significantly reduced rates."
  },
  {
    q: "Can you arrange airport transfers with my hotel booking?",
    a: "Absolutely. Most of our exclusive hotel bookings in Qatar include a complimentary one-way luxury airport transfer from Hamad International Airport."
  },
  {
    q: "Are the hotel rates on your site updated for the current season?",
    a: "Our rates are dynamic. We recommend inquiring via our form or WhatsApp to get the most accurate 'Flash Sale' prices for your specific dates."
  }
];

export default function QatarHotelsPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />

      {/* SEO Hero Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs underline decoration-brand-gold/30 underline-offset-4">Exclusive Stays</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Qatar Hotel Booking</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Modern luxury meets authentic hospitality in the heart of Doha.
          </p>
        </div>
      </section>

      {/* Main Grid with Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
               <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Selected Luxury Partners</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue tracking-tight ">Exquisite Doha Accommodations</h2>
               <p className="text-brand-blue/70 text-lg leading-relaxed ">
                 Barkat Travel provides more than just a room; we provide a curated experience. From the skyline of <strong>West Bay</strong> to the cultural heart of <strong>Souq Waqif</strong>, our hotel network ensures you stay in the most prestigious locations in Qatar at rates unavailable on public search engines.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <QatarHotelItem 
                    name="Mondrian Doha" 
                    area="West Bay Lagoon" 
                    image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" 
                  />
                  <QatarHotelItem 
                    name="The Ritz-Carlton" 
                    area="West Bay" 
                    image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" 
                  />
               </div>

               <div className="pt-8 border-t border-brand-gold/10">
                  <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4 ">Corporate & Transit Benefits:</h4>
                  <div className="grid grid-cols-2 gap-4">
                     <BenefitItem text="Complimentary Airport Transfers" />
                     <BenefitItem text="Corporate Bulk Rates" />
                     <BenefitItem text="Late Check-out Access" />
                     <BenefitItem text="Central Locations" />
                  </div>
               </div>
            </div>

            <div className="sticky top-32">
               <HotelForm defaultCity="Qatar Hotel Quote Inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Book via Barkat Section */}
      <section className="py-24 bg-brand-blue text-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-gold ">The Barkat Advantage</h2>
               <p className="text-brand-white/40 mt-2 uppercase tracking-widest text-xs font-bold">Why local knowledge matters</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <AdvantageCard 
                 title="Verified Reviews" 
                 desc="We only partner with hotels that maintain a 4.5+ real customer satisfaction rating." 
               />
               <AdvantageCard 
                 title="Direct Inventory" 
                 desc="Our direct links with hotel management mean we can often secure 'sold out' rooms." 
               />
               <AdvantageCard 
                 title="24/7 Concierge" 
                 desc="Our Doha office is just minutes away to assist with any on-ground requests." 
               />
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                 <HelpCircle className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue">Doha Hotel FAQ</h2>
           </div>
           
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <ContactCTA title="Inquire about your Doha Stay" />
    </div>
  );
}

function QatarHotelItem({ name, area, image }: any) {
  return (
    <div className="group rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-brand-gold/5 hover:border-brand-gold/40 flex flex-col h-full">
       <div className="h-48 overflow-hidden relative">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
       </div>
       <div className="p-6 bg-white flex-grow flex flex-col">
          <h3 className="text-lg font-bold text-brand-blue font-inter tracking-tight mb-1 group-hover:text-brand-gold transition-colors ">{name}</h3>
          <p className="text-[10px] text-brand-blue/40 flex items-center mb-4 uppercase tracking-widest font-bold">
             <MapPin className="w-3 h-3 mr-2" />
             {area}, Qatar
          </p>
          <div className="mt-auto">
             <a href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])} className="w-full block bg-brand-beige/20 text-brand-blue py-3 rounded-xl text-center text-xs font-bold group-hover:bg-brand-gold transition-colors border border-brand-gold/10">
                Inquire Rates
             </a>
          </div>
       </div>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
       <CheckCircle className="w-4 h-4 text-brand-gold" />
       <span className="text-brand-blue/70 text-xs font-bold  tracking-tight">{text}</span>
    </div>
  );
}

function AdvantageCard({ title, desc }: any) {
  return (
    <div className="p-8 border border-white/10 rounded-[2rem] hover:bg-white/5 transition-all group">
       <h4 className="text-xl font-bold font-inter tracking-tight text-brand-gold mb-4  group-hover:tracking-widest transition-all">{title}</h4>
       <p className="text-brand-white/50 text-sm  leading-relaxed">{desc}</p>
    </div>
  );
}


