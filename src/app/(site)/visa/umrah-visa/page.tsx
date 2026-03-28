import PageCTA from "@/components/PageCTA";
import FAQAccordion from "@/components/FAQAccordion";
import VisaForm from "@/components/VisaForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, Clock, Shield, CheckCircle, MessageSquare, Send, HelpCircle, Star, ArrowRight, Globe } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Umrah Visa for Qatar Residents | Nusuk Official Support | Barkat Travel",
  description: "Official Saudi Umrah visa processing for families and individuals in Qatar. Fast 24-48 hour approval, Nusuk synchronization, and comprehensive pilgrimage assistance.",
  keywords: ["Umrah visa Qatar", "Saudi visa Doha", "Umrah from Qatar", "Umrah visa price 2026", "Nusuk visa Qatar", "Saudi e-visa processing"],
  alternates: {
    canonical: "/visa/umrah-visa",
  },
};

export default function UmrahVisaPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  const faqs = [
    {
      q: "Can all Nationalities apply for an Umrah visa?",
      a: "Yes, almost all nationalities can apply for an Umrah or Saudi Tourist visa through our authorized agency."
    },
    {
      q: "Can Indians, Pakistanis and Bangladeshis apply for Umrah visa?",
      a: "Yes, all passport holders including Pakistani, Indian, and Bangladeshi passports are fully eligible to apply for the Umrah e-visa or Saudi Tourist visa."
    },
    {
      q: "How much does an authorized Saudi Umrah e-visa cost including mandatory medical insurance in 2026?",
      a: "The total filing fees typically range between 450-650 QAR/SAR equivalents. This cost includes the official Saudi Ministry visa fee, the 2026 unified medical insurance fee, and our authorized agency verification service to prevent 'Unified ID' errors."
    },
    {
      q: "How long does Umrah visa processing take?",
      a: "Typical processing time is 24 to 48 hours after document submission. Some cases might take slightly longer depending on Ministry response."
    },
    {
      q: "Is travel insurance required for Umrah visa?",
      a: "Yes, comprehensive health and travel insurance covering your stay in Saudi Arabia is mandatory. The insurance cost is automatically included in the unified visa fee we process for you."
    },
    {
      q: "Can Umrah visa be extended?",
      a: "The standard Umrah e-visa is generally valid for a 90-day stay and cannot be extended from within Saudi Arabia. You must exit before the visa expires to avoid overstay penalties."
    },
    {
      q: "Is the Nusuk app registration mandatory for pilgrims even if they have a Saudi Tourist Visa?",
      a: "Yes, the Nusuk app is absolutely mandatory for all pilgrims regardless of visa type. You must book your Umrah and Rawdah prayer slots via the app to avoid being denied entrance at the Haram checkpoints in Makkah."
    },
    {
      q: "Can I fly to Jeddah or Madinah with a Saudi Tourist Visa obtained from a travel agency?",
      a: "Yes, the Saudi Tourist e-visa is 'unified,' meaning you can enter at any international port. However, you must ensure your Nusuk app is linked to the visa's unified number before boarding your flight."
    },
    {
      q: "What is the validity of the Umrah visa?",
      a: "The Umrah e-visa is generally valid for 90 days from the date of issuance, allowing a stay of up to 90 days in Saudi Arabia."
    },
    {
      q: "Do I need to book transport or hotels with you to get the visa?",
      a: "No, we offer visa-only services, though we provide discounted packages if you book transport and hotels together."
    },
    {
      q: "What are the specific requirements for Qatar residents to apply for an Umrah visa?",
      a: "Qatar residents need to provide a clear copy of their Qatar ID (front and back), a Passport copy valid for at least 6 months, 2 recent passport-sized photographs (white background), and a copy of their residential permit or entry visa."
    },
    {
      q: "Can residents of Pakistan and Philippines apply for Umrah via NUSUK from Qatar?",
      a: "Yes, residents of Pakistan and the Philippines can apply for an Umrah visa through the NUSUK app or seek assistance for personal visits. Barkat Travel provides full support for these nationalities to ensure a smooth application process."
    },
    {
      q: "Can Qatar residents travel to Makkah in their own private cars?",
      a: "Yes, Qatar residents can travel by their own car. Requirements: The car must be registered in the driver's name or have valid authorization, and mandatory Saudi health insurance plus comprehensive car insurance are required for crossing the border."
    },
    {
      q: "What happens if my Umrah visa application is rejected by the Saudi Ministry?",
      a: "Rejections are rare at Barkat Travel due to our pre-submission audit. However, if a rejection occurs due to MOFA quotas, we facilitate a manual appeal process with the ministry to resolve the discrepancy and secure approval."
    },
    {
      q: "Is Barkat Travel a certified and authorized Umrah travel agency?",
      a: "Yes, Barkat Travel is fully authorized and licensed by Qatar Tourism and the Saudi Ministry of Hajj & Umrah. We are an official agency providing verified visa, transport, and hotel services for pilgrims."
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Umrah Visa Services",
          description: "Authorized Saudi e-visa processing. 24-48h fast-track compliance for all nationalities. Expert guidance on documentation and Nusuk app requirements.",
          price: "450",
          currency: "QAR"
        }} 
      />
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      {/* Hero Section */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold tracking-wider uppercase">Verified Saudi Entry Center</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-inter text-white mb-6 leading-[1.1] tracking-tight">
             Umrah Visa Services <br className="hidden md:block"/>
             <span className="text-brand-gold">– Requirements & Application Guide</span>
          </h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto leading-relaxed">
            Authorized Saudi e-visa processing for all applicants globally. Fast 24-48h compliance, unified Nusuk registration, and guaranteed processing for all nationalities.
          </p>
        </div>
      </section>

      {/* AI-SEO Regional Advisory (Visual Data Signal) */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
         <div className="bg-brand-gold p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-6 border-2 border-white">
            <div className="bg-white text-brand-gold p-4 rounded-full shadow-md shrink-0">
               <Globe className="w-8 h-8" />
            </div>
            <div>
               <p className="text-brand-blue font-black text-lg md:text-xl tracking-tight mb-1">Pilgrimage Update</p>
               <p className="text-brand-blue/90 text-sm md:text-base font-medium leading-relaxed">
                 The Saudi Ministry has streamlined the Nusuk portal. Barkat Travel now offers instant unified ID verification, ensuring seamless border crossings and flights.
               </p>
            </div>
         </div>
      </div>

      {/* Main Content & Form */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
               {/* Principle 2: Imagery & Art Direction */}
               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-brand-gold/10 group">
                  <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img 
                    src="/hero/route-illustration.png" 
                    alt="Barkat Travel route illustration" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-blue to-transparent z-20">
                     <p className="text-brand-white font-bold font-inter tracking-tight text-xl">The 2026 Pilgrimage Corridor</p>
                     <p className="text-brand-white/60 text-xs">Official Managed Route: Doha → Makkah → Madinah</p>
                  </div>
               </div>

              <div className="space-y-6">
                 <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                    <Shield className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Ministry Authorized Agent</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black font-inter tracking-tight text-brand-blue leading-tight">Expert Saudi Visa Guidance</h2>
                 
                 <FeaturedSnippet
                    question="How long does it take to get an Umrah visa from Qatar?"
                    answer="Securing an Umrah entry is a multi-step compliance process, but with an authorized agency like Barkat Travel, typical processing takes only 24 to 48 hours after document submission."
                    example="If you submit your Qatar ID and Passport copy on Sunday morning, you will likely receive your unified Saudi e-visa by Monday afternoon."
                 />
                 
                 <div className="space-y-6 text-base text-brand-blue/80 leading-relaxed font-medium mt-8">
                    <div>
                      <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">The Complexity of Saudi Biometrics and E-Visas</h3>
                      <p>
                        Applying for a <strong>Saudi multiple-entry tourist visa</strong> or a standard <strong>Umrah e-visa</strong> from Qatar can be technically confusing. Applicants often struggle with the <strong>Saudi Visa Bio app</strong> requirements, navigating the <strong>MOFA (Ministry of Foreign Affairs)</strong> portal, and understanding which visa type covers both Umrah rituals and general tourism in cities like Riyadh or Jeddah.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Why Do Visa Applications Get Delayed?</h3>
                      <p>
                        A single error on your application or a failure to properly link your visa to the <strong>Nusuk app</strong> can result in immediate border rejection. Furthermore, without proper guidance, you might accidentally select the wrong category of mandatory <strong>Saudi health and travel insurance</strong>, causing expensive delays before your spiritual journey even begins.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Barkat Travel's Fast-Track Solution</h3>
                      <p>
                        As an authorized agent, Barkat Travel bypasses the technical confusion. We pre-verify your <strong>Qatar ID</strong> and passport validity, handle the exact <strong>Enjaz protocol integration</strong>, and ensure your unified health insurance covers your entire 90-day stay. From initial document submission to obtaining your active <strong>Tawakkalna & Nusuk prayer permits</strong>, we guarantee a smooth, 48-hour approval pipeline for all expatriates residing in Qatar.
                      </p>
                    </div>
                 </div>
                 <div className="space-y-4 text-sm text-brand-blue/70 leading-relaxed font-inter pt-2">
                    <p>
                      <strong>Comprehensive Travel Rules:</strong> The Saudi e-visa requires mandatory health insurance, which is already bundled into the total visa fee we quote. There are no hidden charges. It is crucial to respect the visa expiry rules, as overstaying leads to significant fines. Let our experts handle the paperwork so you can focus entirely on the spiritual preparation for your journey.
                    </p>
                 </div>
              </div>

              {/* Grouped Information (Principle 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="bg-brand-blue p-8 rounded-[2rem] text-brand-white shadow-xl border border-brand-gold/10">
                    <h3 className="text-brand-gold font-bold font-inter tracking-tight text-lg mb-4">Required Documents</h3>
                    <div className="space-y-3">
                       <RequirementItem text="Valid Passport (6 Months)" />
                       <RequirementItem text="Residence Copy or National ID" />
                       <RequirementItem text="Passport Sized Photo" />
                       <RequirementItem text="Vaccination Record" />
                    </div>
                 </div>
                 <div className="bg-brand-beige p-8 rounded-[2rem] border border-brand-gold/20">
                    <h3 className="text-brand-blue font-bold font-inter tracking-tight text-lg mb-4">Service Benchmarks</h3>
                    <div className="space-y-4">
                       <div>
                          <p className="text-[10px] font-bold uppercase text-brand-blue/40 tracking-widest">Success Rate</p>
                          <p className="text-2xl font-bold text-brand-blue">99.9% Verified</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-bold uppercase text-brand-blue/40 tracking-widest">Processing</p>
                          <p className="text-2xl font-bold text-brand-blue">24-48 Hours</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <InternalLink href="/transport/doha-to-makkah/" text="Luxury Bus Tours" />
                <InternalLink href="/contact/" text="Doha Main Office" />
              </div>
            </div>

            <div className="sticky top-32">
               <VisaForm defaultVisaType="Saudi Umrah Visa" />
            </div>
          </div>
        </div>
      </section>

      {/* Processing Steps (Added per Guide) */}
      <section className="py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12">How it Works?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <Step number="1" title="Documents" desc="Send us photos of your Passport and QID via WhatsApp." />
               <Step number="2" title="Verification" desc="Our team verifies your eligibility and prepares the file." />
               <Step number="3" title="Payment" desc="Secure payment via transfer or office visit." />
               <Step number="4" title="E-Visa" desc="Recieve your official e-visa directly on your phone." />
            </div>
        </div>
      </section>

      {/* Service Verification Matrix */}
      <section className="py-24 bg-white border-y border-brand-gold/5">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4 uppercase tracking-widest">Barkat Service Comparison</h2>
               <p className="text-brand-blue/60 text-sm   underline decoration-brand-gold/20 underline-offset-4">Why Experienced Guided Filing Outperforms DIY.</p>
            </div>
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-inner p-1">
               <table className="w-full text-left bg-white rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Visa Feature</th>
                        <th className="p-8">Barkat Authorized</th>
                        <th className="p-8">Direct Portal (DIY)</th>
                        <th className="p-8">Official Status</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Occupation Matching</td>
                        <td className="p-8">✓ Expert Manual Check</td>
                        <td className="p-8 text-red-800">Auto-Reject Risk</td>
                        <td className="p-8 ">Ministry Database Synced</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-beige/5 transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Unified ID Tracking</td>
                        <td className="p-8">✓ Included for Nusuk</td>
                        <td className="p-8 text-red-800">Manual User Effort</td>
                        <td className="p-8 ">Certified Data Flow</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/5">
                        <td className="p-8 font-bold text-brand-blue">Priority Processing</td>
                        <td className="p-8">✓ 24h Queue Access</td>
                        <td className="p-8 text-red-800">Standard 3-7 Days</td>
                        <td className="p-8 ">Direct API Integration</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-white">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="text-center mb-16">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 inline-block px-4 py-1 bg-brand-gold/10 rounded-full">Pilgrim Support Center</span>
              <h2 className="text-3xl md:text-4xl font-black font-inter tracking-tight text-brand-blue">Frequently Asked Questions</h2>
              <div className="w-20 h-1.5 bg-brand-gold mx-auto mt-6 rounded-full"></div>
           </div>
           
           <FAQAccordion faqs={faqs} />
        </div>
      </section>
       <PageCTA
        heading="Apply for Umrah Visa"
        description="We process Umrah visas for Pakistan, India, Bangladesh and all other passport holders. Fast approval with full document support."
        primaryBtn={{ text: "Start Application", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
      
      {/* Internal Linking Area (SEO Boost) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-xl font-bold font-inter text-brand-blue mb-6">Complete Your Umrah Journey</h3>
          <p className="text-sm text-brand-blue/60 mb-8 max-w-2xl mx-auto">
            Once your visa is secured, Barkat Travel provides comprehensive group and private transport, alongside accommodations near the Haram. Explore our core services:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/transport/doha-to-makkah/" className="bg-brand-blue/5 hover:bg-brand-gold hover:text-white transition-all text-brand-blue font-bold px-6 py-3 rounded-xl border border-brand-blue/10 text-sm">
                Doha to Makkah Transport
             </Link>
             <Link href="/transport/doha-to-madinah/" className="bg-brand-blue/5 hover:bg-brand-gold hover:text-white transition-all text-brand-blue font-bold px-6 py-3 rounded-xl border border-brand-blue/10 text-sm">
                Doha to Madinah Taxi
             </Link>
             <Link href="/hotels/makkah-hotel-booking/" className="bg-brand-blue/5 hover:bg-brand-gold hover:text-white transition-all text-brand-blue font-bold px-6 py-3 rounded-xl border border-brand-blue/10 text-sm">
                Makkah Hotels
             </Link>
             <Link href="/hotels/madinah-hotel-booking/" className="bg-brand-blue/5 hover:bg-brand-gold hover:text-white transition-all text-brand-blue font-bold px-6 py-3 rounded-xl border border-brand-blue/10 text-sm">
                Madinah Hotels
             </Link>
          </div>
        </div>
      </section>

      <SchemaMarkup 
        schemaType="Article" 
        data={{
          title: "Umrah Visa | Fast 48h e-Visa Issuance",
          excerpt: "Securing your Umrah Visa is fast and simple with Barkat Travel. Authorized Saudi Ministry agent providing 48h e-visa issuance.",
          image: "https://barkattravel.com/logo.png",
          date: "2026-03-27",
          advisor: "Visa Services Team"
        }} 
      />
    </div>
  );
}

function RequirementItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-4 h-4 text-brand-gold" />
      <span className="font-medium text-sm">{text}</span>
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

function Step({ number, title, desc }: any) {
  return (
    <div className="relative group">
       <div className="w-16 h-16 bg-brand-blue text-brand-gold rounded-2xl flex items-center justify-center text-2xl font-bold font-inter tracking-tight mx-auto mb-4 group-hover:bg-brand-gold group-hover:text-brand-blue transition-colors">
          {number}
       </div>
       <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-3">{title}</h4>
       <p className="text-brand-blue/60 text-sm ">{desc}</p>
    </div>
  );
}

