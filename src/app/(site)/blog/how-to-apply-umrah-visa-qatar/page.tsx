import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Metadata } from "next";
import Link from "next/link";
import AuthorProfile from "@/components/AuthorProfile";
import { Quote, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Umrah Visa Guide for Qatar Residents 2026 | Barkat Travel",
  description: "A fast, simple guide for expat residents in Qatar to get their Saudi Umrah visa. Learn the exact documents needed and how to bypass common rejection traps.",
  alternates: {
    canonical: "/blog/how-to-apply-umrah-visa-qatar",
  },
};

const faqs = [
  {
    q: "Can I use the Saudi Tourist eVisa for Umrah?",
    a: "Yes. If you have a valid Qatar ID with an eligible profession, you can apply for the 1-Year Multiple Entry Tourist eVisa, which allows you to perform Umrah year-round (except during the Hajj season)."
  },
  {
    q: "How long does the visa approval take?",
    a: "Standard eVisas are approved within 24 to 48 hours. If there is a mismatch with your QID profession, medical insurance, or photo background, it may be delayed or rejected."
  },
  {
    q: "Do children need their own visa?",
    a: "Yes. Every family member, including infants, must have their own individual visa applied for separately, though they can be linked to the parent's application."
  }
];

export default function BlogPost() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Article" 
        data={{
          headline: "How to apply for an Umrah visa as a Qatar Resident (2026 Guide)",
          author: "Faisal Ahmed",
          datePublished: "2026-02-28",
          image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80",
          publisherName: "Barkat Travel Qatar"
        }} 
      />

      <section className="bg-brand-blue py-16 text-center text-brand-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] bg-brand-gold/10 px-4 py-1 rounded-full border border-brand-gold/20 mb-6 inline-block">
               Visa Fast-Track Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-6 leading-tight">
               How to apply for an Umrah visa as a Qatar Resident?
            </h1>
            <div className="flex justify-center items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-brand-white/50">
               <span>By Faisal Ahmed</span>
               <span>|</span>
               <span>Updated: Feb 28, 2026</span>
               <span>|</span>
               <span>Reading Time: 3 mins</span>
            </div>
         </div>
      </section>

      <section className="py-16">
         <div className="container mx-auto px-4 max-w-3xl">
            
            {/* Immediate Answer */}
            <div className="bg-brand-beige/20 p-8 rounded-[2rem] border-l-4 border-brand-gold shadow-sm mb-12">
               <p className="text-xl text-brand-blue font-bold leading-relaxed">
                  To apply for an Umrah visa as a Qatar resident, you must get the Saudi Tourist eVisa. You need a valid Qatar ID (valid for at least 3 months), a passport with 6 months validity, and to pay the visa fee online. You can apply directly through the official Saudi portal or use a trusted agency like Barkat Travel to ensure you avoid profession-mismatch rejections.
               </p>
            </div>

            <div className="space-y-8 text-brand-blue/80 text-lg leading-relaxed font-inter">
               <p>
                  Getting your visa is easier than ever. The older, complicated Umrah paper visas are mostly gone. Now, Qatar expats use the electronic tourist visa. Let's break down exactly what you need.
               </p>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">What You Will Need</h2>
               <p>
                  Do not apply until you have these four things ready on your computer:
               </p>
               <ul className="list-none space-y-4 my-6">
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                     <span><strong>Passport Copy:</strong> Scan the photo page. Must be valid for at least 6 more months.</span>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                     <span><strong>Qatar ID Copy:</strong> Scan front and back. Must be valid for at least 3 more months.</span>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                     <span><strong>White Background Photo:</strong> Must be a recent, clear digital passport photo. No glasses.</span>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mr-3 shrink-0" />
                     <span><strong>Bank Card:</strong> To pay the official MoFA fee (around 450 - 500 QAR).</span>
                  </li>
               </ul>

               {/* Personal Insights Snippet */}
               <div className="my-12 relative">
                  <Quote className="absolute -top-6 -left-6 w-16 h-16 text-brand-gold/10 rotate-180" />
                  <div className="bg-brand-blue p-8 rounded-[3rem] text-brand-white border border-brand-gold/20 shadow-xl relative z-10">
                     <span className="text-brand-gold text-[10px] uppercase font-bold tracking-widest mb-2 block">Visa Team's Warning</span>
                     <p className="text-lg italic leading-relaxed">
                        "Every week, we see 5 to 6 people walk into our Doha office who applied online themselves and got rejected. Why? Because the Saudi system is very strict about the 'Profession' listed on your Qatar ID. If you select the wrong category in the drop-down menu that doesn't exactly match your Arabic QID title, the system rejects you and you lose the fee instantly. Always double-check this step."
                     </p>
                     <p className="mt-4 font-bold text-brand-gold text-sm uppercase tracking-widest">— Faisal Ahmed, Visa Compliance Lead</p>
                  </div>
               </div>

               <h2 className="text-2xl font-bold text-brand-blue tracking-tight mt-12 mb-4">How To Apply</h2>
               <p>
                  You have two options: Do it yourself, or let an expert do it.
               </p>
               
               <ol className="list-decimal pl-6 space-y-4 my-6 font-bold text-brand-blue">
                  <li>
                     <strong>Option 1: The Official Website</strong> - Go to <a href="https://visa.visitsaudi.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold underline hover:text-brand-blue">visa.visitsaudi.com</a>. Create an account, fill in your details, and hope your profession is on the whitelist.
                  </li>
                  <li>
                     <strong>Option 2: Our Fast-Track Service</strong> - Send a WhatsApp picture of your QID and passport to Barkat Travel. We handle the Arabic translation, match your profession to the correct Saudi code, provide the mandatory health insurance, and send you the approved visa PDF in 24 hours. (<Link href="/visa/tourist-visa" className="text-brand-gold underline hover:text-brand-blue">Read about our Multiple Entry Visa Service here</Link>).
                  </li>
               </ol>

               <div className="bg-brand-beige/50 p-6 rounded-2xl border border-brand-gold/20 flex items-start mt-8">
                  <AlertTriangle className="w-6 h-6 text-brand-gold mr-4 shrink-0" />
                  <p className="text-sm">
                     <strong>Important Reminder:</strong> If you plan to drive using your new visa, make sure to read our core guide: <Link href="/blog/how-to-travel-doha-to-makkah-2026" className="font-bold underline text-brand-blue hover:text-brand-gold">How to travel from Doha to Makkah by road in 2026</Link>.
                  </p>
               </div>

               <AuthorProfile 
                  name="Faisal Ahmed"
                  role="Visa Compliance Lead"
                  bio="Faisal leads the central Visa Division at Barkat Travel. Over the past decade, his direct liaison with Saudi Ministry of Foreign Affairs networks has helped facilitate over 25,000 successful visa approvals for expatriates and citizens alike."
                  imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  credentials={["Saudi MoFA Enrolled Agent", "GCC Immigration Law", "15 Years Experience"]}
               />

            </div>

            <div className="mt-16 bg-brand-blue p-12 rounded-[3rem] text-center border-4 border-brand-gold/20 shadow-2xl relative overflow-hidden">
               <h3 className="text-2xl font-bold text-brand-gold mb-4 relative z-10">Don't Risk A Rejection</h3>
               <p className="text-brand-white/80 mb-8 max-w-lg mx-auto relative z-10">
                  Send us a quick WhatsApp with your QID. We will verify your eligibility for free in 5 minutes.
               </p>
               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-white transition-all shadow-xl relative z-10">
                  Verify My QID Now <ArrowRight className="ml-2 w-4 h-4" />
               </a>
            </div>

         </div>
      </section>
    </div>
  );
}
