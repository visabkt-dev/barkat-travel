import VisaForm from "@/components/VisaForm";
import PageCTA from "@/components/PageCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle, Globe } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saudi Tourist E-Visa | Quick Approval Service | Barkat Travel",
  description: "Apply for your 1-year multiple entry Saudi Tourist E-Visa. Professional processing for GCC residents with high approval rates and fast turnaround.",
  keywords: ["Saudi tourist visa Qatar", "Saudi e-visa Doha", "Saudi visit visa GCC", "Saudi tourist visa requirements", "Barkat Travel visa services"],
  alternates: {
    canonical: "/visa/tourist-visa",
  },
};

const faqs = [
  {
    q: "What are the eligibility requirements for the Saudi Tourist eVisa as a Qatar resident?",
    a: "Most residents of GCC countries with a valid ID for at least 3 months and a passport valid for 6 months are eligible to apply for the e-Tourist visa."
  },
  {
    q: "Does the Saudi Tourist eVisa allow for multiple entries into the kingdom?",
    a: "The standard Saudi Tourist e-Visa is a multiple-entry visa valid for one year, allowing a stay of up to 90 days per visit."
  },
  {
    q: "Are Qatar residents allowed to perform Umrah using the Saudi Tourist eVisa?",
    a: "Yes! Currently, the Saudi Tourist visa allows holders to perform Umrah in Makkah and visit the Prophet's Mosque in Madinah."
  },
  {
    q: "How long does it take for Barkat Travel to process a Saudi Tourist eVisa?",
    a: "Typically, the e-visa is issued within 24 to 48 hours after we submit your application through our authorized portal."
  }
];

export default function SaudiTouristVisaPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Saudi Tourist Visa",
          description: "Authorized Saudi Arabia Tourist e-visa processing. 1-year multiple entry options for families and GCC residents.",
          price: "600",
          currency: "QAR"
        }} 
      />
      <SchemaMarkup schemaType="FAQ" data={faqs} />

      {/* SEO Hero Section */}
      <section className="bg-brand-blue pt-44 pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Fast-Track Processing | <span className="opacity-80">Updated: March 2026</span></span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Saudi Tourist Visa</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Leading authorized agent for Saudi e-Visas. Secure your multiple-entry visit visa with zero hassle.
          </p>
        </div>
      </section>

      {/* Intro & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
               {/* Visual Art Direction (Principle 2) */}
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-brand-gold/10 group bg-brand-blue/90 aspect-video flex items-center justify-center p-12">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
                  <div className="relative z-10 text-center">
                     <Globe className="w-16 h-16 text-brand-gold mx-auto mb-4 group-hover:rotate-12 transition-transform duration-700" />
                     <h3 className="text-brand-white font-bold font-inter tracking-tight text-2xl mb-2">Unified e-Tourist Verification</h3>
                     <p className="text-brand-white/60 text-sm">Official Authorized Gateway for GCC Residents</p>
                  </div>
               </div>

              <div className="space-y-4">
                 <FeaturedSnippet
                    question="How long does a Saudi Tourist Visa take for GCC residents?"
                    answer="For eligible GCC residents, the Saudi Tourist e-Visa is typically issued within 24 to 48 hours. Barkat Travel accelerates this by pre-auditing your occupation and passport data to prevent common MOFA rejection triggers."
                    example="For example, if your profession on your Qatar ID does not strictly match the approved Saudi Ministry categories, our agents manually map your title to ensure seamless 1-year multiple-entry approval."
                 />
              </div>

               <div className="space-y-6 text-base text-brand-blue/80 font-medium leading-relaxed mt-8 mb-8">
                  <div>
                    <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Seamless Entry Compliance for the Saudi Kingdom</h3>
                    <p>
                      Applying for the <strong>Saudi Tourist e-Visa</strong> is an entirely digital process, but minor uploading errors—specifically relating to the clarity of the personal photo or the matching of the applicant's occupation—account for the vast majority of delays. As a specialized <strong>authorized processor in Doha</strong>, Barkat Travel assumes full responsibility for the data formatting, meaning you obtain your 1-year multiple-entry visa without hassle.
                    </p>
                  </div>
               </div>

              {/* Grouped Information (Principle 4: Hierarchy) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="bg-brand-blue p-8 rounded-[2rem] text-brand-white shadow-xl border border-brand-gold/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <FileText className="w-16 h-16" />
                    </div>
                    <h3 className="text-brand-gold font-bold font-inter tracking-tight text-lg mb-4">Core Prerequisites</h3>
                    <div className="space-y-3">
                       <DocumentItem text="Passport Copy (6m Validity)" />
                       <DocumentItem text="Residence Copy or National ID" />
                       <DocumentItem text="Recent Digital Photo" />
                       <DocumentItem text="Email & Mobile Verification" />
                    </div>
                 </div>
                 <div className="bg-brand-gold/5 p-8 rounded-[2rem] border border-brand-gold/20">
                    <h3 className="text-brand-blue font-bold font-inter tracking-tight text-lg mb-4">Authority Signals</h3>
                    <div className="space-y-4">
                       <div>
                          <p className="text-[10px] font-bold uppercase text-brand-blue/40 tracking-widest">Issuance Velocity</p>
                          <p className="text-2xl font-bold text-brand-blue">24-48h Guaranteed</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold uppercase text-brand-blue/40 tracking-widest">Entry Type</p>
                          <p className="text-2xl font-bold text-brand-blue">Multiple Entries</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-brand-blue p-10 rounded-[2.5rem] text-brand-white group hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <Shield className="w-24 h-24 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">The 2026 Policy Landscape</h3>
                  <div className="space-y-4  text-sm text-brand-white/80 border-l-2 border-brand-gold/20 pl-6 mb-4">
                     <p><strong>Strategic Update:</strong> From March 2026, the Saudi Ministry has tightened 'Occupation Matching' for GCC residents. Barkat Travel uses a proprietary verification matrix to ensure your profession is category-aligned before we submit fees.</p>
                  </div>
               </div>

              <div className="pt-8 border-t border-brand-gold/10">
                 <div className="flex flex-wrap gap-8 items-center mb-8">
                    <div>
                       <p className="text-3xl font-bold text-brand-blue font-inter tracking-tight">24h</p>
                       <p className="text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Fastest Result</p>
                    </div>
                    <div className="w-px h-10 bg-brand-gold/20"></div>
                    <div>
                       <p className="text-3xl font-bold text-brand-blue font-inter tracking-tight">99%</p>
                       <p className="text-xs uppercase tracking-widest text-brand-blue/40 font-bold">Approval Rate</p>
                    </div>
                 </div>
                 <div className="flex flex-wrap gap-6">
                    <Link href="/visa/umrah-visa/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                       Umrah Specialist Center
                       <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/transport/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                       GCC Fleet Hire
                       <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact/" className="text-xs font-bold text-brand-gold hover:text-brand-blue transition-colors flex items-center group">
                       Barkat Doha HQ
                       <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
            </div>

            <div className="sticky top-32">
               <VisaForm defaultVisaType="Saudi Tourist Visa" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-gold mb-12 underline decoration-brand-gold/30 underline-offset-8">Simple 3-Step Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <ProcessStep number="1" title="Submit Info" desc="Send us your documents easily via WhatsApp or visit our office." />
               <ProcessStep number="2" title="We Process" desc="Our experts file your data in the official Saudi Ministry systems." />
               <ProcessStep number="3" title="Recieve E-Visa" desc="Recieve your official PDF visa on your phone within 48 hours." />
            </div>
        </div>
      </section>

      {/* Service Verification Matrix */}
      <section className="py-24 bg-brand-white border-y border-brand-gold/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-widest">Barkat Service Comparison</h2>
               <p className="text-brand-blue/60 text-sm   underline decoration-brand-gold/20 underline-offset-4">Choosing Managed Care vs DIY Online.</p>
            </div>
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-inner p-1">
               <table className="w-full text-left bg-white rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Feature Comparison</th>
                        <th className="p-8">Barkat Managed</th>
                        <th className="p-8">DIY Portal</th>
                        <th className="p-8">Why it Matters</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Occupation Audit</td>
                        <td className="p-8">✓ Professional Alignment</td>
                        <td className="p-8 text-red-800">No Check</td>
                        <td className="p-8 ">Prevents Ministry Mismatch</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-beige/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Photo Optimization</td>
                        <td className="p-8">✓ Automated Realignment</td>
                        <td className="p-8 text-red-800">User Upload Errors</td>
                        <td className="p-8 ">Leads to 60% of Rejections</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Support Desk</td>
                        <td className="p-8">✓ 24/7 Human Link</td>
                        <td className="p-8 text-red-800">Email Only</td>
                        <td className="p-8 ">Instant Response to Queries</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-12  underline decoration-brand-gold/20 underline-offset-8">Direct Answers for Visitors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <QuestionResponse 
                  q="Can GCC residents get a Saudi Tourist visa instantly in 2026?" 
                  a="While not instant, the process is highly streamlined. Barkat Travel typically secures approvals within 24 to 48 hours for GCC residents."
               />
               <QuestionResponse 
                  q="Do I need a local Saudi sponsor to apply for the tourist eVisa?" 
                  a="No, the e-Tourist visa is a self-sponsored visa category for eligible residents of GCC countries."
               />
               <QuestionResponse 
                  q="How long is the Saudi multiple entry tourist visa valid for?" 
                  a="The electronic tourist visa is valid for 365 days (one year) from the date of issuance."
               />
               <QuestionResponse 
                  q="Does the official Saudi tourist visa fee include mandatory health insurance?" 
                  a="Yes, the official Saudi tourist visa fee typically includes mandatory medical insurance for the duration of your stay."
               />
            </div>
         </div>
      </section>

      <PageCTA
        heading="Get Your Saudi Tourist Visa Today"
        description="We assist with Saudi Tourist e-Visa applications for travelers globally. Quick processing and expert guidance."
        primaryBtn={{ text: "Apply Now", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function DocumentItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-4 h-4 text-brand-gold" />
      <span className="font-medium  text-sm">{text}</span>
    </div>
  );
}

function ProcessStep({ number, title, desc }: any) {
  return (
    <div className="group">
       <div className="w-14 h-14 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
          {number}
       </div>
       <h4 className="text-xl font-bold text-brand-gold mb-3 font-inter tracking-tight">{title}</h4>
       <p className="text-brand-white/60 text-sm ">{desc}</p>
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


