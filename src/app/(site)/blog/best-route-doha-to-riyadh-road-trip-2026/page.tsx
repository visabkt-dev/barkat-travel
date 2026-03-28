import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { ArrowLeft, Clock, MapPin, CheckCircle, Shield, FileText } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import AuthorProfile from "@/components/AuthorProfile";
import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Best Route for Doha to Riyadh Road Trip 2026 | Barkat Travel",
  description: "Official guide to navigating the Salwa border crossing and mapping your highway journey from Qatar to the Saudi capital. Expert logistics tips for a safe trip.",
  alternates: {
    canonical: "/blog/best-route-doha-to-riyadh-road-trip-2026",
  },
};

export default function BlogPost() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0], "I am interested in hiring a private SUV for my trip from Doha to Riyadh.");

  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup 
         schemaType="Breadcrumb" 
         data={[
            { name: "Home", url: "https://barkattravel.com" },
            { name: "Blog", url: "https://barkattravel.com/blog" },
            { name: "Best Route for a Doha to Riyadh Road Trip", url: "https://barkattravel.com/blog/best-route-doha-to-riyadh-road-trip-2026" }
         ]} 
      />
      
      {/* Article Schema for Central Entity Targeting */}
      <SchemaMarkup 
         schemaType="Article" 
         data={{
            headline: "What is the best route for a Doha to Riyadh road trip in 2026?",
            description: "Understand the logistics of crossing the Salwa Border and navigating Highway 522 for a comfortable, efficient journey from Qatar to Saudi Arabia.",
            datePublished: "2026-02-20T08:00:00+00:00",
            dateModified: "2026-02-28T09:00:00+00:00",
            authorName: "Syed Muzammil",
            authorRole: "Senior Logistics Officer"
         }}
      />

      {/* FAQ Schema to capture AI Overviews for "Doha to Riyadh driving" */}
      <SchemaMarkup schemaType="FAQ" data={[
        {
          q: "What is the fastest driving route from Doha, Qatar to Riyadh, Saudi Arabia?",
          a: "The most efficient route is utilizing the Salwa Border Crossing, connecting to Saudi Highway 522, which bridges directly into Riyadh. The total drive time averages 6 to 7 hours depending on customs clearance speeds."
        },
        {
          q: "What documents are required to drive a Qatar-registered vehicle across the Salwa border?",
          a: "Drivers must present a valid Qatar ID, an approved Saudi e-Visa or Tourist Visa, original vehicle registration (Istimara), and GCC-compliant vehicle insurance."
        },
        {
          q: "Is it better to hire a private SUV or drive your own vehicle to Riyadh?",
          a: "Engaging a professional transport service provides elevated comfort and bypasses international insurance complexities, making it highly preferable for business travelers and families seeking a stress-free journey."
        }
      ]} />

      <div className="bg-brand-blue pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Link href="/blog" className="inline-flex items-center text-brand-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black font-inter tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
             What is the best route for a Doha to Riyadh road trip in 2026?
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-brand-white/80 text-sm font-medium">
             <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-brand-gold" /> Updated March 2026</span>
             <span className="flex items-center bg-brand-gold/10 px-3 py-1 rounded-full text-brand-gold"><Shield className="w-4 h-4 mr-2" /> Verified by Barkat Travel Fleet Management</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
         <div className="prose prose-lg prose-blue max-w-none">
            
            <p className="lead text-xl text-brand-blue/80 font-medium leading-relaxed mb-10">
               <strong>Immediate Answer:</strong> The optimal route from Doha, Qatar to Riyadh, Saudi Arabia involves crossing the Abu Samra / Salwa Border, merging onto Route 615, and taking the primary connection to Highway 522 directly into the Saudi capital. Covering approximately 580 kilometers, the journey typically requires about 6.5 hours of steady driving. While completely accessible to private motorists, leveraging a dedicated executive transport fleet ensures seamless customs navigation and optimal comfort.
            </p>

            {/* Video Placeholder */}
            <div className="bg-brand-beige rounded-[2rem] p-8 text-center border-2 border-dashed border-brand-gold/30 mb-12">
               <h3 className="text-lg font-bold text-brand-blue mb-2 font-inter tracking-tight">📹 Visual Guide</h3>
               <p className="text-sm text-brand-blue/60 mb-4">Check our Barkat Travel social media for video walkthroughs of the Salwa border crossing in a premium GMC Yukon.</p>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">Navigating the Salwa Border: What to Expect in 2026</h2>
            
            <p className="mb-6">
               The infrastructure between Qatar and Saudi Arabia has seen remarkable enhancements, positioning the Salwa Border as an extraordinarily streamlined checkpoint. However, prolonged delays occur when travelers fail to present meticulously organized documentation.
            </p>

            <div className="bg-white p-6 rounded-[2rem] border border-brand-gold/10 shadow-sm mb-10">
               <ul className="space-y-4 m-0 p-0 list-none">
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">Vehicle Registration (Istimara)</strong>
                        <span className="text-sm text-brand-blue/70">Ensure your vehicle registration is fully valid. Mortgaged vehicles may require a 'No Objection Certificate' (NOC) from the financing institution.</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">GCC Standard Insurance</strong>
                        <span className="text-sm text-brand-blue/70">Third-party insurance coverage within Saudi Arabia is mandatory and can be reliably secured online or directly at the border kiosk.</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <CheckCircle className="w-6 h-6 text-brand-gold mt-1 mr-4 flex-shrink-0" />
                     <div>
                        <strong className="block text-brand-blue">Digital Approvals</strong>
                        <span className="text-sm text-brand-blue/70">Your <Link href="/visa/tourist-visa" className="underline text-brand-blue font-bold">approved Saudi eVisa</Link> and passport should be accessible and visually clear.</span>
                     </div>
                  </li>
               </ul>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">Highway 522 Dynamics: Fueling and Rest Architecture</h2>

            <p className="mb-6">
               Once cleared by Saudi Customs, Highway 522 opens up a vast, exceptionally maintained desert stretch. The route is highly equipped for regular transit patterns, with fuel stations stationed at calculated intervals.
            </p>
            <p className="mb-8">
               Unlike the unpredictable travel patterns of past decades, modern SASCO stations ensure that fueling, high-grade espresso, and pristine rest facilities are consistently available. This robust infrastructure fundamentally alters the perception of long-distance driving in the region, promoting a highly positive and comfortable transit experience. 
               <em>(Note: We have observed that maintaining a steady pace helps mitigate fatigue, a key factor associated with successful long-distance travel.)</em>
            </p>

            {/* Agent Highlight (EEAT Feature & Source Context Pivot) */}
            <div className="bg-brand-blue text-white p-8 rounded-[2rem] my-10 border border-brand-gold/10 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <MapPin className="w-24 h-24 text-brand-gold" />
               </div>
               <h3 className="text-brand-gold font-bold font-inter tracking-tight mb-2 text-xl">Fleet Manager Field Notes: Enhancing the Journey</h3>
               <p className="text-sm leading-relaxed text-brand-white/90">
                  "While Highway 522 is a structural marvel, concentrating on the road for six hours diverts energy away from the purpose of your trip—whether it's an executive meeting in Riyadh's King Abdullah Financial District or exploring Boulevard City. Our corporate clients overwhelmingly prefer assigning the driving to our professionally trained chauffeurs, utilizing the transit time for mobile productivity in the rear cabin of our customized GMC Yukons."
               </p>
               <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mt-4">— Syed Muzammil, Senior Logistics Officer</p>
            </div>

            <h2 className="text-3xl font-black text-brand-blue font-inter tracking-tight mt-12 mb-6">Why High-Net-Worth Individuals Choose Executive Transport</h2>
            
            <p className="mb-6">
               The logistical burden of ensuring international insurance validity, navigating unmapped detours, and absorbing driving fatigue shifts completely when you utilize a structured <Link href="/transport" className="font-bold underline text-brand-blue hover:text-brand-gold">Executive Transport Service</Link>.
            </p>

            <ul className="list-none pl-0 space-y-4 mb-12 text-brand-blue/80 font-medium">
               <li className="flex items-center bg-brand-beige p-4 rounded-xl border border-brand-gold/10">
                  <Shield className="w-5 h-5 text-brand-gold mr-3" />
                  <span><strong>Zero Border Anxiety:</strong> Our chauffeurs handle transit paperwork on your behalf.</span>
               </li>
               <li className="flex items-center bg-brand-beige p-4 rounded-xl border border-brand-gold/10">
                  <Clock className="w-5 h-5 text-brand-gold mr-3" />
                  <span><strong>Uninterrupted Time:</strong> Six hours recovered for business calls, preparation, or restful sleep.</span>
               </li>
               <li className="flex items-center bg-brand-beige p-4 rounded-xl border border-brand-gold/10">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-3" />
                  <span><strong>Premium Vehicle Integrity:</strong> The journey is undertaken in meticulously maintained wide-body SUVs designed for expansive comfort.</span>
               </li>
            </ul>

            <AuthorProfile 
               name="Syed Muzammil"
               role="Senior Logistics Officer"
               bio="Syed oversees Barkat Travel's extensive high-end vehicle fleet. His operational oversight guarantees that every border transit adheres strictly to regulatory standards, delivering a seamless experience for over 1,500 corporate clients annually."
               imageUrl="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80"
               credentials={["Cross-Border Logistics Planner", "Corporate Fleet Administrator", "12 Years GCC Experience"]}
            />

         </div>

         <div className="mt-16 bg-brand-blue p-12 rounded-[3rem] text-center border-4 border-brand-gold/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
            <div className="relative z-10">
               <h3 className="text-3xl font-black font-inter tracking-tight text-brand-gold mb-4">Reclaim Your Travel Time.</h3>
               <p className="text-white/80 mb-8 max-w-lg mx-auto">Skip the driving fatigue and international insurance hurdles. Book a dedicated luxury SUV and a professional driver for your Doha to Riyadh journey.</p>
               <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-gold text-brand-blue px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  Book A Private SUV
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}
