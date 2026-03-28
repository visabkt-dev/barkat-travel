import VisaForm from "@/components/VisaForm";
import FAQAccordion from "@/components/FAQAccordion";
import PageCTA from "@/components/PageCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saudi Multiple Entry Visa | 1-Year Validity Guide | Barkat Travel",
  description: "Official guide and application for Saudi Multiple Entry Visas. Valid for one full year with 90-day stays. Ideal for frequent travelers and long-term pilgrims.",
  keywords: ["Saudi multiple entry visa", "1 year visa Saudi", "Saudi visit visa Doha", "Umrah multi entry visa", "Barkat Travel Saudi visa"],
  alternates: {
    canonical: "/visa/multiple-entry-visa",
  },
};

const faqs = [
  {
    q: "How long is the multiple entry visa valid for?",
    a: "The Saudi e-Tourist multiple entry visa is valid for 1 year from the date of issuance."
  },
  {
    q: "How many days can I stay per visit?",
    a: "You can stay up to 90 days (3 months) in Saudi Arabia on each visit during the 1-year validity period."
  },
  {
    q: "Can I use this visa for Umrah multiple times?",
    a: "Absolutely. One of the best benefits of this visa is that you can perform Umrah multiple times throughout the year without needing a new visa each time."
  }
];

export default function MultipleEntryVisaPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Saudi Multiple Entry Visa",
          description: "1-year valid Saudi multiple-entry e-visa for frequent Umrah and business travelers. Offers 90-day stays per visit.",
          provider: "Barkat Travel"
        }} 
      />

      {/* Hero */}
      <section className="bg-brand-blue pt-44 pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">1-Year Freedom</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Saudi Multiple Entry Visa</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            The ultimate choice for frequent pilgrims and business travelers.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-8">
              <div className="space-y-4">
                 <FeaturedSnippet
                    question="How many times can I perform Umrah on a multiple entry visa?"
                    answer="With the Saudi 1-Year Multiple Entry Visa, you can perform Umrah as many times as you want throughout the year. Each visit allows for a maximum stay of 90 days, giving you ample time to travel between Makkah and Madinah."
                    example="For example, a Qatar resident can perform Umrah during Ramadan, return to Doha, and then travel back to Saudi Arabia for a business trip two months later using the exact same visa."
                 />
              </div>

               <div className="space-y-6 text-base text-brand-blue/80 font-medium leading-relaxed mt-8 mb-8">
                  <div>
                    <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">One Visa, Multiple Blessings</h3>
                    <p>
                      The <strong>Multiple Entry e-Visa</strong> is Barkat Travel's most recommended product for regular travelers to Saudi Arabia. It eliminates the need for repeated applications, allowing you to enter the Kingdom via land, air, or sea borders. Our agents ensure rapid processing so you can cross the <strong>Abu Samra border</strong> or board a flight at a moment's notice.
                    </p>
                  </div>
               </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <ValueProp icon={<Shield />} title="Peace of Mind" desc="One application for entire year's travel." />
                 <ValueProp icon={<Star />} title="High Priority" desc="Accepted at all land and air borders." />
                 <ValueProp icon={<Clock />} title="90 Day Stays" desc="Ample time for extended spiritual retreats." />
                 <ValueProp icon={<FileText />} title="Easy Renewal" desc="Fast track renewal for our existing clients." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10">
                 <Link href="/transport/" className="text-sm font-bold text-brand-gold flex items-center group">
                    View Fleet for Multiple Trips <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
           <div className="sticky top-32">
              <VisaForm defaultVisaType="Multiple Entry Visa" />
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-beige/20">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12 flex items-center gap-4">
              <HelpCircle className="text-brand-gold w-8 h-8" />
              Multi-Entry FAQ
           </h2>
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Apply for Saudi Multiple Entry Visa"
        description="Frequent Saudi travelers can apply for the multiple entry visa through our team. Save time on every trip."
        primaryBtn={{ text: "Get Started", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function ValueProp({ icon, title, desc }: any) {
   return (
      <div className="flex gap-4">
         <div className="text-brand-gold mt-1 shrink-0">{icon}</div>
         <div>
            <h4 className="font-bold text-brand-blue text-sm uppercase">{title}</h4>
            <p className="text-brand-blue/50 text-[10px] ">{desc}</p>
         </div>
      </div>
   );
}


