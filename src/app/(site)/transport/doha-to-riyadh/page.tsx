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
  title: "Doha to Riyadh Taxi | GCC Cross-Border Travel | Barkat Travel",
  description: "Premium taxi and transport service from Doha to Riyadh. Luxury GMCs and business sedans for families and corporate travelers. Safe cross-border GCC transit.",
  keywords: ["Doha to Riyadh taxi", "Qatar to Riyadh car service", "Doha to Riyadh group travel", "Business transport Riyadh", "Barkat Travel GCC routes"],
  alternates: {
    canonical: "/transport/doha-to-riyadh",
  },
};

const faqs = [
  {
    q: "Do you offer door-to-door service from Doha to Riyadh?",
    a: "Yes, our private SUV and sedan services provide direct door-to-door pickup in Doha and drop-off at your specific location in Riyadh."
  },
  {
    q: "How often do your buses run to Riyadh from Qatar?",
    a: "We have regular weekly bus departures. For groups and business travelers, our private car service is available 24/7 on demand."
  },
  {
    q: "Do your drivers assist with border procedures?",
    a: "Absolutely. Our professional drivers are experienced with the Salwa/Abu Samra border formalities and will guide you through the process."
  }
];

export default function DohaToRiyadhPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Transport: Doha to Riyadh",
          description: "Private executive transport and luxury bus services from Doha to Riyadh. Business connectivity and seamless border crossings.",
          provider: "Barkat Travel"
        }} 
      />

      {/* SEO Hero Header */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Capital to Capital</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4  tracking-tight">Doha to Riyadh transport</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Reliable cross-border connectivity for business executives and families.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      {/* Route Matrix */}
      <section className="py-24 bg-brand-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 underline decoration-brand-gold/10 underline-offset-8">Doha to Riyadh Route Logistics</h2>
               <p className="text-brand-blue/60 text-sm ">Travel metrics for regional business travel.</p>
            </div>
            
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-sm bg-white p-1">
               <table className="w-full text-left rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Fleet Category</th>
                        <th className="p-8">Border Crossing</th>
                        <th className="p-8">WIFI / Amenities</th>
                        <th className="p-8">Distance / Time</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Executive GMC</td>
                        <td className="p-8">Salwa Priority</td>
                        <td className="p-8 text-brand-gold font-bold">On-Request</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Business Executive</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Luxury Bus</td>
                        <td className="p-8">Regular Transit</td>
                        <td className="p-8 text-brand-gold font-bold">Standard AC</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Economic Group Route</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Business Sedan</td>
                        <td className="p-8">Fast-Track Manifest</td>
                        <td className="p-8 text-brand-gold font-bold">Mobile Link</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Solo Corporate</td>
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
                     <span className="text-[10px] font-bold uppercase tracking-widest">Cross-Border Specialists</span>
                  </div>

                  {/* Interactive Details Section */}
                  <div className="space-y-4">
                     <FeaturedSnippet
                       question="How to get a car with driver from Doha to Riyadh?"
                       answer="You can book a private, chauffeured car from Doha to Riyadh through Barkat Travel. We deploy VVIP GMC SUVs and luxury business sedans whose professional drivers handle all GCC border entry protocols at the Salwa crossing, guaranteeing a seamless 6 to 8-hour executive journey."
                       example="For instance, business executives heading to the King Abdullah Financial District in Riyadh can depart Doha at their preferred time, bypassing the strict schedules of airport transits."
                     />
                  </div>

                  <div className="space-y-6 text-base text-brand-blue/80 font-medium leading-relaxed mt-8 mb-8">
                     <div>
                       <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Corporate and Family Cross-Border Transit</h3>
                       <p>
                         Traveling seamlessly from Qatar to the Saudi capital requires dealing with the <strong>Salwa Saudi border</strong> logistics and securing the correct <strong>business or tourist visa</strong>. By utilizing our fast-track manifest protocols, executives and families alike can avoid prolonged queues. We provide direct drop-offs to key districts like KAFD, Boulevard City, or your chosen Riyadh hotel.
                       </p>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-beige/20 p-8 rounded-[2rem] border border-brand-gold/10">
                     <OptionItem icon={<Shield className="w-4 h-4" />} title="Authorized Entry" desc="Fully licensed for KSA-Qatar routes." />
                     <OptionItem icon={<Clock className="w-4 h-4" />} title="Flexible Timing" desc="Pickups scheduled to your preference." />
                     <OptionItem icon={<Star className="w-4 h-4" />} title="VVIP Fleet" desc="GMC Yukon & luxury business sedans." />
                     <OptionItem icon={<CheckCircle className="w-4 h-4" />} title="Expert Drivers" desc="Multilingual & border-savvy professionals." />
                  </div>

                  <div className="pt-8 border-t border-brand-gold/10">
                     <h4 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-4 ">Entity Integrity:</h4>
                     <div className="flex flex-wrap gap-6 items-center">
                        <Link href="/transport/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                           KAFD Business Drop
                           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/visa/tourist-visa/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                           Diplomatic Quarter Link
                           <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="sticky top-32">
                  <TransportForm defaultRoute="Transport: Doha to Riyadh" />
               </div>
            </div>
         </div>
      </section>

      {/* The Riyadh Process */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-gold mb-12 underline decoration-brand-gold/30 underline-offset-8 ">Reliable 3-Step Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="group">
                  <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-[1.5rem] flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:rotate-12 transition-transform shadow-lg">01</div>
                  <h4 className="text-xl font-bold text-brand-gold mb-3 font-inter tracking-tight">Pick-up</h4>
                  <p className="text-brand-white/60 text-sm ">Scheduled pickup from any location in Doha or Hamad Airport.</p>
               </div>
               <div className="group">
                  <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-[1.5rem] flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:rotate-12 transition-transform shadow-lg">02</div>
                  <h4 className="text-xl font-bold text-brand-gold mb-3 font-inter tracking-tight">Border Ease</h4>
                  <p className="text-brand-white/60 text-sm ">Hassle-free customs support at the Abu Samra exit and Salwa entry.</p>
               </div>
               <div className="group">
                  <div className="w-16 h-16 bg-brand-gold text-brand-blue rounded-[1.5rem] flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:rotate-12 transition-transform shadow-lg">03</div>
                  <h4 className="text-xl font-bold text-brand-gold mb-3 font-inter tracking-tight">Riyadh Arrival</h4>
                  <p className="text-brand-white/60 text-sm ">Comfortable drop-off at your hotel or business residence in Riyadh.</p>
               </div>
            </div>
        </div>
      </section>

      {/* Local Knowledge Section */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue tracking-tighter">Your Guide to Riyadh</h2>
               <p className="text-brand-blue/60  mt-2">Connecting you to the major districts of the Saudi Capital</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 rounded-3xl border border-brand-gold/5 bg-brand-beige/10 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-3 uppercase tracking-widest text-xs">Business Districts</h4>
                  <p className="text-sm text-brand-blue/70 ">Reliable drops to <strong>King Abdullah Financial District (KAFD)</strong> and the Diplomatic Quarter.</p>
               </div>
               <div className="p-8 rounded-3xl border border-brand-gold/5 bg-brand-beige/10 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-3 uppercase tracking-widest text-xs">Entertainment</h4>
                  <p className="text-sm text-brand-blue/70 ">Direct transport to <strong>Boulevard Riyadh City</strong> and historic <strong>Diriyah</strong> for tourists.</p>
               </div>
               <div className="p-8 rounded-3xl border border-brand-gold/5 bg-brand-beige/10 hover:shadow-lg transition-all">
                  <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-3 uppercase tracking-widest text-xs">Transit Links</h4>
                  <p className="text-sm text-brand-blue/70 ">Seamless transfers to <strong>King Khalid International Airport</strong> for your connecting flights.</p>
               </div>
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
              <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue">Travel FAQ</h2>
           </div>
           
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Doha to Riyadh – Book Your Seat"
        description="Direct transport from Doha to Riyadh for individuals and groups. Affordable rates with professional drivers."
        primaryBtn={{ text: "Request a Quote", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function OptionItem({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="text-brand-gold mt-1 shrink-0 bg-white shadow-md p-2 rounded-xl">{icon}</div>
      <div>
        <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wide">{title}</h4>
        <p className="text-brand-blue/50 text-[10px] ">{desc}</p>
      </div>
    </div>
  );
}


