import ContactCTA from "@/components/ContactCTA";
import BookingForm from "@/components/BookingForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import NAPSection from "@/components/NAPSection";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, Clock, Shield, CheckCircle, HelpCircle, Star, ArrowRight, MapPin, Quote } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

const testimonials = [
  {
    name: "Ahmed Raza",
    location: "Islamabad Resident",
    text: "Barkat Travel Islamabad made my Umrah trip extremely smooth. The visa was issued in 3 days and the hotels were exactly as promised.",
    stars: 5
  },
  {
    name: "Saima Malik",
    location: "Rawalpindi Resident",
    text: "Very professional team. They helped me with the entire documentation process for my family. Highly recommended for anyone in Twin Cities.",
    stars: 5
  }
];

export const metadata: Metadata = {
  title: "Umrah Visa & Packages Pakistan | Islamabad & Nationwide | Barkat Travel",
  description: "Official Barkat Travel Pakistan. Authorized Umrah visa processing and luxury packages for pilgrims from Islamabad, Rawalpindi, Lahore, Karachi, and across Pakistan. 24/7 WhatsApp support.",
  keywords: ["Umrah visa Pakistan", "Umrah packages Islamabad", "Barkat Travel Islamabad", "Saudi visa Pakistan", "Umrah transport for Pakistani pilgrims", "Rawalpindi Umrah services"],
  alternates: {
    canonical: "/location/pakistan",
  },
};

export default function UmrahPakistanPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.pakistan.phones[0]);

  const faqs = [
    {
      q: "Where is your office located in Pakistan?",
      a: "Our main Pakistan branch is located at Adyala Tower, Adyala Road, Ground Floor, Islamabad."
    },
    {
      q: "What is the current Umrah visa price in Pakistan?",
      a: "Umrah visa prices fluctuate based on Saudi Ministry rates and exchange rates. Please contact our Islamabad office for the latest competitive pricing."
    },
    {
      q: "Do you provide Umrah packages including tickets from Pakistan?",
      a: "We offer both visa-only and complete packages including air tickets, hotels in Makkah/Madinah, and luxury transport."
    },
    {
      q: "Can I submit my documents online?",
      a: "Yes, we accept digital copies of documents via WhatsApp, but for certain visa types, a physical visit to our Islamabad office may be required."
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-blue py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Barkat Travel Pakistan Center</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Umrah Visa & Packages in Pakistan</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Spiritual journeys made simple. Authorized Umrah processing and group packages from our Islamabad office.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
             <a href="#booking-form" className="bg-brand-gold text-brand-blue px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl">
                Book Umrah Package Now
             </a>
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-brand-gold text-brand-gold px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all">
                Call Now for Fast-Track Visa
             </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                 <MapPin className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Islamabad Registered Branch</span>
              </div>
              
              {/* Detailed Location Guide */}
              <div className="space-y-4">
                 <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue tracking-tight ">How to get an Umrah visa from Pakistan?</h2>
                 <p className="text-brand-blue/70 text-lg leading-relaxed border-l-4 border-brand-gold/20 pl-6">
                    To get an Umrah visa from Pakistan, you must submit your valid passport (6 months validity) and digital photographs to an authorized agent like Barkat Travel Islamabad. We process Saudi Ministry e-visas within 48-72 hours. Our Islamabad center handles all biometric requirements via Etimad/Tasheer centers and provides complete ground support in Makkah and Madinah.
                 </p>
              </div>

              <p className="text-brand-blue/70 text-md  leading-relaxed">
                Barkat Travel has expanded its exclusive services to <strong>Pakistan</strong>, bringing the same quality and trust that has made us a leader in Qatar. From our <strong>Islamabad office at Adyala Tower</strong> (near the rapidly developing Rawalpindi convergence zones), we serve pilgrims in <strong>Rawalpindi's twin-city area, Lahore, Karachi</strong>, and nationwide via our dedicated courier and digital channels.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-brand-beige/20 p-8 rounded-[2rem] border border-brand-gold/10">
                 <FeatureItem title="Group Packages" desc="Guided tours for families." />
                 <FeatureItem title="Visa Only" desc="Quick 72h processing." />
                 <FeatureItem title="Luxury Transport" desc="GMC/Bus in KSA." />
                 <FeatureItem title="Hotel Booking" desc="3, 4, & 5 Star Options." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10">
                 <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4  underline decoration-brand-gold/30 underline-offset-8">Regional Entity Centers:</h4>
                 <div className="flex flex-wrap gap-4">
                    <InternalLink href="/visa/" text="Tasheer Center Support" />
                    <InternalLink href="/transport/" text="Islamabad to KSA Logistics" />
                    <InternalLink href="/contact/" text="Adyala Road Office" />
                 </div>
              </div>
            </div>

            <div className="sticky top-32">
               <BookingForm defaultService="Umrah Package Pakistan" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage & Entities - Local SEO Hub */}
      <section className="py-16 bg-brand-white border-y border-brand-gold/10">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4">Areas We Service in Pakistan</h3>
                  <div className="flex flex-wrap gap-2">
                     {["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Faisalabad", "Peshawar", "Multan", "Quetta"].map((city) => (
                        <span key={city} className="px-4 py-2 bg-brand-beige/20 border border-brand-gold/10 rounded-full text-xs font-bold text-brand-blue/70">
                           {city}
                        </span>
                     ))}
                  </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4">Related Saudi Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <Link href="/visa-services/tourist-visa" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Saudi Tourist Visa
                     </Link>
                     <Link href="/transport/doha-to-makkah" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Luxury Transport
                     </Link>
                     <Link href="/umrah-visa" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Group Umrah
                     </Link>
                     <Link href="/contact" className="flex items-center text-sm font-bold text-brand-gold hover:text-brand-blue transition-colors group">
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        Hotel Bookings
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Local SEO Process Steps */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-gold mb-12 underline decoration-brand-gold/20 underline-offset-8">Our Pakistan To Makkah Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <ProcessStep 
                 num="01" 
                 title="Consultation" 
                 desc="Speak with our Islamabad experts to choose the right package or visa category for your needs." 
               />
               <ProcessStep 
                 num="02" 
                 title="Documentation" 
                 desc="Submit your passport and pictures. We handle all Ministry and bio-metric requirements if needed." 
               />
               <ProcessStep 
                 num="03" 
                 title="Flight & Stay" 
                 desc="Receive your visa, tickets, and hotel vouchers. Our KSA team will meet you at the airport." 
               />
            </div>
        </div>
      </section>

      {/* Trust & Leadership */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="bg-brand-blue rounded-[3rem] p-12 text-brand-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
               <div className="w-48 h-48 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shrink-0 border-4 border-brand-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                    alt="Branch Manager Islamabad" 
                    className="w-full h-full object-cover"
                  />
               </div>
                <div>
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 block  underline decoration-brand-gold/30 underline-offset-4">Verified Authority</span>
                  <h3 className="text-3xl font-bold font-inter tracking-tight mb-4 text-brand-gold">Trusted Local Leadership</h3>
                  <p className="text-brand-white/70  text-lg leading-relaxed max-w-2xl">
                    "Our Islamabad team is dedicated to providing personalized service. With over 12 years of experience in Saudi visa processing and GCC logistics, we manage the entire process locally to ensure your peace of mind."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                     <div>
                        <p className="font-bold text-brand-gold">— Syed Muzammil</p>
                        <p className="text-[10px] text-brand-white/50 uppercase tracking-widest">Branch Manager | Licensed Hajj/Umrah Coordinator</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* AI-SEO Explicit Data Table */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Umrah Service Comparison - Pakistan</h2>
               <p className="text-brand-blue/60 text-sm ">Direct facts and data for informed pilgrims.</p>
            </div>
            <div className="overflow-x-auto rounded-[2rem] border border-brand-gold/10 shadow-sm transition-all hover:shadow-lg">
               <table className="w-full text-left bg-white">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-widest">
                     <tr>
                        <th className="p-6">Package Feature</th>
                        <th className="p-6">Standard Economy</th>
                        <th className="p-6">Exclusive VVIP</th>
                        <th className="p-6">Processing Time</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5">
                        <td className="p-6 font-bold">Visa Category</td>
                        <td className="p-6">Individual E-Visa</td>
                        <td className="p-6">Multiple Entry Tourist</td>
                        <td className="p-6">48-72 Hours</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-beige/5">
                        <td className="p-6 font-bold">Transport Center</td>
                        <td className="p-6">Luxury Coach / Bus</td>
                        <td className="p-6">Private GMC Yukon</td>
                        <td className="p-6">Request a Quote / Pricing</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5">
                        <td className="p-6 font-bold">Hotel Distance</td>
                        <td className="p-6">600m - 1km (Shuttle)</td>
                        <td className="p-6">Walking Range (Clock Tower)</td>
                        <td className="p-6">Priority Check-in</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">What Islamabad Pilgrims Say</h2>
               <p className="text-brand-blue/60  text-sm">Verified testimonials from our local clients in Pakistan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-10 rounded-[3rem] border border-brand-gold/10 shadow-sm relative group">
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
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div className="max-w-xl">
                  <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">Recent Journeys from Pakistan</h2>
                  <p className="text-brand-blue/60  text-sm">Real-time updates of successful Umrah groups and visa approvals from our Islamabad center.</p>
               </div>
               <Link href="#booking-form" className="text-brand-gold font-bold uppercase tracking-widest text-xs flex items-center group border-b border-brand-gold pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Join Our Next Group
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80"
                 title="Islamabad Executive Group"
                 tag="March 2024"
                 desc="45 pilgrims from Islamabad & Rawalpindi successfully completed their 14-day luxury tour."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1519817650390-67a93a504269?auto=format&fit=crop&q=80"
                 title="Fast-Track Visa Center"
                 tag="Weekly Update"
                 desc="120+ Umrah visas issued this week for residents across Punjab and KPK through our Islamabad office."
               />
               <ActivityCard 
                 image="https://images.unsplash.com/photo-1582235332321-fac3cfed9d4d?auto=format&fit=crop&q=80"
                 title="Lahore Families Assisted"
                 tag="Recent"
                 desc="Coordinated 5 business-class families from Lahore for private GMC transfers in Makkah."
               />
            </div>
         </div>
      </section>

      {/* Common Inquiries */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-12  underline decoration-brand-gold/20 underline-offset-8">Direct Answers for Pakistani Pilgrims</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <QuestionResponse 
                  q="Does Barkat Travel have a license for Umrah in Pakistan?" 
                  a="Yes, Barkat Al Madinah is a registered entity in Pakistan and Qatar, authorized to facilitate Saudi visa services and organized pilgrimage tours."
               />
               <QuestionResponse 
                  q="Can I book just the visa from Islamabad office?" 
                  a="Yes, we offer 'Visa Only' services for individuals who have already booked their flights and hotels, with processing times of 48-72 hours."
               />
               <QuestionResponse 
                  q="What cities do you cover in Pakistan?" 
                  a="While our HQ is in Islamabad, we provide remote document processing and courier services for clients in Lahore, Karachi, Peshawar, and Faisalabad."
               />
               <QuestionResponse 
                  q="Do you provide Pakistan-based support in Makkah?" 
                  a="Our Urdu-speaking ground staff in Saudi Arabia is specifically assigned to assist Pakistani pilgrims with hotel check-ins and Ziarat tours."
               />
            </div>
         </div>
      </section>

      {/* Location Embedding Strategy for Local SEO */}
      <section className="py-12 bg-brand-white border-t border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Visit Our Islamabad / Rawalpindi Office</h2>
               <p className="text-brand-blue/60  text-sm">Conveniently located at Adyala Tower for easy drop-off of passports and documents.</p>
            </div>
            <div className="h-[400px] w-full rounded-[3rem] overflow-hidden border-2 border-brand-gold/20 shadow-2xl">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3324.9392237078335!2d72.9806954152011!3d33.585579980735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sAdiyala%20Rd%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2squ!4v1711200000000!5m2!1sen!2squ" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Barkat Travel Pakistan Office Location"
               ></iframe>
            </div>
         </div>
      </section>

      <NAPSection branch={CONTACT_INFO.pakistan} />

      <ContactCTA title="Contact Islamabad Office" />

      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Umrah Visa & Packages Pakistan",
          description: "Authorized Umrah visa processing and luxury packages for pilgrims from Islamabad, Rawalpindi, and across Pakistan. Complete ground support in Makkah and Madinah.",
          price: "75000",
          currency: "PKR",
          areaServed: ["Pakistan", "Islamabad", "Lahore", "Karachi", "Rawalpindi"]
        }} 
      />
      <SchemaMarkup schemaType="LocalBusiness" data={{ ...CONTACT_INFO.pakistan, reviews: testimonials, rating: "4.9", reviewCount: "124" }} />
    </div>
  );
}

function FeatureItem({ title, desc }: any) {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-brand-blue text-sm uppercase tracking-wide">{title}</h4>
        <p className="text-brand-blue/50 text-[10px] mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function ProcessStep({ num, title, desc }: any) {
  return (
    <div className="bg-brand-white/5 p-8 rounded-3xl border border-brand-white/10 hover:border-brand-gold transition-all group">
       <span className="text-5xl font-bold font-inter tracking-tight text-brand-gold/30 mb-4 block group-hover:text-brand-gold transition-colors">{num}</span>
       <h4 className="text-xl font-bold text-brand-gold font-inter tracking-tight mb-4">{title}</h4>
       <p className="text-brand-white/60 text-sm ">{desc}</p>
    </div>
  );
}

function ActivityCard({ image, title, tag, desc }: any) {
   return (
      <div className="group rounded-[2.5rem] overflow-hidden border border-brand-gold/10 hover:border-brand-gold transition-all shadow-sm hover:shadow-xl bg-brand-white">
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

function InternalLink({ href, text }: any) {
  return (
    <Link href={href} className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
       {text}
       <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
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

