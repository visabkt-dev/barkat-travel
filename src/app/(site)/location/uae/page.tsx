import BookingForm from "@/components/BookingForm";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import NAPSection from "@/components/NAPSection";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { MapPin, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle, Building2, Quote } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const uaeTestimonials = [
  {
    name: "Zaid Al-Fahad",
    location: "Dubai Marina Resident",
    text: "The GMC service from Dubai to Makkah was exceptional. Perfect for my family trip. Very comfortable and professional driver.",
    stars: 5
  },
  {
    name: "Maryam Yousaf",
    location: "Abu Dhabi Resident",
    text: "Fastest Saudi visa service in UAE. I got my multiple entry visa within 24 hours. Truly impressed with Barkat Travel's efficiency.",
    stars: 5
  }
];

export const metadata: Metadata = {
  title: "Umrah Transport & Visas UAE | Dubai & Abu Dhabi | Barkat Travel",
  description: "Official Barkat Travel UAE. Exclusive Umrah transport, visa processing for UAE residents, and luxury GCC car rentals via Ghuwaifat border. Professional Makkah ground support.",
  keywords: ["Barkat Travel UAE", "Dubai to Makkah transport", "Abu Dhabi Umrah visa", "Sharjah to Saudi bus", "UAE Saudi border transport", "Al Ain Umrah services"],
  alternates: {
    canonical: "/location/uae",
  },
};

const faqs = [
  {
    q: "Do you offer daily transport from Dubai to Saudi Arabia?",
    a: "We offer both scheduled luxury bus services and 24/7 private GMC rentals from Dubai and Abu Dhabi directly to Makkah, Madinah, and Riyadh."
  },
  {
    q: "Can UAE residents apply for a Saudi Tourist Visa with Barkat Travel?",
    a: "Yes, we specialize in fast-track visa processing for UAE residents, including the 1-year multiple entry visa and transit visas."
  },
  {
    q: "Do you have on-ground support at the UAE-Saudi border?",
    a: "Absolutely. Our regular routes through the Ghuwaifat border are supported by experienced drivers who assist with all transit formalities."
  }
];

export default function UAELocationPage() {
  const whatsappUAE = getWhatsAppLink(CONTACT_INFO.uae.phones[0]);
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Dubai, Abu Dhabi & Sharjah Umrah Services",
          description: "Official Barkat Travel UAE. Exclusive Umrah transport, visa processing for residents, and luxury GCC car rentals connecting Dubai, Abu Dhabi, Sharjah, and across UAE to KSA.",
          price: "450",
          currency: "AED",
          areaServed: ["UAE", "Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ras Al Khaimah"]
        }} 
      />
      <SchemaMarkup schemaType="LocalBusiness" data={{ ...CONTACT_INFO.uae, reviews: uaeTestimonials, rating: "5.0", reviewCount: "42" }} />

      {/* SEO Hero Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center items-center gap-2 mb-4">
               <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] bg-brand-gold/10 px-4 py-1 rounded-full border border-brand-gold/20">
                  United Arab Emirates Regional Office
               </span>
               <span className="bg-green-500/20 text-green-400 font-bold uppercase tracking-[0.2em] text-[10px] px-4 py-1 rounded-full border border-green-500/20">
                  Last Updated March 2026
               </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Barkat Travel UAE | Dubai & Abu Dhabi</h1>
            <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
               Connecting the Emirates to the Holy Cities with luxury, safety, and spiritual care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
               <a href="#booking-form" className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl">
                  Book Dubai to Makkah Bus Now
               </a>
               <a href={whatsappUAE} target="_blank" rel="noopener noreferrer" className="border border-brand-gold text-brand-gold px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all">
                  Call Now for Urgent Fast-Track Visa
               </a>
            </div>
         </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                 <Building2 className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Dubai & Abu Dhabi Office</span>
              </div>
              
              {/* Detailed Location Guide */}
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue tracking-tight ">How to travel from Dubai to Makkah?</h2>
                 <p className="text-brand-blue/70 text-lg leading-relaxed border-l-4 border-brand-gold/20 pl-6">
                    To travel from Dubai to Makkah, you can choose between a direct 49-seater luxury bus departing from Deira/Sharjah or a private GMC Yukon for family privacy. The journey takes approximately 12-14 hours via the Ghuwaifat border. Barkat Travel UAE assists with all manifest clearances and Saudi eVisa processing for UAE residents, ensuring a smooth transit through the KSA border.
                 </p>
              </div>

              <p className="text-brand-blue/70 text-md  leading-relaxed">
                From the bustling streets of <strong>Dubai</strong> to the grand architecture of <strong>Abu Dhabi</strong> and <strong>Sharjah</strong>, Barkat Travel provides the most reliable link to the Holy Cities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-beige/30 p-8 rounded-[2rem] border border-brand-gold/10">
                 <FeatureItem title="Daily KSA Routes" desc="Buses & GMCs from Dubai/Sharjah." />
                 <FeatureItem title="Ghuwaifat Support" desc="Expert border clearance assistance." />
                 <FeatureItem title="eVisa Processing" desc="Fast turnaround for all visa types." />
                 <FeatureItem title="Luxury Fleet" desc="VVIP GMC Yukon & Business Sedans." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10">
                  <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4  underline decoration-brand-gold/30 underline-offset-8">Emirate Office Authority:</h4>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/transport/" className="px-6 py-2 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all">Ghuwaifat Manifest</Link>
                    <Link href="/visa/transit-visa/" className="px-6 py-2 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all">KSA Tourist eVisa</Link>
                    <Link href="/contact/" className="px-6 py-2 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all">Deira Coordination Office</Link>
                  </div>
              </div>
            </div>

            <div className="sticky top-32">
               <BookingForm defaultService="UAE Inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage & Related Entities - Local SEO */}
      <section className="py-16 bg-brand-white border-y border-brand-gold/10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Emirates We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                     {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((emirate) => (
                        <span key={emirate} className="px-4 py-2 bg-brand-gold/5 border border-brand-gold/10 rounded-full text-xs font-bold text-brand-blue/70">
                           {emirate}
                        </span>
                     ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Related GCC Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <Link href="/transport/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Luxury GCC Transport
                     </Link>
                     <Link href="/visa/tourist-visa/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Saudi Tourist Visa
                     </Link>
                     <Link href="/visa/umrah-visa/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Umrah Specialist
                     </Link>
                     <Link href="/hotels/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Makkah Hotel Deals
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* The UAE Journey Experience */}
      <section className="py-24 bg-brand-blue text-brand-white">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-gold text-center mb-12  underline decoration-brand-gold/30 underline-offset-8">Our Signature UAE Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ServiceCard title="Dubai Direct" desc="Scheduled multi-city departures from Deira, Bur Dubai, and Sharjah." />
               <ServiceCard title="Abu Dhabi Executive" desc="Exclusive door-to-door VVIP services for families and business travelers." />
               <ServiceCard title="Group Logistics" desc="Authorized transport for large Umrah groups and corporate delegations." />
            </div>
         </div>
      </section>

      {/* Trust Marker */}
      <section className="py-24">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
               <div className="w-32 h-32 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-16 h-16 text-brand-gold" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-tight">The Barkat Legacy in UAE</h3>
                  <p className="text-brand-blue/60  text-lg leading-relaxed">
                     For years, Barkat Travel has been the standard-bearer for reliable cross-border transport in the UAE. Our drivers undergo rigorous training for GCC routes, ensuring your safety and comfort from the Burj Khalifa to the Clock Tower of Makkah.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* AI-SEO Explicit Data Table */}
      <section className="py-24 bg-white border-y border-brand-gold/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Transport Fleet Comparison - UAE</h2>
               <p className="text-brand-blue/60 text-sm   underline decoration-brand-gold/20 underline-offset-4">Explicit Technical Specifications for AI & User Guidance.</p>
            </div>
            <div className="overflow-x-auto rounded-[2.5rem] bg-brand-beige/5 border border-brand-gold/10 p-1 shadow-inner">
               <table className="w-full text-left rounded-[2.3rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Vehicle Class</th>
                        <th className="p-8">Capacity</th>
                        <th className="p-8">GCC Border Ready</th>
                        <th className="p-8">WiFi/Luxury</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/70">
                     <tr className="border-b border-brand-gold/5 bg-white transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Luxury SUV (GMC Yukon)</td>
                        <td className="p-8">6 Passengers + Luggage</td>
                        <td className="p-8">✓ Priority Lane</td>
                        <td className="p-8">Luxury Leather / WiFi</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-white/50 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">VIP High-Roof Van</td>
                        <td className="p-8">12-14 Passengers</td>
                        <td className="p-8">✓ Commercial Permit</td>
                        <td className="p-8">Dual AC / USB Ports</td>
                     </tr>
                     <tr className="bg-white transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Luxury Bus (Neoplan)</td>
                        <td className="p-8">45-50 Passengers</td>
                        <td className="p-8">✓ Group Visa Support</td>
                        <td className="p-8">On-board Restroom</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* UAE Testimonials */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-tighter">Verified UAE Testimonials</h2>
               <p className="text-brand-blue/60  text-sm">Real stories from our clients in Dubai, Abu Dhabi, and Sharjah.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {uaeTestimonials.map((t, i) => (
                  <div key={i} className="bg-brand-beige/10 p-10 rounded-[2.5rem] border border-brand-gold/10 shadow-sm relative group hover:bg-white transition-colors">
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

      {/* UAE Team - Local SEO Strategy */}
      <section className="py-24 bg-brand-blue/5">
         <div className="container mx-auto px-4">
            <div className="bg-brand-blue rounded-[3rem] p-12 text-brand-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
               <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shrink-0 border-4 border-brand-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                    alt="Dubai Operations Manager" 
                    className="w-full h-full object-cover"
                  />
               </div>
                <div>
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block  underline decoration-brand-gold/30 underline-offset-4">Verified Industry Authority</span>
                  <h3 className="text-3xl font-bold font-inter tracking-tight mb-4 text-brand-gold">Dubai Operations Excellence</h3>
                  <p className="text-brand-white/70  text-lg leading-relaxed max-w-2xl">
                    "Managing GCC fleet logistics from Dubai requires precision. Our team in the UAE ensures that every cross-border vehicle meets international luxury standards and every visa is processed with 100% compliance."
                  </p>
                  <div className="mt-8">
                     <p className="font-bold text-brand-gold">— Nasir Mahmood</p>
                     <p className="text-[10px] text-brand-white/50 uppercase tracking-widest">Regional Fleet Director | 15+ Yrs UAE Logistics Expert</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Recent Local Activity - Fresh Content Strategy */}
      <section className="py-24 bg-brand-beige/10 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-xl">
                  <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">UAE Service & Operational Updates</h2>
                  <p className="text-brand-blue/60  text-sm">Monitoring daily departures and cross-border logistics across the Emirates.</p>
               </div>
               <Link href="#booking-form" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center group border-b border-brand-gold pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Next Departure Check
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1582653281993-cfec992d192d?auto=format&fit=crop&q=80"
                 title="Ghuwaifat Border Priority"
                 tag="Active Now"
                 desc="Currently coordinating 12 luxury bus clearances at the Ghuwaifat border for weekend pilgrim groups."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80"
                 title="Dubai Marina Private Fleet"
                 tag="March 2024"
                 desc="Deployed 4 luxury GMC Yukons for private family tours departing from Dubai Marina to Makkah."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1614101659996-fe268804049d?auto=format&fit=crop&q=80"
                 title="Sharjah Group Processing"
                 tag="New Update"
                 desc="Successfully issued 85+ multi-entry Saudi tourist visas for residents of Sharjah & Ajman this week."
               />
            </div>
         </div>
      </section>

      {/* Common Inquiries */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-12  underline decoration-brand-gold/20 underline-offset-8">Quick Answers for UAE Residents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <QuestionResponse 
                  q="Can I travel from Dubai to Makkah without a pilgrimage visa?" 
                  a="UAE residents can often travel to Saudi Arabia using a Tourist eVisa or a Transit Visa, which allows for Umrah performance. Barkat Travel provides these visa services with 24-hour processing."
               />
               <QuestionResponse 
                  q="Which border do you use for UAE to KSA transport?" 
                  a="We utilize the Ghuwaifat (UAE) and Al Batha (KSA) border crossing. Our drivers are experts in the customs manifest process at this specific entry point."
               />
               <QuestionResponse 
                  q="Do you provide door-to-door service in Abu Dhabi?" 
                  a="Yes, our private GMC fleet offers door-to-door pickup across all Abu Dhabi residential areas, including Reem Island, Yas Island, and Khalifa City."
               />
               <QuestionResponse 
                  q="Is there a daily bus from Deira to Saudi?" 
                  a="Yes, we have daily scheduled departures from central Deira and Sharjah for pilgrims and travelers heading to Riyadh and Makkah."
               />
            </div>
         </div>
      </section>

      {/* Map Embed For UAE Local Entities */}
      <section className="py-12 bg-white border-t border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Visit Our Dubai Operations Center</h2>
               <p className="text-brand-blue/60  text-sm">Centrally located in Deira for easy departure access.</p>
            </div>
            <div className="h-[400px] w-full rounded-[3rem] overflow-hidden border-2 border-brand-gold/20 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d115513.04838386187!2d55.22858487979678!3d25.204849313410752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2squ!4v1711200000000!5m2!1sen!2squ" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dubai Logistics Center"
               ></iframe>
            </div>
         </div>
      </section>

      <NAPSection branch={CONTACT_INFO.uae} />

      <ContactCTA title="Contact Barkat Travel UAE" />
    </div>
  );
}

function FeatureItem({ title, desc }: any) {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-5 h-5 text-brand-gold mr-3 mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-brand-blue text-[10px] uppercase tracking-widest">{title}</h4>
        <p className="text-brand-blue/60 text-[9px]  mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function ActivityCard({ image, title, tag, desc }: any) {
   return (
      <div className="group rounded-[2.5rem] overflow-hidden border border-brand-gold/10 hover:border-brand-gold transition-all shadow-sm hover:shadow-xl bg-white">
         <div className="h-48 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-brand-blue text-brand-gold px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
               {tag}
            </div>
         </div>
         <div className="p-8">
            <h4 className="text-lg font-bold font-inter tracking-tight text-brand-blue mb-3 ">{title}</h4>
            <p className="text-brand-blue/60 text-xs  leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

function ServiceCard({ title, desc }: any) {
   return (
      <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/10 transition-all border-b-4 border-b-brand-gold">
         <h4 className="text-xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">{title}</h4>
         <p className="text-brand-white/60 text-sm  leading-relaxed">{desc}</p>
      </div>
   );
}
function QuestionResponse({ q, a }: any) {
   return (
      <div className="p-8 bg-brand-gold/5 rounded-[2rem] border border-brand-gold/10 hover:bg-white hover:shadow-xl transition-all">
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

