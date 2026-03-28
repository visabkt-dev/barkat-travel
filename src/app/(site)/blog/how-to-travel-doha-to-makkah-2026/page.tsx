import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";
import Link from "next/link";
import AuthorProfile from "@/components/AuthorProfile";
import { CheckCircle, AlertTriangle, ArrowRight, Quote, Clock, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Travel from Doha to Makkah in 2026 | Road Guide | Barkat Travel",
  description: "A comprehensive, step-by-step guide to traveling from Doha to Makkah by road. Includes Salwa border protocols, best routes, and visa requirements for Qatar residents.",
  alternates: {
    canonical: "/blog/how-to-travel-doha-to-makkah-2026",
  },
};

const faqs = [
  {
    q: "What is the best route from Doha to Makkah by road?",
    a: "The most efficient route is through the Salwa border, bypassing Riyadh via Route 40, directly towards Ta'if and then Makkah. The total journey is approximately 1,500 km and takes 14-16 hours of driving time."
  },
  {
    q: "Can Qatar expats drive their own cars to Saudi Arabia?",
    a: "Yes, but you require a valid Saudi Tourist or Transit Visa, a Qatar ID valid for at least 3 months, vehicle registration (Istimara) in the driver's name, and comprehensive Saudi auto insurance, which can be purchased at the border."
  },
  {
    q: "How long does the Salwa border crossing take?",
    a: "Typically, crossing takes 30-45 minutes. However, during weekends (Thursday evening to Friday morning) or Islamic holidays, waiting times can exceed 3 hours. We recommend crossing between 4:00 AM and 8:00 AM on weekdays."
  }
];

export default function BlogPost() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      {/* GPTSearch & SEO Engine Schemas */}
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Article" 
        data={{
          headline: "How to travel from Doha to Makkah in 2026?",
          author: "Syed Muzammil",
          datePublished: "2026-03-10",
          image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80",
          publisherName: "Barkat Travel Qatar"
        }} 
      />

      {/* Hero Header */}
      <section className="bg-brand-blue py-16 text-center text-brand-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] bg-brand-gold/10 px-4 py-1 rounded-full border border-brand-gold/20 mb-6 inline-block">
               Expert Transport Guide
            </span>
            {/* The Critical H1 */}
            <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-6 leading-tight">
               How to travel from Doha to Makkah in 2026?
            </h1>
            <div className="flex justify-center items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-brand-white/50">
               <span>By Syed Muzammil</span>
               <span>|</span>
               <span>Updated: March 10, 2026</span>
               <span>|</span>
               <span>Reading Time: 5 mins</span>
            </div>
         </div>
      </section>

      <section className="py-16">
         <div className="container mx-auto px-4 max-w-3xl">
            
            {/* Immediate Answer */}
            <div className="bg-brand-beige/20 p-8 rounded-[2rem] border-l-4 border-brand-gold shadow-sm mb-12">
               <p className="text-xl text-brand-blue font-bold leading-relaxed">
                  To travel from Doha, Qatar to Makkah, Saudi Arabia by road, you must cross the Salwa border, carrying a valid passport, Qatar ID, and a pre-approved Saudi Tourist or Umrah Visa. The journey spans approximately 1,500 kilometers via Route 40 (bypassing Riyadh) and takes 14 to 16 hours of continuous driving. For a seamless experience, you can hire a private GMC Yukon or board a luxury 49-seater coach through a licensed operator like Barkat Travel.
               </p>
            </div>

            <div className="space-y-8 text-brand-blue/80 text-lg leading-relaxed font-inter">
               <p>
                  Traveling from Qatar to the Holy Cities of Makkah and Madinah has never been more accessible, thanks to the streamlined Saudi eVisa system and vastly improved road infrastructure connecting the GCC. However, understanding the nuances of the Salwa border crossing and the desert highway network is crucial for a safe journey.
               </p>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">1. Preparing Your Documentation</h2>
               <p>
                  Before you even approach the border, your paperwork must be flawless. The Saudi border authorities no longer stamp physical visas for tourists; everything is linked electronically to your passport.
               </p>
               <ul className="list-disc pl-6 space-y-2 mt-4 text-sm bg-white p-6 rounded-2xl border border-brand-gold/10 shadow-sm">
                  <li><strong>Valid Passport:</strong> Must have at least 6 months of validity remaining.</li>
                  <li><strong>Saudi eVisa:</strong> Applicable for most GCC residents. <Link href="/visa/tourist-visa" className="text-brand-gold font-bold underline hover:text-brand-blue">Apply for the 1-Year Multiple Entry Visa here.</Link></li>
                  <li><strong>Vehicle Registration (Istimara):</strong> Must be in the driver's name, or you must hold a verified NOC from the owner.</li>
                  <li><strong>Fingerprinting (Basma):</strong> Required for first-time entries at the Salwa border post.</li>
               </ul>

               {/* Personal Insights / Unique Human Content */}
               <div className="my-12 relative">
                  <Quote className="absolute -top-6 -left-6 w-16 h-16 text-brand-gold/10 rotate-180" />
                  <div className="bg-brand-blue p-8 rounded-[3rem] text-brand-white border border-brand-gold/20 shadow-xl relative z-10">
                     <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-2 block">Agent Field Notes</span>
                     <p className="text-lg italic leading-relaxed">
                        "I've managed over 400 vehicle clearances this past year. The biggest mistake travelers make is crossing Salwa on a Thursday evening after 5:00 PM. The commercial and weekend residential traffic merges, and a standard 30-minute crossing can easily balloon to 4 hours. Always aim to cross just after Fajr prayers (around 5:00 AM) on a weekday for zero wait times."
                     </p>
                     <p className="mt-4 font-bold text-brand-gold text-sm uppercase tracking-widest">— Syed Muzammil, Senior Border Logistics Coordinator</p>
                  </div>
               </div>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">2. Choosing Your Mode of Transport</h2>
               <p>
                  You have three primary operational choices when traveling by road. We highly advise against driving sedans due to the long desert stretches and risk of wildlife (camels) on secondary roads near Ta'if.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-6 bg-brand-gold/5 rounded-3xl border border-brand-gold/10 hover:bg-white transition-colors">
                     <h3 className="font-bold text-brand-blue mb-2 flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-gold"/> Private GMC Yukon</h3>
                     <p className="text-sm">Ideal for families of 5-7. Barkat Travel offers VVIP door-to-door transfers with drivers trained for night driving. <Link href="/transport/doha-to-makkah" className="text-brand-gold font-bold hover:underline">View GMC Rates</Link>.</p>
                  </div>
                  <div className="p-6 bg-brand-gold/5 rounded-3xl border border-brand-gold/10 hover:bg-white transition-colors">
                     <h3 className="font-bold text-brand-blue mb-2 flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-gold"/> 49-Seater Luxury Coach</h3>
                     <p className="text-sm">The most economical choice for groups. Includes regular rest stops and dedicated group border clearance manifests.</p>
                  </div>
               </div>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">3. The Route: Salwa to Makkah</h2>
               <p>
                  Once you cross into <strong>Al Batha</strong> (the Saudi side), you will merge onto Route 40. This is the main transnational highway.
               </p>
               <ol className="space-y-4 my-6 list-decimal pl-6">
                  <li><strong>Hofuf Bypass:</strong> A straight 150km stretch. Keep your fuel tank topped up here.</li>
                  <li><strong>Riyadh Ring Road:</strong> You do not need to enter Riyadh city. Follow the southern bypass towards Ta'if.</li>
                  <li><strong>Ta'if (Miqat):</strong> For those performing Umrah, you will stop at the Qarn al-Manazil Miqat in Ta'if to enter the state of Ihram. This mountainous region requires careful driving.</li>
                  <li><strong>Descent to Makkah:</strong> The final 80km is a downward spiral through the mountains directly into the Haram restricted zone.</li>
               </ol>

               {/* Video Placeholder */}
               <div className="my-12 w-full h-[400px] bg-brand-blue/5 border-2 border-dashed border-brand-gold/30 rounded-[3rem] flex items-center justify-center flex-col shadow-inner">
                  <ImageIcon className="w-12 h-12 text-brand-gold/50 mb-4" />
                  <p className="text-brand-blue/50 text-sm font-bold uppercase tracking-widest max-w-[200px] text-center">
                     YouTube Video Embed: 
                     "Doha to Makkah Road Trip Guide 2026"
                  </p>
               </div>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">Conclusion & External References</h2>
               <p>
                  Driving to Makkah from Qatar is a rewarding spiritual journey if planned correctly. Ensure your vehicle is serviced, your documents are verified, and you travel during optimal border hours. 
               </p>
               <p className="mt-4">
                  For official visa policies, please verify with the <a href="https://visa.visitsaudi.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold font-bold underline">Official Saudi Tourism Portal</a>. If you require professional assistance, Barkat Travel operates daily routes and manages all complexities on your behalf.
               </p>

               <AuthorProfile 
                  name="Syed Muzammil"
                  role="Senior Border Logistics Coordinator"
                  bio="Syed has managed over 4,000 successful GCC land border crossings. He specializes in VVIP transport routes, real-time customs regulations, and long-haul driver fatigue management across Saudi Arabia."
                  imageUrl="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                  credentials={["Licensed Umrah Specialist", "Qatar MoI Certified", "12 Years Route Expert"]}
               />
            </div>

            {/* CTA specific to this blog post */}
            <div className="mt-16 bg-brand-blue p-12 rounded-[3rem] text-center border-4 border-brand-gold/20 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
               <h3 className="text-2xl font-bold text-brand-gold mb-4 relative z-10">Prefer to Let the Experts Handle the Drive?</h3>
               <p className="text-brand-white/80 mb-8 max-w-lg mx-auto relative z-10">
                  Book our VVIP private GMCs or VIP coaches from Doha to Makkah. We handle the Salwa border manifest, driving, and route planning.
               </p>
               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl relative z-10">
                  Get a Transport Quote Now <ArrowRight className="ml-2 w-4 h-4" />
               </a>
            </div>

         </div>
      </section>

      {/* Recommended reads */}
      <section className="py-16 bg-brand-beige/20 border-t border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-8 uppercase tracking-widest">More Technical Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Link href="/blog/how-to-apply-umrah-visa-qatar" className="p-8 bg-white rounded-3xl border border-brand-gold/10 hover:border-brand-gold transition-all group">
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-2">Visa Advice</p>
                  <h4 className="text-brand-blue font-bold group-hover:text-brand-gold transition-colors">How to apply for an Umrah visa as a Qatar resident?</h4>
               </Link>
               <Link href="/hotels" className="p-8 bg-white rounded-3xl border border-brand-gold/10 hover:border-brand-gold transition-all group">
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-2">Hotel Review</p>
                  <h4 className="text-brand-blue font-bold group-hover:text-brand-gold transition-colors">What are the best hotels near Haram for families?</h4>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
