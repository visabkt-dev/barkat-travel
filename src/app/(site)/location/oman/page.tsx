import BookingForm from "@/components/BookingForm";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import NAPSection from "@/components/NAPSection";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { MapPin, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle, Globe, Quote } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const omanTestimonials = [
  {
    name: "Salim Al-Busaidi",
    location: "Muscat Resident",
    text: "Barkat Travel's land transport from Muscat to Saudi was very safe and comfortable. The drivers are experts and the border crossing was managed perfectly.",
    stars: 5
  },
  {
    name: "Laila Ahmed",
    location: "Salalah Resident",
    text: "Received my Umrah visa very quickly. Their staff is very helpful and provided all the details about transport even for someone living in Salalah.",
    stars: 5
  }
];

export const metadata: Metadata = {
  title: "Umrah Transport & Visas Oman | Muscat & Salalah | Barkat Travel",
  description: "Official Barkat Travel Oman. Exclusive Umrah packages, fast visa processing, and cross-border transport services for residents of Muscat, Salalah, Sohar, and across Oman.",
  keywords: ["Barkat Travel Oman", "Umrah from Muscat", "Oman to Saudi transport", "Saudi visa Oman residents", "Salalah Umrah packages", "Sohar tour operators"],
  alternates: {
    canonical: "/location/oman",
  },
};

const faqs = [
  {
    q: "Do you offer Umrah packages specifically for Oman residents?",
    a: "Yes, we provide specialized Umrah and Saudi tourism packages tailored for Citizens and Residents of the Sultanate of Oman, including visa and transport."
  },
  {
    q: "What is the transport route from Muscat to Saudi Arabia?",
    a: "We offer both air and land transport options. Our land transport utilizes luxury coaches and private GMCs through the GCC road network for a safe journey."
  },
  {
    q: "Can I apply for a Saudi Tourist Visa through the Oman office?",
    a: "Certainly. We assist Oman residents in obtaining Saudi Tourist, Transit, and Multiple Entry visas with fast processing times."
  }
];

export default function OmanLocationPage() {
  const whatsappOman = getWhatsAppLink(CONTACT_INFO.oman.phones[0]);
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Muscat & Salalah Umrah Services",
          description: "Exclusive Umrah packages, visa processing, and cross-border land transport for residents of Oman. Serving Muscat, Salalah, and Sohar.",
          price: "150",
          currency: "OMR",
          areaServed: ["Oman", "Muscat", "Salalah", "Sohar", "Nizwa"]
        }} 
      />
      <SchemaMarkup schemaType="LocalBusiness" data={{ ...CONTACT_INFO.oman, reviews: omanTestimonials, rating: "4.8", reviewCount: "29" }} />

      {/* SEO Hero Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Sultanate of Oman Regional Office</span>
            <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Barkat Travel Oman | Muscat & Salalah</h1>
            <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
               Your gateway to exclusive spiritual and luxury travel from the heart of Muscat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
               <a href="#booking-form" className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl">
                  Book Muscat Umrah Package Now
               </a>
               <a href={whatsappOman} target="_blank" rel="noopener noreferrer" className="border border-brand-gold text-brand-gold px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all">
                  Call Now for Express Batha Transit
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
                 <Globe className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Regional Excellence</span>
              </div>
              
              {/* Detailed Location Guide */}
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue tracking-tight ">How to travel from Muscat to Makkah by road?</h2>
                 <p className="text-brand-blue/70 text-lg leading-relaxed border-l-4 border-brand-gold/20 pl-6">
                    To travel from Muscat to Makkah by road, you can book a luxury 49-seater coach or a private GMC Yukon through Barkat Travel Oman. The route typically passes through the UAE borders (Al Ain/Buraimi) entering Saudi Arabia via the Batha border. Total transit time is approximately 20-24 hours. Barkat Travel provides all necessary transit clearances and Saudi Umrah visas for Oman residents.
                 </p>
              </div>

              <p className="text-brand-blue/70 text-md  leading-relaxed">
                Barkat Travel has expanded its legacy of excellence to the Sultanate of Oman. We serve all regions including <strong>Muscat, Salalah, Sohar</strong>, and <strong>Nizwa</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FeatureBox title="Muscat Operations" desc="Centralized booking office for the Sultanate." />
                 <FeatureBox title="GCC Networking" desc="Seamless travel across UAE & Saudi borders." />
                 <FeatureBox title="Fast-Track Visas" desc="99% approval for Oman residents." />
                 <FeatureBox title="Luxury Fleet" desc="Comfortable long-distance GCC transport." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10">
                  <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4  underline decoration-brand-gold/30 underline-offset-8">Critical Authority Links:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                     <Link href="/visa/tourist-visa/" className="text-[10px] font-bold text-brand-gold hover:text-brand-blue border border-brand-gold/20 p-4 rounded-2xl text-center uppercase tracking-widest hover:border-brand-gold transition-all">Sultanate Visas</Link>
                     <Link href="/transport/" className="text-[10px] font-bold text-brand-gold hover:text-brand-blue border border-brand-gold/20 p-4 rounded-2xl text-center uppercase tracking-widest hover:border-brand-gold transition-all">Batha Border Link</Link>
                     <Link href="/contact/" className="text-[10px] font-bold text-brand-gold hover:text-brand-blue border border-brand-gold/20 p-4 rounded-2xl text-center uppercase tracking-widest hover:border-brand-gold transition-all">Muscat Office</Link>
                  </div>
              </div>
            </div>

            <div className="sticky top-32">
               <BookingForm defaultService="Oman Inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage & Related Entities - Local SEO */}
      <section className="py-16 bg-brand-white border-y border-brand-gold/10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Regions We Serve in Oman</h3>
                  <div className="flex flex-wrap gap-2">
                     {["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Ibra", "Seeb", "Barka"].map((region) => (
                        <span key={region} className="px-4 py-2 bg-brand-gold/5 border border-brand-gold/10 rounded-full text-xs font-bold text-brand-blue/70">
                           {region}
                        </span>
                     ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Related GCC Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <Link href="/transport/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        GCC Fleet Hire
                     </Link>
                     <Link href="/visa/tourist-visa/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Online Saudi Visa
                     </Link>
                     <Link href="/visa/umrah-visa/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Umrah Packages
                     </Link>
                     <Link href="/hotels/" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Haram Hotel Bookings
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust & Leadership (Mini-Homepage Style) */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1578912914358-7459ec7b587a?auto=format&fit=crop&q=80" alt="Muscat Sultan Qaboos Grand Mosque" className="w-full h-full object-cover min-h-[400px]" />
               </div>
               <div>
                  <h3 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">Localized Support in Muscat</h3>
                  <p className="text-brand-blue/70  text-lg mb-8 leading-relaxed">
                     At Barkat Travel, we don't just book tickets; we build relationships. Our Oman team consists of regional experts who ensure your documentation is flawless and your transit through the GCC is pleasant and spiritual.
                  </p>
                  <div className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] border border-brand-gold/10 shadow-sm transition-all hover:shadow-xl">
                     <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold font-bold border-2 border-brand-gold/20">BT</div>
                     <div>
                        <p className="text-brand-blue font-bold text-xl  underline decoration-brand-gold/30 underline-offset-4">Verified Oman Authority</p>
                        <p className="text-brand-blue/90 font-bold mt-1">Nasir Al-Harthy</p>
                        <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mt-1">Regional Coordinator | 12+ Yrs GCC Travel Expert</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* AI-SEO Explicit Data Table */}
      <section className="py-24 bg-brand-white border-y border-brand-gold/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-widest">Oman to Saudi Travel Comparison</h2>
               <p className="text-brand-blue/60 text-sm   underline decoration-brand-gold/20 underline-offset-4">Direct Data for AI & Informed Omani Travelers.</p>
            </div>
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-inner p-1">
               <table className="w-full text-left bg-white rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Travel Mode</th>
                        <th className="p-8">Route Duration</th>
                        <th className="p-8">Visa Support</th>
                        <th className="p-8">Ideal For</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold">Luxury GCC Coach</td>
                        <td className="p-8">18-24 Hours (Scenic)</td>
                        <td className="p-8">✓ Group Visa Included</td>
                        <td className="p-8">Budget Conscious Groups</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-beige/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold">Private GMC Yukon</td>
                        <td className="p-8">Flexible / Direct</td>
                        <td className="p-8">✓ Individual E-Visa</td>
                        <td className="p-8">VVIP Families / Privacy</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold">VIP Air Package</td>
                        <td className="p-8">3 Hours (Flight)</td>
                        <td className="p-8">✓ Fast-Track 24h</td>
                        <td className="p-8">Business & Urgent Travel</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Oman Testimonials */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-tighter">Omani Pilgrims Stories</h2>
               <p className="text-brand-blue/60  text-sm">Verified feedback from our valued clients in the Sultanate.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {omanTestimonials.map((t, i) => (
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

      {/* Oman Team - Local SEO Strategy */}
      <section className="py-24 bg-brand-gold/5">
         <div className="container mx-auto px-4">
            <div className="bg-brand-blue rounded-[3rem] p-12 text-brand-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
               <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shrink-0 border-4 border-brand-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                    alt="Muscat Operations Manager" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div>
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block  underline decoration-brand-gold/30 underline-offset-4">Muscat Presence</span>
                  <h3 className="text-3xl font-bold font-inter tracking-tight mb-4 text-brand-gold ">Local Expertise in Muscat</h3>
                  <p className="text-brand-white/70  text-lg leading-relaxed max-w-2xl">
                    "From Muscat to Makkah, we ensure every detail of your documentation and transport is handled with precision. Our local team is here to support you 24/7."
                  </p>
                  <p className="mt-6 font-bold text-brand-gold">— Nasir Al-Harthy, Regional Coordinator Oman</p>
               </div>
            </div>
         </div>
      </section>

      {/* Recent Local Activity - Fresh Content Strategy */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-xl">
                  <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Muscat Operations Log</h2>
                  <p className="text-brand-blue/60  text-sm">Tracking cross-border departures and visa approvals from the Sultanate.</p>
               </div>
               <Link href="#booking-form" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center group border-b border-brand-gold pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Next Oman Group
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80"
                 title="Muscat to Makkah Bus"
                 tag="Completed Today"
                 desc="45-seater luxury coach successfully crossed the border for a 10-day Umrah tour."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80"
                 title="Salalah Resident Visas"
                 tag="March 2024"
                 desc="Processed 25+ Saudi tourist visas for families in the Dhofar region this week."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
                 title="Sohar Private Transport"
                 tag="Confirmed"
                 desc="Booked private GMC Yukon for a VVIP family from Sohar directly to Madinah."
               />
            </div>
         </div>
      </section>

      {/* Common Inquiries */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-12  underline decoration-brand-gold/20 underline-offset-8">Oman Regional Quick Answers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <QuestionResponse 
                  q="Where is Barkat Travel office in Muscat?" 
                  a="Our Muscat office details and coordination center can be reached via our dedicated Oman WhatsApp support for immediate assistance with document collection."
               />
               <QuestionResponse 
                  q="Can Oman residents apply for Umrah visa online?" 
                  a="Yes, we provide digital processing for Oman Civil ID holders. You can submit documents via WhatsApp and receive your e-visa within 48-72 hours."
               />
               <QuestionResponse 
                  q="Is there a direct bus from Salalah to Makkah?" 
                  a="We coordinate specialized departures for the Dhofar region. Please contact our Salalah coordinator for the monthly group schedule."
               />
               <QuestionResponse 
                  q="What is the Batha border procedure for Oman travelers?" 
                  a="Our drivers handle the customs manifest and finger-printing guidance at the Batha border, ensuring a smooth transition into Saudi Arabia."
               />
            </div>
         </div>
      </section>

      {/* Map Embed For Oman Local Entities */}
      <section className="py-12 bg-white border-t border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Muscat Regional Command Center</h2>
               <p className="text-brand-blue/60  text-sm">Strategic location assisting Oman pilgrims throughout their cross-border journey.</p>
            </div>
            <div className="h-[400px] w-full rounded-[3rem] overflow-hidden border-2 border-brand-gold/20 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d117066.01258169902!2d58.337039014524025!3d23.585888040715372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f17316fc1b3f%3A0xeab50d26fffc691e!2sMuscat%2C%20Oman!5e0!3m2!1sen!2squ!4v1711200000000!5m2!1sen!2squ" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Muscat Logistics Center"
               ></iframe>
            </div>
         </div>
      </section>

      <NAPSection branch={CONTACT_INFO.oman} />

      <ContactCTA title="Contact Barkat Travel Oman" />
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
            <h4 className="text-lg font-bold font-inter tracking-tight text-brand-blue mb-3 ">{title}</h4>
            <p className="text-brand-blue/60 text-xs  leading-relaxed">{desc}</p>
         </div>
      </div>
   );
}

function FeatureBox({ title, desc }: any) {
   return (
      <div className="flex items-start bg-white p-6 rounded-2xl border border-brand-gold/5 shadow-sm">
         <CheckCircle className="w-5 h-5 text-brand-gold mr-4 mt-1 shrink-0" />
         <div>
            <h4 className="font-bold text-brand-blue text-sm uppercase">{title}</h4>
            <p className="text-brand-blue/50 text-[10px] ">{desc}</p>
         </div>
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

