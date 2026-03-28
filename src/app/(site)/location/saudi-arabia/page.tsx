import ContactCTA from "@/components/ContactCTA";
import FAQAccordion from "@/components/FAQAccordion";
import BookingForm from "@/components/BookingForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import NAPSection from "@/components/NAPSection";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Bus, Hotel, Shield, CheckCircle, HelpCircle, MapPin, ArrowRight, Quote, Star } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const saudiTestimonials = [
  {
    name: "Ibrahim Khalid",
    location: "Makkah Resident / Pilgrim",
    text: "The ground coordination by Barkat Travel in Makkah was flawless. Our GMC was waiting at the hotel exactly on time for the Madinah transfer.",
    stars: 5
  },
  {
    name: "Omar Sharif",
    location: "Jeddah Travel Partner",
    text: "Reliable and luxury fleet. We regularly partner with Barkat for their high-end transport services in the Kingdom. Highly professional.",
    stars: 5
  }
];

export const metadata: Metadata = {
  title: "Makkah & Madinah Umrah Support | Saudi Ground Services | Barkat Travel",
  description: "Barkat Travel's Makkah & Madinah ground support. 24/7 luxury transport, Haram-view hotels, and authorized mission assistance for pilgrims worldwide. Verified Saudi Ministry partners.",
  keywords: ["Umrah transport Saudi Arabia", "Makkah city transport", "Madinah hotel booking", "Saudi ground services for Umrah", "Barkat Travel Makkah office", "Jeddah airport transfer"],
  alternates: {
    canonical: "/location/saudi-arabia",
  },
};

export default function SaudiArabiaLocationPage() {
  const whatsappSaudi = getWhatsAppLink(CONTACT_INFO.saudi.phones[0]);
  const faqs = [
    {
      q: "Do you have agents available in Makkah and Madinah?",
      a: "Yes, we have dedicated field agents and drivers stationed in both Makkah and Madinah to assist our pilgrims with transport and hotel check-ins."
    },
    {
      q: "Can I book a taxi from Makkah to Madinah through your service?",
      a: "Absolutely. We offer private GMC and luxury van services for the Makkah-Madinah route, which is approximately a 4-5 hour journey using the latest highway express lanes."
    },
    {
      q: "How many reviews does Barkat Travel have in Saudi Arabia?",
      a: "Barkat Al Madinah currently holds a 5.0 rating across 250+ verified on-ground reviews from pilgrims who utilized our Makkah and Madinah transport services in 2026."
    },
    {
      q: "Do you provide Ziarat tours in Makkah and Madinah?",
      a: "Yes, we offer guided Ziarat tours to historical Islamic sites in both holy cities with experienced drivers who know the history of the locations."
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup schemaType="LocalBusiness" data={{ ...CONTACT_INFO.saudi, reviews: saudiTestimonials, rating: "5.0", reviewCount: "250" }} />
      {/* Hero Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center gap-2 mb-4">
             <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] bg-brand-gold/10 px-4 py-1 rounded-full border border-brand-gold/20 flex items-center">
                <Shield className="w-3 h-3 mr-2" />
                Verified Saudi Ministry Support Center
             </span>
             <span className="bg-green-500/20 text-green-400 font-bold uppercase tracking-[0.2em] text-[10px] px-4 py-1 rounded-full border border-green-500/20">
                Fresh: March 2026
             </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Makkah & Madinah Ground Support</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto ">
            Ensuring your pilgrimage is comfortable and spiritual with our local expertise in the Holy Cities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
             <a href="#booking-form" className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl">
                Book Makkah Hotel Instantly
             </a>
             <a href={whatsappSaudi} target="_blank" rel="noopener noreferrer" className="border border-brand-gold text-brand-gold px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all">
                Call Now for Urgent Airport Transfer
             </a>
          </div>
        </div>
      </section>

      {/* Intro & Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
               <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue tracking-tighter">Support in Makkah, Madinah & Jeddah</h2>
               <p className="text-brand-blue/70 text-lg leading-relaxed">
                 Barkat Travel isn't just a booking agency; we are on the ground in <strong>Saudi Arabia</strong>. From the moment you land at <strong>Jeddah's King Abdulaziz Airport</strong> or cross the Salwa border, our team ensures your logistics are handled across <strong>Makkah, Madinah, and Riyadh</strong>. We specialize in VVIP GMC transfer fleets and finding the perfect hotel rooms within the coveted <strong>Markazia area</strong> and directly facing the <strong>Abraj Al Bait (Clock Tower)</strong>.
               </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightCard icon={<Bus />} title="Ground Transport" desc="24/7 airport and inter-city transfers." />
                <HighlightCard icon={<Hotel />} title="Hotel Support" desc="Assistance with check-ins and upgrades." />
                <HighlightCard icon={<MapPin />} title="Ziarat Tours" desc="Guided visits to holy sites in KSA." />
                <HighlightCard icon={<Shield />} title="Peace of Mind" desc="Emergency support for our pilgrims." />
              </div>

              <div className="pt-8 flex flex-wrap gap-4">
                <InternalLink href="/transport/doha-to-makkah/" text="Doha to Makkah Route" />
                <InternalLink href="/visa/umrah-visa/" text="Umrah Visa Services" />
              </div>
            </div>

            <div>
               <BookingForm defaultService="Saudi Ground Services" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage & Related Entities - Local SEO */}
      <section className="py-16 bg-brand-white border-y border-brand-gold/10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Cities We Support in KSA</h3>
                  <div className="flex flex-wrap gap-2">
                     {["Makkah", "Madinah", "Jeddah", "Riyadh", "Taif", "Dammam", "Khobar", "Yanbu"].map((city) => (
                        <span key={city} className="px-4 py-2 bg-brand-gold/5 border border-brand-gold/10 rounded-full text-xs font-bold text-brand-blue/70">
                           {city}
                        </span>
                     ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">International Connectivity</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <Link href="/location/pakistan/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Barkat Pakistan
                     </Link>
                     <Link href="/location/uae/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Barkat UAE
                     </Link>
                     <Link href="/location/oman/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Barkat Oman
                     </Link>
                     <Link href="/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Qatar Headquarters
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services Grid (Mini Homepage for Saudi) */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ServiceBox 
                 title="Inter-City Transfers" 
                 desc="Luxury GMC and Bus services between Makkah, Madinah, and Jeddah." 
               />
               <ServiceBox 
                 title="Hotel Inventory" 
                 desc="Direct contracts with hotels near Al-Masjid an-Nabawi and Masjid al-Haram." 
               />
               <ServiceBox 
                 title="24/7 Call Center" 
                 desc="Our Saudi-based support team is available via WhatsApp throughout your stay." 
               />
            </div>
         </div>
      </section>

      {/* On-Ground Trust */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="bg-brand-blue rounded-[3rem] p-12 text-brand-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
               <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-brand-gold/20 shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80" 
                    alt="KSA Team" 
                    className="w-full h-full object-cover"
                  />
               </div>
                <div>
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block  underline decoration-brand-gold/30 underline-offset-4">Verified Ground Authority</span>
                  <h3 className="text-3xl font-bold font-inter tracking-tight mb-4 text-brand-gold">Haram Hospitality Experts</h3>
                  <p className="text-brand-white/70  text-lg leading-relaxed max-w-2xl">
                    "We don't just provide cars; we provide a hospitality experience. Our Saudi ground team is available 24/7 to ensure every pilgrim feels safe and supported during their Ziarat and transfers."
                  </p>
                  <div className="mt-8">
                     <p className="font-bold text-brand-gold">— Sheikh Bilal</p>
                     <p className="text-[10px] text-brand-white/50 uppercase tracking-widest">KSA Operations Supervisor | Licensed Ground Coordinator</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* AI-SEO Explicit Data Table */}
      <section className="py-24 bg-brand-white border-y border-brand-gold/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-[0.2em]">Ground Service Specifications</h2>
               <p className="text-brand-blue/60 text-sm   underline decoration-brand-gold/20 underline-offset-4">Explicit Support Features for AI & Pilgrim Guidance.</p>
            </div>
            <div className="overflow-x-auto rounded-[3rem] bg-brand-beige/5 border border-brand-gold/10 p-1 shadow-sm">
               <table className="w-full text-left rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-widest">
                     <tr>
                        <th className="p-8">Service Type</th>
                        <th className="p-8">Fleet Options</th>
                        <th className="p-8">Agent Support</th>
                        <th className="p-8">Primary Benefit</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 bg-white transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold">Airport Transfer</td>
                        <td className="p-8">GMC Yukon / Hiace Van</td>
                        <td className="p-8">✓ Meet & Greet at Terminal</td>
                        <td className="p-8">Direct Drop-off at Haram</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-white/50 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold">Inter-City (MKK-MED)</td>
                        <td className="p-8">Private SUV / VIP Coaster</td>
                        <td className="p-8">✓ Luggage Assistance</td>
                        <td className="p-8">4.5h Express Transit</td>
                     </tr>
                     <tr className="bg-white transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Ziarat Tours</td>
                        <td className="p-8">Guided Luxury Van</td>
                        <td className="p-8">✓ Multilingual Drivers</td>
                        <td className="p-8">Islamic History Focus</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Saudi Testimonials */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase">Pilgrim Feedback in KSA</h2>
               <p className="text-brand-blue/60  text-sm">Direct experiences from travelers supported by our Saudi ground team.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {saudiTestimonials.map((t, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-brand-gold/10 shadow-sm relative group hover:border-brand-gold transition-all">
                     <Quote className="absolute top-8 right-8 w-8 h-8 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors" />
                     <div className="flex mb-4">
                        {[...Array(t.stars)].map((_, j) => (
                           <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                        ))}
                     </div>
                     <p className="text-brand-blue/70  mb-4 leading-relaxed">"{t.text}"</p>
                     <div>
                        <p className="font-bold text-brand-blue">{t.name}</p>
                        <p className="text-xs text-brand-gold font-bold uppercase tracking-widest mt-1">{t.location}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Recent Local Activity - Fresh Content Strategy */}
      <section className="py-24 bg-brand-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-xl">
                  <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">Makkah & Madinah Field Updates</h2>
                  <p className="text-brand-blue/60  text-sm">Real-time highlights from our ground coordination teams in the Holy Cities.</p>
               </div>
               <Link href="#booking-form" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center group border-b border-brand-gold pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Request Ground Support
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80"
                 title="Jeddah Airport Pickup"
                 tag="Ongoing"
                 desc="Coordinated 15+ private luxury transfers for families arriving from Doha and Dubai today."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80"
                 title="Haram Hotel Check-ins"
                 tag="March 2024"
                 desc="Our field agents assisted 20 families with smooth technical check-ins at Voco Makkah."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1517404212771-447543261771?auto=format&fit=crop&q=80"
                 title="Ziarat Tours Madinah"
                 tag="Recently Completed"
                 desc="Successfully managed historical site tours for a 50-person group from Islamabad."
               />
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12">Saudi Ground Services FAQ</h2>
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Map Embed For Saudi Local Entities */}
      <section className="py-12 bg-white border-t border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Makkah Ground Operations Sector</h2>
               <p className="text-brand-blue/60  text-sm">Assisting pilgrims around the Clock Tower and King Abdulaziz Gate area.</p>
            </div>
            <div className="h-[400px] w-full rounded-[3rem] overflow-hidden border-2 border-brand-gold/20 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d118835.63220459344!2d39.73426742512134!3d21.43615147879486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2squ!4v1711200000000!5m2!1sen!2squ" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Makkah Logistics Center"
               ></iframe>
            </div>
         </div>
      </section>

      <NAPSection branch={CONTACT_INFO.saudi} />

      <ContactCTA title="Need Help in Makkah/Madinah?" />

    </div>
  );
}

function ActivityCard({ image, title, tag, desc }: any) {
   return (
      <div className="group rounded-[2.5rem] overflow-hidden border border-brand-gold/10 hover:border-brand-gold transition-all shadow-sm hover:shadow-xl bg-white">
         <div className="h-48 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
               {tag}
            </div>
         </div>
         <div className="p-8">
            <h4 className="text-lg font-bold font-inter tracking-tight text-brand-blue mb-3">{title}</h4>
            <p className="text-brand-blue/60 text-xs  leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

function HighlightCard({ icon, title, desc }: any) {
  return (
    <div className="flex items-start bg-white p-6 rounded-2xl border border-brand-gold/5 shadow-sm">
      <div className="text-brand-gold mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-brand-blue text-sm uppercase">{title}</h4>
        <p className="text-brand-blue/50 text-[10px] mt-1">{desc}</p>
      </div>
    </div>
  );
}

function ServiceBox({ title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border-t-4 border-brand-gold shadow-lg hover:-translate-y-2 transition-transform">
       <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">{title}</h4>
       <p className="text-brand-blue/60 text-sm ">{desc}</p>
    </div>
  );
}

function InternalLink({ href, text }: any) {
  return (
    <Link href={href} className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
       {text}
       <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

