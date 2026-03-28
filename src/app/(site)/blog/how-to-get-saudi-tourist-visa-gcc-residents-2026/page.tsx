import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { ArrowLeft, Clock, Info, CheckCircle, Shield, FileText } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import AuthorProfile from "@/components/AuthorProfile";
import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Doha to Saudi Tourist Visa Guide 2026 | GCC Resident Rules | Barkat Travel",
  description: "A complete agent verification checklist on securing your Saudi Tourist e-Visa from Qatar. Understand document requirements, fees, and the exact steps to prevent MOFA application rejection.",
  alternates: {
    canonical: "/blog/how-to-get-saudi-tourist-visa-gcc-residents-2026",
  },
};

export default function BlogPost() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup 
         schemaType="Breadcrumb" 
         data={[
            { name: "Home", url: "https://barkattravel.com" },
            { name: "Blog", url: "https://barkattravel.com/blog" },
            { name: "How to get a Saudi Tourist Visa for GCC residents in 2026?", url: "https://barkattravel.com/blog/how-to-get-saudi-tourist-visa-gcc-residents-2026" }
         ]} 
      />
      
      {/* Article Schema */}
      <SchemaMarkup 
         schemaType="Article" 
         data={{
            headline: "How to get a Saudi Tourist Visa for GCC residents in 2026?",
            description: "A complete agent verification checklist on securing your Saudi Tourist e-Visa from Qatar. Understand document requirements, fees, and the exact steps to prevent MOFA application rejection.",
            datePublished: "2026-03-15T08:00:00+00:00",
            dateModified: "2026-03-15T09:00:00+00:00",
            authorName: "Faisal Ahmed",
            authorRole: "Visa Compliance Lead"
         }}
      />

      {/* FAQ Schema */}
      <SchemaMarkup schemaType="FAQ" data={[
        {
          q: "What are the exact documents needed to apply for a Saudi Tourist eVisa from Qatar?",
          a: "You need a valid passport (minimum 6 months validity), a Qatar ID (minimum 3 months validity), a recent digital passport-sized photo with a white background, and an active email address."
        },
        {
          q: "Why do so many DIY Saudi eVisa applications get rejected by MOFA?",
          a: "The two primary reasons for rejection are 'Occupation Mismatch' (where the profession on your ID does not match the strict MOFA allowed categories) and 'Photo Error' (where the uploaded image does not meet automated biometric standards)."
        },
        {
          q: "How can Barkat Travel guarantee a faster Saudi Tourist visa approval?",
          a: "Our compliance agents manually audit your Qatar ID profession against the Saudi portal's database before submission, ensuring your profession is aligned and your photo is correctly formatted, resulting in a 99% approval rate."
        }
      ]} />

      <div className="bg-brand-blue pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center text-brand-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Center
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-inter tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
             How to get a Saudi Tourist Visa for GCC residents in 2026?
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-brand-white/80 text-sm font-medium">
             <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-gold" /> Updated March 2026</span>
             <span className="flex items-center bg-brand-gold/10 px-3 py-1 rounded-full text-brand-gold"><Shield className="w-4 h-4 mr-2" /> Verified by Barkat Travel Visa Auditors</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
         <div className="prose prose-lg prose-blue max-w-none">
            
            <p className="lead text-xl text-brand-blue/80 font-medium leading-relaxed mb-10">
               <strong>Immediate Answer:</strong> To get a Saudi Tourist e-Visa as a GCC resident in 2026, you must hold a valid Residency ID (like a Qatar ID) valid for at least 3 months, and a passport valid for at least 6 months. The visa allows multiple entries over one year and permits stays of up to 90 days. While the process is electronic, utilizing an authorized agency like Barkat Travel prevents the common "Profession Mismatch" rejection loop.
            </p>

            {/* Video Placeholder */}
            <div className="bg-brand-beige rounded-[2rem] p-8 text-center border-2 border-dashed border-brand-gold/30 mb-12">
               <h3 className="text-lg font-bold text-brand-blue mb-2 font-inter tracking-tight">📹 Visual Walkthrough</h3>
               <p className="text-sm text-brand-blue/60 mb-4">[Placeholder for Barkat Travel's short-form documentation walkthrough.]</p>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">What are the exact documents needed to apply for a Saudi Tourist eVisa from Qatar?</h2>
            
            <p className="mb-6">
               The digital transition has revolutionized border access into the Kingdom, but the foundational requirements remain strict. If you are applying from Doha, ensure your physical documents possess the following traits before beginning the application:
            </p>

            <div className="bg-white p-6 rounded-[2rem] border border-brand-gold/10 shadow-sm mb-10">
               <ul className="space-y-4 m-0 p-0 list-none">
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">Passport Copy</strong>
                        <span className="text-sm text-brand-blue/70">Must be valid for a minimum of 6 months from the intended date of entry.</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">Valid GCC Residency (QID)</strong>
                        <span className="text-sm text-brand-blue/70">Your ID must have at least 3 months of remaining validity.</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">Digital Passport Photo</strong>
                        <span className="text-sm text-brand-blue/70">Crisp, white background, no glasses, looking directly at the camera.</span>
                     </div>
                  </li>
               </ul>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">Why do so many DIY Saudi eVisa applications get rejected by MOFA?</h2>

            <p className="mb-6">
               Many travelers attempt to navigate the Ministry of Foreign Affairs (MOFA) portal independently, assuming that holding a QID automatically guarantees an eVisa. However, automated rejection protocols have led to a surge in denied applications. The primary culprit is **Occupation Mismatch**.
            </p>
            <p className="mb-8">
               Your printed QID profession must exactly map to an approved professional category within the Saudi database. If you are listed as a "Clerk" but input "Manager," the system will instantaneously auto-reject your application without refunding the visa fee. This is why having an authorized agent perform a pre-submission audit is crucial.
            </p>

            {/* Agent Highlight (EEAT Feature) */}
            <div className="bg-brand-blue text-white p-8 rounded-[2rem] my-10 border border-brand-gold/10 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <FileText className="w-24 h-24 text-brand-gold" />
               </div>
               <h3 className="text-brand-gold font-bold font-inter tracking-tight mb-2 text-xl">Agent Field Notes: Professional Alignment</h3>
               <p className="text-sm leading-relaxed text-brand-white/90">
                  "Every week at the Barkat HQ in Doha, we see clients who lost their visa fees because they uploaded a low-resolution photo or selected the wrong profession code. We maintain an internal matrix mapping every Qatar ID job title to its approved Saudi equivalent. By routing your application through our portal, you bypass these automated rejections completely."
               </p>
               <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mt-4">— Faisal Ahmed, Visa Compliance Lead at Barkat Travel</p>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">How can Barkat Travel guarantee a faster Saudi Tourist visa approval?</h2>
            
            <p className="mb-6">
               When you secure your visa through our central <Link href="/visa/tourist-visa" className="font-bold underline text-brand-blue hover:text-brand-gold">Tourist Visa Portal</Link>, we execute a 3-point manual audit immediately:
            </p>

            <ol className="list-decimal pl-6 space-y-3 mb-12 text-brand-blue/80 font-medium">
               <li>We electronically enhance and crop your photo to satisfy biometric rules perfectly.</li>
               <li>We translate and align your exact QID profession to the Saudi MOFA approved list.</li>
               <li>We act as your local sponsor and contact node, instantly resolving any flags raised by immigration control.</li>
            </ol>

            <AuthorProfile 
               name="Faisal Ahmed"
               role="Visa Compliance Lead"
               bio="Faisal leads the central Visa Division at Barkat Travel. Over the past decade, his direct liaison with Saudi Ministry of Foreign Affairs networks has helped facilitate over 25,000 successful visa approvals for expatriates and citizens alike."
               imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
               credentials={["Saudi MoFA Enrolled Agent", "GCC Immigration Law", "15 Years Experience"]}
            />

         </div>

         <div className="mt-16 bg-brand-blue p-12 rounded-[3rem] text-center border-4 border-brand-gold/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
            <div className="relative z-10">
               <h3 className="text-3xl font-black font-inter tracking-tight text-brand-gold mb-4">Don't Risk a Mismatch Rejection.</h3>
               <p className="text-white/80 mb-8 max-w-lg mx-auto">Skip the portal frustration and let our professional agents audit, submit, and secure your multiple-entry visa within 24-48 hours.</p>
               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  Process Visa on WhatsApp
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}
