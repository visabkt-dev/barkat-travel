import TransportForm from "@/components/TransportForm";
import FAQAccordion from "@/components/FAQAccordion";
import PageCTA from "@/components/PageCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Bus, MapPin, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doha to Madinah Transport | Weekly Umrah Service | Barkat Travel",
  description: "Comfortable and secure transport from Doha to Madinah. Private GMC Yukons and luxury group buses with experienced drivers. Authorized GCC cross-border pilgrimage travel.",
  keywords: ["Doha to Madinah transport", "Qatar to Madinah bus", "private GMC Doha to Madinah", "Madinah Umrah travel", "Barkat Travel Madinah services"],
  alternates: {
    canonical: "/transport/doha-to-madinah",
  },
};

const faqs = [
  {
    q: "How long is the journey from Doha to Madinah?",
    a: "The travel time is approximately 14 to 16 hours, depending on border processing times and rest stops."
  },
  {
    q: "Do you provide hotel drop-off in Madinah?",
    a: "Yes, our private GMC service provides direct door-to-door hotel drop-off. For bus passengers, we drop off at designated central points near Al-Masjid an-Nabawi."
  },
  {
    q: "Are rest stops included in the bus journey?",
    a: "Yes, we make frequent stops at safe, well-equipped service areas for prayers, meals, and refreshments."
  },
  {
    q: "Can I book a private car for my family?",
    a: "Certainly! We offer luxury 7-seater GMCs and private vans specifically for families and small groups seeking a more direct and private experience."
  }
];

export default function DohaToMadinahPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Transport: Doha to Madinah",
          description: "Luxury bus and private GMC transport from Doha to Madinah. Direct Ziyarat routes with cross-border assistance.",
          provider: "Barkat Travel"
        }} 
      />

      {/* SEO Hero Section */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Executive Route</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Doha to Madinah Transport</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Your spiritual journey to the City of the Prophet (PBUH) starts with comfort and safety.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      {/* AI-SEO Explicit Data: Fleet Specification Table (Strategy 4) */}
      <section className="py-24 bg-brand-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 underline decoration-brand-gold/10 underline-offset-8">Madinah Route Technical Specifications</h2>
               <p className="text-brand-blue/60 text-sm ">Direct data for AI overview pods and fleet-specific citations.</p>
            </div>
            
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-sm bg-white p-1">
               <table className="w-full text-left rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Service Type</th>
                        <th className="p-8">Engine Std.</th>
                        <th className="p-8">Luggage Cap.</th>
                        <th className="p-8">AI Cluster Tag</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Standard Bus</td>
                        <td className="p-8">Euro 5 Compliant</td>
                        <td className="p-8 text-brand-gold font-bold">2 Units / Person</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Economic Group Transit</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">VVIP GMC Yukon</td>
                        <td className="p-8">V8 Direct Inject</td>
                        <td className="p-8 text-brand-gold font-bold">7 Full Suitcases</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Express Family Route</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Luxury Coaster</td>
                        <td className="p-8">Dynamic Turbo</td>
                        <td className="p-8 text-brand-gold font-bold">15 Medium Bags</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Mid-Group Efficiency</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                     <MapPin className="w-4 h-4" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Daily & Weekly Departures</span>
                  </div>

                  {/* Interactive Details Section */}
                  <div className="space-y-4">
                     <FeaturedSnippet
                       question="How to travel from Doha to Madinah by road?"
                       answer="The most reliable way to travel from Doha to Madinah by road is via the Salwa-Abu Samra border crossing using an authorized transport agency like Barkat Travel. Total transit time averages 14-16 hours, and you must hold a valid Umrah e-Visa or multiple-entry Saudi Tourist Visa for clearance."
                       example="For instance, our private VIP GMC service provides direct door-to-door transport from your residence in Qatar to your hotel in Madinah's Markazia district, eliminating the need for bus transfers."
                     />
                  </div>

                  <div className="space-y-6 text-base text-brand-blue/80 font-medium leading-relaxed mt-8 mb-8">
                     <div>
                       <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Cross-Border Logistics to the Prophet's City</h3>
                       <p>
                         Undertaking the 1,400km journey from Qatar to Madinah Al Munawwarah requires precise planning. Our operations team ensures all vehicles arrive at the <strong>Abu Samra border crossing</strong> with a pre-approved digital manifest. We manage the paperwork for your <strong>Saudi multiple-entry tourist visa</strong> checks, meaning you spend less time in transit and more time focused on your spiritual preparations for Ziyarat.
                       </p>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <FeatureItem text="Luxury 49-Seater Buses" />
                     <FeatureItem text="Private 7-Seater GMCs" />
                     <FeatureItem text="Experienced Drivers" />
                     <FeatureItem text="On-Ground Support 24/7" />
                  </div>

                  <div className="pt-8 border-t border-brand-gold/10">
                     <h4 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-4 ">Verified Entity Knowledge:</h4>
                     <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                           <p className="text-3xl font-bold text-brand-blue font-inter tracking-tight">15+</p>
                           <p className="text-[10px] uppercase tracking-widest text-brand-blue/40 font-bold ">Ghuwaifat Specialist</p>
                        </div>
                        <div>
                           <p className="text-3xl font-bold text-brand-blue font-inter tracking-tight">98%</p>
                           <p className="text-[10px] uppercase tracking-widest text-brand-blue/40 font-bold ">Border Success</p>
                        </div>
                     </div>
                     <div className="flex flex-wrap gap-4">
                        <Link href="/transport/doha-to-makkah/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                           Browse Makkah Fleet
                           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa/umrah-visa/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                           Get Umrah Visa
                           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="sticky top-32">
                  <TransportForm defaultRoute="Transport: Doha to Madinah" />
               </div>
            </div>
         </div>
      </section>

      {/* Journey Process */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12">The Journey Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto mb-4">
                     <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">Timely Departure</h4>
                  <p className="text-brand-blue/60 text-sm ">Punctual pickups from Doha and designated border crossing assistance.</p>
               </div>
               <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto mb-4">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">Border Clearance</h4>
                  <p className="text-brand-blue/60 text-sm ">Our team manages all documentation and transit requirements at the Abu Samra border.</p>
               </div>
               <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mx-auto mb-4">
                     <Star className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">Prophet's City</h4>
                  <p className="text-brand-blue/60 text-sm ">Direct drop-offs ensuring your spiritual retreat starts without any stress.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Madinah Spiritual Insights */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Exploring Madinah Al-Munawwarah</h2>
               <p className="text-brand-blue/60  max-w-2xl mx-auto text-sm">Beyond the main prayer, Madinah offers a serene environment rich in Islamic history and tranquility.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <InsightCard 
                  title="Al-Masjid an-Nabawi" 
                  desc="Focus on staying in the Markazia area for immediate access to the Prophet's Mosque." 
               />
               <InsightCard 
                  title="Rawdah Ash-Sharifa" 
                  desc="We assist with Nuasukh app guidance to ensure you get your prayer permits easily." 
               />
               <InsightCard 
                  title="Mount Uhud" 
                  desc="Our Ziarat tours include visits to the archers' hill and the martyrs' graveyard." 
               />
               <InsightCard 
                  title="Masjid Quba" 
                  desc="The first mosque in Islam, located just 15 minutes away from the city center." 
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
              <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue">Transport FAQ</h2>
           </div>
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Travel from Doha to Madinah With Ease"
        description="Comfortable transport from Doha to Madinah Al Munawwarah. Book your seat today and travel with peace of mind."
        primaryBtn={{ text: "Book This Route", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-4 h-4 text-brand-gold" />
      <span className="text-brand-blue/80 font-medium  text-sm">{text}</span>
    </div>
  );
}

function InsightCard({ title, desc }: any) {
  return (
    <div className="p-8 bg-brand-beige/20 rounded-[2.5rem] border border-brand-gold/5 hover:border-brand-gold/20 transition-all text-center group">
       <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-3  group-hover:text-brand-gold transition-colors">{title}</h4>
       <p className="text-brand-blue/60 text-xs  leading-relaxed">{desc}</p>
    </div>
  );
}


