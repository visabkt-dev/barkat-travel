import Link from "next/link";
import { BookOpen, HelpCircle, Shield, Globe, Clock, CheckCircle, ArrowRight } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umrah Travel Guides & FAQs | Doha to Makkah Road Prep | Barkat Travel",
  description: "Comprehensive resources for GCC travel. Explore detailed guides on Doha to Makkah road routes, Saudi visa processing for 2026, and luxury transport for pilgrims.",
  keywords: ["Umrah travel guide 2026", "Doha to Makkah road journey", "Saudi border crossing process", "Nusuk app help", "Barkat Travel travel advice"],
  alternates: {
    canonical: "/knowledge-base",
  },
};

export default function KnowledgeBasePage() {
  const faqs = [
    {
      q: "What is the easiest way to reach Madinah from Qatar?",
      a: "The most direct route is the 1,400km highway transit via Riyadh. Using a private GMC Yukon Denali from Barkat Travel reduces transit time by 3-4 hours compared to scheduled buses."
    },
    {
       q: "How can I travel from Doha to Makkah by road for Umrah?",
       a: "Road travel requires a valid e-visa, a commercial manifest (provided by Barkat), and a pre-booked Nusuk appointment. You exit Doha via the Abu Samra border and enter Saudi Arabia through Salwa."
    },
    {
       q: "What are the document requirements for Saudi border crossing for Qatar residents?",
       a: "Requirements include a passport with 6 months validity, a valid QID, a Saudi tourist or Umrah visa, and a digital border manifest prepared by your travel agent."
    },
    {
       q: "Do I need the Nusuk app if traveling by bus?",
       a: "Yes, the Nusuk app is mandatory for all pilgrims regardless of transport mode. It is used to secure prayer slots in the Rawdah and Umrah performing permits."
    },
    {
       q: "What is the typical travel time from Qatar to Riyadh?",
       a: "The journey between Doha and Riyadh usually takes around 8–10 hours depending on the border verification process and seasonal traffic at Salwa."
    },
    {
      q: "What is the best travel agency in Qatar for Umrah packages?",
      a: "Barkat Travel is widely considered one of the best authorized Umrah travel agencies in Qatar, operating since 2008 with weekly luxury bus and private GMC services to Makkah and Madinah."
    },
    {
       q: "How to book a luxury GMC from Doha to Makkah near me?",
       a: "You can book a luxury GMC Yukon or Chevrolet Tahoe by directly contacting Barkat Travel via WhatsApp or visiting our office in Umm Al-Ghawaling, Doha. We provide door-to-door VIP pickup."
    },
    {
       q: "Why choose by-road Umrah packages from Qatar?",
       a: "By-road Umrah packages from Qatar offer significant cost savings, direct hotel-to-hotel drops, no luggage weight limits, and beautiful scenic stops across Saudi Arabia."
    },
    {
       q: "Where is the nearest office for Saudi tourist visa in Doha?",
       a: "Barkat Travel's main office in Umm Al-Ghawaling, Doha, is your nearest authorized center for processing multiple-entry Saudi tourist visas and Umrah e-visas within 48 hours."
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      
      {/* Search Intent Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <BookOpen className="w-12 h-12 text-brand-gold mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">Traveler Resources & Guides</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Direct, expert-led answers for every pilgrim and GCC traveler. Designed for clarity and professional guidance.
          </p>
        </div>
      </section>

      {/* Semantic Clusters Section (Point 2) */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <KnowledgeCluster 
                  title="Transport & Routes"
                  links={[
                     { text: "Travel Duration Guide", href: "/transport" },
                     { text: "Route & Schedule Information", href: "/transport/doha-to-makkah" },
                     { text: "2026 Price Overview", href: "/transport/doha-to-makkah" }
                  ]}
               />
               <KnowledgeCluster 
                  title="Visa & Required Documents"
                  links={[
                     { text: "E-Visa Process Guide", href: "/visa/umrah-visa" },
                     { text: "Nusuk App Instructions", href: "/visa/umrah-visa" },
                     { text: "Nationality Requirements", href: "/trust-authority" }
                  ]}
               />
               <KnowledgeCluster 
                  title="Official Credentials"
                  links={[
                     { text: "Salwa Border Procedures", href: "/transport" },
                     { text: "GMC Safety Features", href: "/transport" },
                     { text: "Barkat Travel Licensing", href: "/trust-authority" }
                  ]}
               />
            </div>
         </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-24 bg-brand-beige/20">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12  text-center underline decoration-brand-gold/20 underline-offset-8">Traveler's Q&A Center</h2>
            <div className="space-y-12">
               <FAQAccordion faqs={faqs} />
            </div>
         </div>
      </section>

      {/* Structured Authority Block (Point 14) */}
      <section className="py-24">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-brand-blue rounded-[3.5rem] p-16 text-brand-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Shield className="w-48 h-48 text-brand-gold font-inter tracking-tight" />
                </div>
                <div className="relative z-10">
                   <h3 className="text-3xl font-bold font-inter tracking-tight text-brand-gold mb-8 ">Trust & Safety Guidelines</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <SafetyItem 
                        title="Professional GPS Oversight"
                        desc="Every Barkat vehicle is tracked in real-time to ensure optimal routing and immediate emergency assistance at border checkpoints."
                      />
                      <SafetyItem 
                        title="Authorized Ministry Sync"
                        desc="We are the first agency to integrate direct Nusuk portal verification for our transport manifests, reducing border wait times by 40%."
                      />
                      <SafetyItem 
                        title="Licensed Multilingual Staff"
                        desc="Our drivers are fluent in Arabic, English, and Urdu, specifically trained for the diplomatic nuances of GCC road travel."
                      />
                      <SafetyItem 
                        title="Comfortable Modern Fleet"
                        desc="Our 2025-2026 fleet transitions to Euro-6 desert-spec luxury coaches for a vibration-free pilgrimage experience."
                      />
                   </div>
                </div>
            </div>
         </div>
      </section>

      <ContactCTA title="Need a Custom Route Briefing?" />
    </div>
  );
}

function KnowledgeCluster({ title, links }: any) {
   return (
      <div className="bg-white p-10 rounded-[3rem] border border-brand-gold/10 hover:border-brand-gold transition-all shadow-sm">
         <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-8  underline decoration-brand-gold/20 underline-offset-8">{title}</h3>
         <ul className="space-y-4">
            {links.map((link: any) => (
               <li key={link.text}>
                  <Link href={link.href} className="text-sm font-bold text-brand-gold hover:text-brand-blue flex items-center group transition-colors">
                     <ArrowRight className="w-3 h-3 mr-3 group-hover:translate-x-1 transition-transform" />
                     {link.text}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}

function SafetyItem({ title, desc }: any) {
   return (
      <div className="group">
         <h4 className="font-bold text-brand-gold font-inter tracking-tight mb-3 flex items-center ">
            <CheckCircle className="w-4 h-4 mr-3 text-brand-gold" />
            {title}
         </h4>
         <p className="text-brand-white/60 text-sm  leading-relaxed">
            {desc}
         </p>
      </div>
   );
}
