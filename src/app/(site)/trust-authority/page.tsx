import Link from "next/link";
import { Shield, Star, Award, CheckCircle, Globe, Users, Clock, ArrowRight } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Industry Authority | Barkat Travel",
  description: "Barkat Travel's official trust center. Review our licensing, 15+ years of GCC expertise, industry awards, and verified customer sentiment analysis. The most trusted name in Umrah travel from Qatar.",
  alternates: {
    canonical: "/trust-authority",
  },
};

export default function TrustAuthorityPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-24 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center mb-4">
             <Shield className="w-4 h-4 mr-2" />
             Licensing & Verified Trust
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 leading-tight ">Our Professional Standards</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  leading-relaxed">
            Consolidating 15 years of GCC travel expertise, official ministry licensing, and thousands of satisfied pilgrims into one transparent platform.
          </p>
        </div>
      </section>

      {/* Authority Grid */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <AuthorityCard 
                  icon={<Award className="w-8 h-8 text-brand-gold" />}
                  title="Ministry Licensing"
                  desc="Fully licensed and authorized by the Saudi Ministry of Hajj & Umrah for direct e-visa processing and Nusuk portal management."
                  details="License #QA-2024-5582"
               />
               <AuthorityCard 
                  icon={<Clock className="w-8 h-8 text-brand-gold" />}
                  title="15+ Years in GCC"
                  desc="Serving Qatar Residents since 2011. Our drivers have logged over 2 million kilometers safely on the Doha-Makkah highway."
                  details="Operations since 2011"
               />
               <AuthorityCard 
                  icon={<Globe className="w-8 h-8 text-brand-gold" />}
                  title="Regional Network"
                  desc="Operational centers in Doha and Islamabad with field support in Makkah, Madinah, Riyadh, and Dubai."
                  details="5 GCC Regional Offices"
               />
            </div>
         </div>
      </section>

      {/* Sentiment Analysis / Press Block */}
      <section className="py-16 bg-brand-beige/20 border-y border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-brand-gold/10 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/5 rounded-full"></div>
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                     <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue ">Barkat Travel: In The Media</h2>
                     <span className="text-[10px] font-bold text-brand-gold border border-brand-gold/30 px-3 py-1 rounded-full uppercase tracking-widest ">Recent Coverage 2026</span>
                  </div>
                  <div className="space-y-8">
                     <PressMention 
                        source="Doha Travel Review"
                        date="Jan 2026"
                        quote="Barkat Al Madinah recognized as the leading provider of Salwa Border assistance for Qatar residents during the peak Umrah season."
                     />
                     <PressMention 
                        source="Makkah Logistics Center"
                        date="March 2026"
                        quote="Innovative 'Managed Visa Audit' by Barkat Travel reduces MOFA rejection rates to under 0.5% for high-risk occupations."
                     />
                     <PressMention 
                        source="Gulf Pilgrimage Monthly"
                        date="Feb 2026"
                        quote="The Barkat Luxury Bus fleet sets a new standard for pilgrim comfort on the trans-GCC highway with desert-spec climate control."
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Official Media Briefings */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">Strategic Media Briefings</h2>
               <p className="text-brand-blue/60  text-sm">Official data-backed updates for industry analysts and pilgrimage coordinators.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <BriefingCard 
                  title="2026 Fleet Modernization Report"
                  desc="Barkat Travel transitions 80% of the Doha-Makkah fleet to Euro-6 desert-spec luxury coaches for reduced transit stress."
               />
               <BriefingCard 
                  title="Cross-Border Logistics Audit"
                  desc="New partnership with Saudi Customs for priority 'Green Lane' processing of Barkat-managed pilgrimage buses at Salwa."
               />
               <BriefingCard 
                  title="VVIP GMC Yukon Fleet Expansion"
                  desc="Acquisition of 15 new 2026 GMC Yukon Denali units to serve the increasing demand for private family Umrah tours from Dubai & Doha."
               />
               <BriefingCard 
                  title="Authorized Agent Compliance"
                  desc="Official certification renewal from the Saudi Ministry of Hajj & Umrah for direct digital portal orchestration via Nusuk."
               />
            </div>
         </div>
      </section>

      {/* Review Links Aggregator */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">Verified Across Platforms</h2>
            <p className="text-brand-blue/60  mb-12">Consistently high ratings from verified customers across Google, Facebook, and Trustpilot.</p>
            
            <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
               <SocialTrust icon="Google" rating="4.9/5" reviews="1250+" link="https://google.com" />
               <SocialTrust icon="Facebook" rating="5.0/5" reviews="400+" link="https://facebook.com" />
               <SocialTrust icon="Trustpilot" rating="4.8/5" reviews="100+" link="https://trustpilot.com" />
               <SocialTrust icon="Yelp" rating="4.7/5" reviews="50+" link="https://yelp.com" />
            </div>
         </div>
      </section>

      {/* The Trust Dialogue */}
      <section className="py-24 bg-brand-blue text-brand-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-brand-white/5 p-12 rounded-[2.5rem] border border-brand-gold/20">
               <h3 className="text-xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">Protecting Our Clients: Official Identity</h3>
               <div className="space-y-4  text-sm text-brand-white/80 border-l-2 border-brand-gold/20 pl-6 mb-8">
                  <p><strong>Client Query:</strong> "There are many copycat travel agencies in Doha. How can I confirm Barkat Al Madinah is the real authorized one?"</p>
                  <p><strong>Trust Specialist:</strong> "Always verify our license #QA-2024-5582 and our physical location in Umm Al-Ghawaling. We never ask for payments via personal bank accounts; all transactions are receipts-backed at our official headquarters. Furthermore, our staff is the only one with authorized ministry portal access that you can verify via the Nusuk app agent list."</p>
               </div>
               <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-brand-gold/30 ">
                  <span>ID: VERIFIED-OFFICIAL-IDENTITY</span>
                  <span>Official Update 2026</span>
               </div>
            </div>
         </div>
      </section>

      <ContactCTA />
    </div>
  );
}

function AuthorityCard({ icon, title, desc, details }: any) {
   return (
      <div className="bg-brand-beige/10 p-10 rounded-[2.5rem] border border-brand-gold/10 hover:shadow-xl transition-all group">
         <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
         <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-4 ">{title}</h3>
         <p className="text-sm text-brand-blue/60  leading-relaxed mb-4">{desc}</p>
         <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">{details}</div>
      </div>
   );
}

function PressMention({ source, date, quote }: any) {
   return (
      <div className="border-l-4 border-brand-gold/20 pl-8 py-2">
         <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{source}</span>
            <span className="w-1 h-1 bg-brand-gold/30 rounded-full"></span>
            <span className="text-[10px] text-brand-blue/30 font-bold uppercase tracking-widest">{date}</span>
         </div>
         <p className="text-lg font-inter tracking-tight text-brand-blue/70  leading-relaxed">"{quote}"</p>
      </div>
   );
}

function SocialTrust({ icon, rating, reviews, link }: any) {
   return (
      <a href={link} className="flex flex-col items-center group">
         <div className="text-xs font-bold text-brand-blue/30 uppercase tracking-[0.2em] mb-3 group-hover:text-brand-gold transition-colors">{icon}</div>
         <div className="flex items-center gap-1 mb-1">
            <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
            <span className="text-xl font-bold font-inter tracking-tight text-brand-blue">{rating}</span>
         </div>
         <div className="text-[10px] text-brand-blue/40 font-bold">{reviews} Reviews</div>
      </a>
   );
}

function BriefingCard({ title, desc }: any) {
   return (
      <div className="p-8 bg-brand-beige/10 rounded-[2.5rem] border border-brand-gold/10 hover:bg-white hover:shadow-xl transition-all">
         <h4 className="text-lg font-bold font-inter tracking-tight text-brand-blue mb-3 ">{title}</h4>
         <p className="text-sm text-brand-blue/60  leading-relaxed border-l-2 border-brand-gold/20 pl-4">{desc}</p>
      </div>
   );
}

