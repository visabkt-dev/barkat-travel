import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { ArrowRight, Clock, User, Calendar } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Official Travel Blog | Umrah Tips & GCC Travel | Barkat Travel",
  description: "Latest news, Umrah travel tips, and GCC transport updates. Official blog of Barkat Travel, Doha.",
  alternates: {
    canonical: "/blog",
  },
};

const POSTS = [
  {
    title: "How to travel from Doha to Makkah in 2026?",
    slug: "how-to-travel-doha-to-makkah-2026",
    excerpt: "Everything you need to know about the Salwa border, rest stops, and Umrah requirements for Qatar residents.",
    date: "March 10, 2026",
    category: "Transport Guide",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80",
    advisor: "Syed Muzammil",
    credential: "Licensed Umrah Specialist"
  },
  {
    title: "How to get a Saudi Tourist Visa for GCC residents in 2026?",
    slug: "how-to-get-saudi-tourist-visa-gcc-residents-2026",
    excerpt: "The complete checklist to secure a 1-year multiple entry visa from Qatar without MOFA rejection.",
    date: "March 15, 2026",
    category: "Visa Advice",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
    advisor: "Faisal Ahmed",
    credential: "Visa Compliance Lead"
  },
  {
    title: "How to apply for an Umrah visa as a Qatar resident?",
    slug: "how-to-apply-umrah-visa-qatar",
    excerpt: "Step-by-step guide on documents, fees, and processing times for various nationalities living in Qatar.",
    date: "Feb 28, 2026",
    category: "Visa Advice",
    image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&q=80",
    advisor: "Faisal Ahmed",
    credential: "Visa Compliance Lead"
  },
  {
    title: "What is the best route for a Doha to Riyadh road trip in 2026?",
    slug: "best-route-doha-to-riyadh-road-trip-2026",
    excerpt: "Navigate the Salwa border crossing and map your highway journey from Qatar to Saudi capital with expert driver tips.",
    date: "Feb 20, 2026",
    category: "Transport Guide",
    image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80",
    advisor: "Syed Muzammil",
    credential: "Senior Logistics Officer"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-brand-beige min-h-screen">
      <SchemaMarkup 
         schemaType="Breadcrumb" 
         data={[
            { name: "Home", url: "https://barkattravel.com" },
            { name: "Blog", url: "https://barkattravel.com/blog" }
         ]} 
      />
      <SchemaMarkup schemaType="Blog" data={POSTS} />
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block ">Verified Knowledge Center</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-4  underline decoration-brand-gold/20 decoration-4 underline-offset-[16px]">The Travel Advisor</h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto  leading-relaxed">Genuine insights, technical travel data, and expert-verified updates for your GCC journeys.</p>
        </div>
      </section>

      {/* Trending Facts Section */}
      <section className="py-12 bg-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-brand-beige/20 rounded-[3rem] border border-brand-gold/10 shadow-inner">
               <div className="lg:w-1/3">
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-2 ">March 2026 Quick Stats</h3>
                  <p className="text-brand-blue/60 text-xs ">Live travel metrics for your reference.</p>
               </div>
               <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  <div className="bg-white p-4 rounded-2xl border border-brand-gold/5 shadow-sm text-center">
                     <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1">Visa Processing</p>
                     <p className="text-sm font-bold text-brand-blue">24-48 Hours</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-brand-gold/5 shadow-sm text-center">
                     <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1">Border Wait</p>
                     <p className="text-sm font-bold text-brand-blue">30-45 Mins</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-brand-gold/5 shadow-sm text-center">
                     <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1">Fuel Price (KSA)</p>
                     <p className="text-sm font-bold text-brand-blue">2.18 SAR/L</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-brand-gold/5 shadow-sm text-center">
                     <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-1">Exchange Rate</p>
                     <p className="text-sm font-bold text-brand-blue">Fixed 1:1 QAR/SAR</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {POSTS.map((post, index) => (
              <div key={post.title} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col lg:flex-row border border-brand-gold/10 hover:border-brand-gold/40">
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-6 left-6 bg-brand-gold text-brand-blue text-[10px] font-bold uppercase py-1.5 px-3 rounded-full">
                      {post.category}
                   </div>
                </div>
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-6 text-[10px] uppercase font-bold text-brand-blue/30 tracking-widest mb-4 whitespace-nowrap overflow-hidden">
                     <span className="flex items-center"><Calendar className="w-3 h-3 mr-2 text-brand-gold" /> {post.date}</span>
                     <span className="flex items-center  text-brand-gold/80 bg-brand-gold/5 px-2 py-1 rounded-md border border-brand-gold/10">
                        <User className="w-3 h-3 mr-2" /> Verified by {post.advisor}
                     </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-blue font-inter tracking-tight mb-4 group-hover:text-brand-gold transition-colors leading-tight">{post.title}</h2>
                  <p className="text-brand-blue/60 mb-8  text-sm leading-relaxed">{post.excerpt}</p>
                  <Link href={post.slug ? `/blog/${post.slug}` : "#"} className="font-bold text-brand-blue flex items-center group-hover:text-brand-gold transition-colors underline decoration-brand-gold decoration-2 underline-offset-8">
                     Read Full Article
                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
