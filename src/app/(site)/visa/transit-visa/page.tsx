import VisaForm from "@/components/VisaForm";
import PageCTA from "@/components/PageCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saudi Transit Visa | Short Stopover Guide | Barkat Travel",
  description: "Get your 96-hour Saudi Transit Visa for brief stopovers or short Umrah journeys. Official processing and travel advice for pilgrims crossing KSA.",
  keywords: ["Saudi transit visa", "Saudi stopover visa", "Saudi 96 hour visa", "Short Umrah visa", "Barkat Travel visa help"],
  alternates: {
    canonical: "/visa/transit-visa",
  },
};

const faqs = [
  {
    q: "How long is the Saudi Transit Visa valid for?",
    a: "The Saudi Transit/Stopover visa is typically valid for 96 hours (4 days), perfect for a short stopover or a quick Umrah journey."
  },
  {
    q: "Can I perform Umrah on a transit visa?",
    a: "Yes, the Saudi Stopover/Transit visa officially allows holders to perform Umrah and visit the Prophet's Mosque in Madinah."
  },
  {
    q: "Do I need a flight ticket to apply?",
    a: "Yes, typically you need a confirmed onward flight ticket showing Saudi Arabia as a transit point to be eligible for this specific visa."
  },
  {
    q: "Can I stay more than 4 days on a transit visa?",
    a: "No, the Saudi Stopover/Transit visa is strictly limited to 96 hours. For longer stays, we recommend applying for a Tourist eVisa."
  },
  {
    q: "Do I need a PCR test for Saudi Transit?",
    a: "Currently, COVID-19 health requirements have been relaxed, but we recommend checking the latest Ministry updates during your booking."
  },
  {
    q: "Is airport pickup included with the transit visa?",
    a: "Barkat Travel provides optional 24/7 airport transfers from Jeddah or Riyadh airports for transit travelers; this is a separate service."
  },
  {
    q: "Can I use the transit visa for road travel?",
    a: "While primarily for air transit, certain transit visa categories allow road entry. Please consult our team for bus transit eligibility."
  }
];

export default function TransitVisaPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Saudi Transit Visa",
          description: "Saudi Arabia 96-hour stopover visa for short Umrah trips and connecting flights. Fast 24-48 hour processing.",
          provider: "Barkat Travel"
        }} 
      />

      {/* Hero */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">96-Hour Stopover</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Saudi Transit Visa</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Quick, efficient stopover visa processing for travelers passing through the Kingdom.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue mb-4">Short Stop, Big Experience</h2>
           <p className="text-brand-blue/60 text-lg max-w-3xl mx-auto">
             Whether you're pausing your journey to visit family or perform a quick Umrah, the <strong>Saudi Transit Visa</strong> (Stopover Visa) is the ideal choice. Barkat Travel handles the technicalities so you can focus on your spiritual or personal goals.
           </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="space-y-8">
              <div className="space-y-4">
                 <FeaturedSnippet
                    question="How to apply for a Saudi transit visa (stopover)?"
                    answer="To apply for a Saudi transit (stopover) visa, you must possess a valid onward flight ticket out of Saudi Arabia. Barkat Travel processes your application digitally in 24-48 hours. The resulting e-transit visa allows a maximum stay of 96 hours."
                    example="For example, if you are flying from London to Doha with a layover in Jeddah, you can use this 96-hour transit visa to leave the airport, perform a quick Umrah in Makkah, and return for your ongoing flight."
                 />
              </div>

               <div className="space-y-6 text-base text-brand-blue/80 font-medium leading-relaxed mt-8 mb-8">
                  <div>
                    <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Ideal for Short Spiritual Retreats</h3>
                    <p>
                      The <strong>Saudi Transit Visa</strong> is purposefully designed for brief interventions. Whether you are pausing your international journey to visit family or perform a rapid Umrah, this stopover visa mitigates the cost of a full tourist visa. However, it requires a confirmed flight out of <strong>Jeddah or Riyadh airport</strong>—it cannot typically be used for round-trip return to your origin country.
                    </p>
                  </div>
               </div>

              <h3 className="text-2xl font-bold font-inter tracking-tight text-brand-blue  border-l-4 border-brand-gold pl-6">Core Transit Protocol:</h3>
              <ul className="space-y-4">
                 <RequirementItem text="Valid for 96 hours stay" />
                 <RequirementItem text="Includes Umrah permit" />
                 <RequirementItem text="Low cost & Fast processing" />
                 <RequirementItem text="Perfect for short spiritual retreats" />
              </ul>
              <div className="bg-brand-beige/20 p-8 rounded-3xl border border-brand-gold/10">
                 <p className="text-xs font-bold text-brand-blue/40 uppercase tracking-widest mb-4 ">Next Steps:</p>
                 <div className="flex flex-col gap-4">
                    <Link href="/transport/" className="flex items-center text-brand-gold font-bold hover:text-brand-blue transition-colors">
                       Book 24/7 Airport Pickup <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link href="/hotels/" className="flex items-center text-brand-gold font-bold hover:text-brand-blue transition-colors">
                       Find Short-Stay Hotels <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                 </div>
              </div>
           </div>
           <div>
              <VisaForm defaultVisaType="Saudi Transit Visa" />
           </div>
        </div>
      </section>

      {/* Service Verification Center */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-12 underline decoration-brand-gold/20 underline-offset-8">Direct Answers for Stopovers</h2>
            <FAQAccordion faqs={faqs} />
         </div>
      </section>

      <PageCTA
        heading="Book Transit Visa Assistance"
        description="Our team will guide you through Saudi transit visa requirements and help you apply quickly and correctly."
        primaryBtn={{ text: "Apply Now", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-4 h-4 text-brand-gold" />
      <span className="font-medium  text-sm">{text}</span>
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


