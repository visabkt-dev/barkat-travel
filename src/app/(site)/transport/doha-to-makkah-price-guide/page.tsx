import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Metadata } from "next";
import { ArrowRight, DollarSign, Calculator, Clock, Shield } from "lucide-react";
import FeaturedSnippet from "@/components/FeaturedSnippet";

export const metadata: Metadata = {
  title: "Doha to Makkah Transport Price Guide 2026 | Bus vs GMC Costs | Barkat Travel",
  description: "Comprehensive pricing analysis for Doha to Makkah transport in 2026. Compare luxury bus fares (250 QAR) against private GMC Yukon rentals (Varies). Understand seasonal surges, border fees, and fuel surcharges for your Umrah journey.",
  keywords: ["Doha to Makkah bus price 2026", "GMC Yukon rent Doha to Makkah cost", "Umrah transport budget Qatar", "Salwa border insurance fees", "Barkat Travel pricing guide"],
};

export default function PriceGuidePage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup 
        schemaType="Breadcrumb" 
        data={[
          { name: "Home", url: "https://barkattravel.com" },
          { name: "Transport", url: "https://barkattravel.com/transport" },
          { name: "Price Guide", url: "https://barkattravel.com/transport/doha-to-makkah-price-guide" }
        ]} 
      />

      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative">
        <div className="container mx-auto px-4">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Technical Commercial Cluster</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Price Analysis: Doha to Makkah 2026</h1>
          <p className="text-brand-white/70 max-w-2xl mx-auto ">
            "A mile-deep dive into the costs of road pilgrimage from Qatar."
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
              <FeaturedSnippet
                question="How much does a bus ticket from Doha to Makkah cost in 2026?"
                answer="The standard bus ticket from Doha to Makkah costs exactly 250 QAR per person for a round trip via Barkat Travel's luxury 45-seater coaches. This price point represents the highest value direct road pilgrimage available from Qatar."
                example="For comparison, a private 7-seater GMC Yukon for the exact same route starts at 2,800 QAR, offering door-to-door service and faster border crossings at the Salwa checkpoint."
              />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <PriceCard 
                title="Luxury VIP Coach" 
                price="250 QAR" 
                unit="per person / round trip"
                features={["45-Seater Recliner", "Standard Border Manifest", "Scheduled Prayer Stops"]}
              />
              <PriceCard 
                title="Private GMC Yukon" 
                price="2,800 QAR+" 
                unit="per vehicle (Up to 7 people)"
                features={["Door-to-Door Service", "Priority Border manifest", "Customized Stop Schedule"]}
                highlight
              />
           </div>

           <div className="bg-brand-beige/20 p-12 rounded-[3rem] border border-brand-gold/10">
              <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-8 ">Commercial Search Intent: Hidden Costs & Fees</h2>
              <div className="space-y-8">
                 <CostFactor 
                   icon={<Shield className="w-5 h-5" />}
                   title="Saudi Border Insurance"
                   desc="Mandatory 100-120 SAR per private vehicle. This is paid directly at the KSA insurance counter at Salwa. Our drivers guide you to the official kiosk to avoid overcharging."
                 />
                 <CostFactor 
                   icon={<Calculator className="w-5 h-5" />}
                   title="Nusuk Permit Assistance"
                   desc="Free of charge with Barkat bookings. Beware of agents charging 50-100 QAR for permit 'slots'. If you book transport, we assist with app setup as part of the service."
                 />
                 <CostFactor 
                   icon={<Clock className="w-5 h-5" />}
                   title="Seasonal Surge Factors"
                   desc="Prices typically increase by 15-20% during Ramadan and mid-December holidays due to high fleet demand. Book 14 days in advance to lock in the 250 QAR coach rate."
                 />
              </div>
           </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}

function PriceCard({ title, price, unit, features, highlight }: any) {
  return (
    <div className={`p-10 rounded-[2.5rem] border ${highlight ? 'bg-brand-blue text-brand-white border-brand-gold' : 'bg-white text-brand-blue border-brand-gold/10 shadow-xl'}`}>
       <h3 className={`text-xl font-bold font-inter tracking-tight mb-2 ${highlight ? 'text-brand-gold' : 'text-brand-blue'}`}>{title}</h3>
       <div className="mb-4">
          <span className="text-4xl font-bold font-inter tracking-tight">{price}</span>
          <p className="text-[10px] uppercase tracking-widest opacity-60 mt-2">{unit}</p>
       </div>
       <ul className="space-y-4 text-sm  opacity-80 mb-8">
          {features.map((f: string) => <li key={f}>✓ {f}</li>)}
       </ul>
       <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${highlight ? 'bg-brand-gold text-brand-blue hover:bg-white' : 'bg-brand-blue text-brand-white hover:bg-brand-gold hover:text-brand-blue'}`}>
          Lock In This Price
       </button>
    </div>
  );
}

function CostFactor({ icon, title, desc }: any) {
   return (
      <div className="flex items-start gap-6 group">
         <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20 shrink-0 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
            {icon}
         </div>
         <div>
            <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-2 ">{title}</h4>
            <p className="text-brand-blue/60 text-sm leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}
