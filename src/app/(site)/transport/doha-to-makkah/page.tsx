import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import PageCTA from "@/components/PageCTA";
import TransportForm from "@/components/TransportForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Bus, Clock, Shield, MapPin, CheckCircle, MessageSquare, ArrowRight, Star, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doha to Makkah Taxi | Daily Luxury Transport | Barkat Travel",
  description: "Doha to Makkah luxury transport service. Book private GMC Yukons or luxury buses with priority border clearance at Abu Samra. Direct hotel drop-off and expert pilgrimage support.",
  keywords: ["Doha to Makkah taxi", "Qatar to Makkah bus", "private GMC Doha to Makkah", "Umrah transport Qatar", "Barkat Travel Makkah service"],
  alternates: {
    canonical: "/transport/doha-to-makkah",
  },
};

export default function DohaToMakkahPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  const faqs = [
    {
      q: "How long does the bus journey from Doha to Makkah take including border wait times in 2026?",
      a: "The total travel time from Doha to Makkah typically ranges between 14 to 16 hours. This estimate includes 45-60 minutes for exit/entry processing at the Abu Samra (Qatar) and Salwa (Saudi Arabia) borders, plus three scheduled 20-minute breaks for prayers and light refreshments at authorized rest areas."
    },
    {
      q: "What are the specific document requirements for Qatar residents traveling to Makkah by road via Salwa?",
      a: "Qatar residents must present a valid passport (minimum 6 months validity), a printed Umrah e-visa, a confirmed Nusuk app prayer permit, and their original Qatar ID. Our logistics team handles the manifest preparation 24 hours before departure to ensure priority processing at the manifest desk."
    },
    {
      q: "Is it better for a family with children to book a private GMC Yukon or a luxury coach for the Makkah trip?",
      a: "For families with more than 4 members, we recommend the private GMC Yukon. It offers significantly more luggage flexibility, direct door-to-door transit which eliminates the 1-hour Doha terminal wait, and the ability to request unscheduled stops for children, making the 1,400km journey much more manageable."
    },
    {
      q: "What are the best hotels near Haram for families?",
      a: "We recommend hotels on Ibrahim Al Khalil Road for easy pedestrian access to the Makkah Clock Tower and King Abdulaziz Gate. Our transport service offers direct drop-offs at these locations to minimize walking distance for elders and children."
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Qatar to Saudi Arabia | <span className="opacity-80 font-normal">Last Updated March 2026</span></span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 leading-tight">Doha to Makkah Transport</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto ">
            Luxury buses and private VVIP transport for Umrah pilgrims and visitors.
          </p>
        </div>
      </section>

      {/* NLP-Optimized PAS Section (Problem, Agitate, Solution) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
           <div className="mb-8 text-center">
             <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">The Journey</span>
             <h2 className="text-3xl font-bold text-brand-blue mb-4 mt-2">Planning Your Umrah Journey from Qatar to Saudi Arabia</h2>
           </div>
           
           <div className="text-brand-blue/80 space-y-6 text-base leading-relaxed">
             <div>
               <h3 className="text-lg font-bold text-brand-blue mb-2">The Challenge of Cross-Border Logistics</h3>
               <p>
                 Traveling the <strong>1,400km road distance from Qatar to Saudi Arabia</strong> for Umrah can be overwhelming. Families often struggle with navigating the <strong>Abu Samra and Salwa border crossing</strong>, dealing with unpredictable wait times, and ensuring their <strong>Saudi multiple-entry tourist visa</strong> or <strong>Umrah e-visa requirements</strong> are perfectly aligned with border control protocols.
               </p>
             </div>
             
             <div>
               <h3 className="text-lg font-bold text-brand-blue mb-2">Why Standard Transport Falls Short</h3>
               <p>
                 Choosing unverified transport often leads to unexpected delays. Without a pre-approved digital manifest, you risk spending hours at the border. Furthermore, standard transit doesn't always cater to spiritual necessities, such as stopping at the correct <strong>Miqat (Qarn al-Manazil in Taif)</strong> for pilgrims to properly don their <strong>Ihram clothing</strong> before entering the sacred boundaries of Makkah.
               </p>
             </div>

             <div>
               <h3 className="text-lg font-bold text-brand-blue mb-2">The Barkat Travel Solution</h3>
               <p>
                 Whether you choose our luxury VIP coach or a private VVIP GMC Yukon, we handle the entire logistical pipeline. We prepare your border manifest in advance, guide you through <strong>Nusuk app prayer permit</strong> registration, and ensure scheduled stops at the Miqat. Our service concludes with a <strong>direct hotel drop-off</strong> near <strong>Masjid Al Haram</strong>, allowing you to begin your spiritual journey with complete peace of mind.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Intro & Booking Form Grid (Mini Homepage Style) */}
      {/* Transport Comparison Table */}
      <section className="py-24 bg-brand-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Doha to Makkah Transport Analytics</h2>
               <p className="text-brand-blue/60 text-sm ">Direct technical data for service comparison.</p>
            </div>
            
            <div className="overflow-x-auto rounded-[3rem] border border-brand-gold/10 shadow-sm bg-white p-1">
               <table className="w-full text-left rounded-[2.8rem] overflow-hidden">
                  <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-[0.2em]">
                     <tr>
                        <th className="p-8">Fleet Category</th>
                        <th className="p-8">Transit Time</th>
                        <th className="p-8">Privacy Level</th>
                        <th className="p-8">Fare Comparison</th>
                     </tr>
                  </thead>
                  <tbody className="text-sm text-brand-blue/80">
                     <tr className="border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Luxury VIP Coach</td>
                        <td className="p-8">15-16 Hours</td>
                        <td className="p-8 text-brand-gold font-bold">Shared (45/50)</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Best Value Umrah</td>
                     </tr>
                     <tr className="border-b border-brand-gold/5 bg-brand-gold/5 transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Private GMC Yukon</td>
                        <td className="p-8">12-13 Hours</td>
                        <td className="p-8 text-brand-gold font-bold">High (Up to 7)</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">VVIP Family Choice</td>
                     </tr>
                     <tr className="transition-colors hover:bg-brand-gold/10">
                        <td className="p-8 font-bold">Toyota Hiace Van</td>
                        <td className="p-8">14 Hours</td>
                        <td className="p-8 text-brand-gold font-bold">Private (Up to 12)</td>
                        <td className="p-8 bg-brand-gold/5  text-[10px] font-bold">Economic Group Stay</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Intro & Booking Form Grid (Mini Homepage Style) */}
      <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               <div className="space-y-8">
                  <div className="inline-flex items-center space-x-2 text-brand-gold bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                     <Star className="w-4 h-4 fill-current" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">#1 Transport Provider in Doha</span>
                  </div>
                  
                  {/* Highlighted Insight */}
                  <FeaturedSnippet
                    question="How do I book transport from Doha to Makkah?"
                    answer="To book transport from Doha to Makkah, select your vehicle type (Shared Luxury Bus or Private GMC Yukon), submit your Umrah visa and Qatar ID for the border manifest, and confirm your seat via WhatsApp or at our Doha HQ. Barkat Travel provides 24/7 border logistics support at Abu Samra."
                    example="If you are traveling with a family of 5, we recommend booking a private GMC Yukon 24 hours in advance and sending us your Umrah visas via WhatsApp so we can prepare the Salwa border manifest early."
                  />

                  {/* GEO Strategy 1 & 5: The Road Dialogue (Addressing Anxiety) */}
                  <div className="bg-brand-blue p-10 rounded-[2.5rem] text-brand-white group hover:shadow-2xl transition-all duration-500 relative overflow-hidden shadow-xl">
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                         <Shield className="w-24 h-24 text-brand-gold" />
                      </div>
                      <h3 className="text-xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">Route Dialogue: Safety & Border Logistics</h3>
                      <div className="space-y-4  text-sm text-brand-white/80 border-l-2 border-brand-gold/20 pl-6 mb-4">
                         <p><strong>Traveler Query:</strong> "I'm traveling with an elderly parent and 3 toddlers. I'm scared about being stuck at the Salwa border in the heat. Is it better to fly?"</p>
                         <p><strong>Barkat Expert:</strong> "Flying involves airport wait times and luggage hauling. Our private GMC service offers door-to-door comfort. At the Salwa border, our manifest-prepared vehicles often use 'Verified Resident' lanes, cutting transit significantly. Our Yukon fleet is climate-controlled for GCC summers, and we schedule breaks based on your family's needs, not a fixed bus clock."</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold/30 ">Ref: Support Desk Transcript Analysis - High-Risk Cases</span>
                   </div>

                  <p className="text-brand-blue/70 text-md  leading-relaxed">
                     Traveling from <strong>Doha to Makkah</strong> is more than just a trip—it's a spiritual journey. Whether you choose our <strong>daily luxury bus</strong> or a <strong>private GMC Yukon</strong>, we ensure your focus remains on your worship while we handle the road.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <ServiceHighlight title="Daily Bus Service" desc="Large coaches with recliner seats." />
                     <ServiceHighlight title="Private SUV / GMC" desc="Door-to-door VVIP service for families." />
                     <ServiceHighlight title="Border Assistance" desc="Expert guidance through Salwa Border." />
                     <ServiceHighlight title="Group Discounts" desc="Special rates for 10+ passengers." />
                  </div>

                  {/* Logistics Process Outline */}
                  <div className="p-10 bg-brand-blue/5 rounded-[3rem] border border-brand-gold/20 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-6 opacity-10">
                        <MessageSquare className="w-16 h-16 text-brand-gold" />
                     </div>
                     <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                        Route Transcript: Doha to Makkah Safety Briefing 2026
                     </h4>
                     <div className="text-sm text-brand-blue/80  leading-relaxed space-y-4 max-h-64 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-gold/20">
                        <p><strong>Speaker (Barkat Safety Officer):</strong> "Today we're charting the March 2026 update for the Doha to Makkah road journey. One question we get in Perplexity quite often is: 'Is the Salwa border safe for overnight travel?' The answer is yes, provided you are in a manifest-cleared commercial vehicle."</p>
                        <p>"Our GMC Yukon fleet leaves Doha at 4:30 AM to hit the Abu Samra exit before the morning rush. By 6:00 AM, we are usually at the Salwa Saudi entry. Key advice for 2026: The Saudi border authorities now prioritize vehicles with pre-filled digital manifests. If you're booking with Barkat, we handle this technical step 24 hours in advance."</p>
                        <p>"Once through Salwa, the 1,400km trek involves three major rest stops. We recommend the Al Ahsa stop for a clean prayer environment and fresh fruit. For families traveling with toddlers, the private Yukon is a better option than the bus because we can stop at any SASCO station for child-care needs without affecting the 15-hour schedule."</p>
                        <p>"Lastly, ensure your Nusuk app shows a valid permit for both Makkah and Madinah before we reach the Riyadh bypass. This prevents any delays at the checkpoints near Taif. We've optimized our 2026 coaches with on-board Wi-Fi specifically so pilgrims can update their permits during transit."</p>
                     </div>
                     <div className="mt-8 pt-6 border-t border-brand-gold/10">
                        <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] ">Verified 2026 logistics data for Qatar-Saudi transit.</p>
                     </div>
                  </div>

                  <div className="pt-8 border-t border-brand-gold/10">
                     <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4  underline decoration-brand-gold/30 underline-offset-8">Critical Entity Links:</h4>
                     <div className="flex flex-wrap gap-4">
                        <InternalLink href="/visa/umrah-visa/" text="Nusuk Portal Compliance" />
                        <InternalLink href="/transport/" text="Salwa Border Manifest" />
                        <InternalLink href="/hotels/" text="Ibrahim Al Khalil Rd Hotels" />
                     </div>
                  </div>
               </div>

               <div className="sticky top-32">
                  <TransportForm defaultRoute="Doha to Makkah Transport" />
               </div>
            </div>
         </div>
      </section>

      {/* The Process Section (Added per SEO Video Guide) */}
      <section className="py-24 bg-brand-beige/30">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue">Our Booking Process</h2>
               <p className="text-brand-blue/60  mt-2">Simple 3-step process to confirm your seat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <ProcessCard 
                 number="01" 
                 title="Select Service" 
                 desc="Choose between sharing bus or private transport based on your family size and budget." 
               />
               <ProcessCard 
                 number="02" 
                 title="Submit Documents" 
                 desc="Provide your visa and ID details via WhatsApp or our office for border manifest preparation." 
               />
               <ProcessCard 
                 number="03" 
                 title="Recieve Confirmation" 
                 desc="Get your pickup time and seat number. Our driver will coordinate with you for the journey." 
               />
            </div>
         </div>
      </section>

      {/* Why sets us apart (Social Proof & Specialist Bio) */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-center mb-20">
              <StatItem value="1500+" label="Pilgrims Weekly" />
              <StatItem value="50+" label="Luxury Fleet" />
              <StatItem value="24/7" label="Border Support" />
              <StatItem value="100%" label="Safety Record" />
           </div>

           {/* AI-SEO Quality Pillar: Route Specialist (Strategy 2) */}
           <div className="max-w-4xl mx-auto bg-white/5 border border-brand-gold/20 p-10 rounded-[3rem] backdrop-blur-sm">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-gold">
                     <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" alt="Route Specialist" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                     <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">KSA Route Specialist</span>
                     <h3 className="text-xl font-bold font-inter tracking-tight text-brand-gold  mb-2">"Safety is our number one priority on the 15-hour trek."</h3>
                     <p className="text-brand-white/60 text-sm  leading-relaxed">
                        <strong>Shakeel Ahmed</strong> has been lead driver for the Doha-Makkah route for 9 years. He specializes in night-driving safety and Salwa border logistics, ensuring our passengers arrive refreshed and on schedule for their spiritual rites.
                     </p>
                     <p className="text-xs font-bold text-brand-gold mt-4 ">— Shakeel Ahmed, Senior Route Captain</p>
                  </div>
               </div>
           </div>
        </div>
      </section>

      {/* Makkah Local Insights */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue tracking-tight ">Makkah Pilgrimage Insights</h2>
               <p className="text-brand-blue/60 mt-2 ">Essential local knowledge for your spiritual journey</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <InsightCard 
                  title="Haram Proximity" 
                  desc="We prioritize drop-offs near the Central Area (Markazia) for easy access to King Abdulaziz Gate and King Fahd Gate."
               />
               <InsightCard 
                  title="Ziarat Tours" 
                  desc="Ask our drivers about local Ziarat tours to Jabal al-Nour (Hira Cave), Jabal Thawr, and the plains of Arafat."
               />
               <InsightCard 
                  title="Haramain Train Link" 
                  desc="If you are traveling onward to Madinah, we provide seamless transfers to the Makkah Haramain High-Speed Railway Station."
               />
            </div>
         </div>
      </section>

      {/* Topic Domination: Route Technical Logistics (Strategy 3) */}
      <section className="py-24 bg-brand-white border-y border-brand-gold/10 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 px-4">
               <div className="max-w-xl text-left">
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block ">Expert Resources</span>
                  <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue mb-4">Doha to Makkah Route Technical Logistics</h2>
                  <p className="text-brand-blue/60  leading-relaxed">Everything you need to know about the 1,400km journey.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="p-8 bg-brand-blue rounded-[2.5rem] text-brand-white border border-brand-gold/20 hover:scale-105 transition-transform">
                  <h4 className="text-brand-gold font-bold font-inter tracking-tight mb-4 ">Fuel & Rest Stop Plan</h4>
                  <p className="text-xs text-brand-white/70 leading-relaxed mb-4">Our fleet stops at high-quality service stations every 400km. Primary stops include Al Ahsa and various points along the Riyadh-Makkah highway, offering clean prayer facilities and 24-hour food courts.</p>
                  <span className="text-[10px] font-bold text-brand-gold underline decoration-brand-gold/20">Ref: Logistics Map #DMM-01</span>
               </div>
               
               <div className="p-8 bg-brand-white rounded-[2.5rem] border border-brand-gold/10 hover:shadow-xl transition-all">
                  <h4 className="text-brand-blue font-bold font-inter tracking-tight mb-4 ">Salwa Border Fees</h4>
                  <p className="text-xs text-brand-blue/60 leading-relaxed mb-4">Passengers should account for the Saudi border insurance fee (approx. 100-120 SAR) which is mandatory for all private vehicles. Our GMC Yukon service includes guidance on where to pay this quickly to avoid lane delays.</p>
                  <span className="text-[10px] font-bold text-brand-blue/30 uppercase tracking-widest ">Technical Spec: Border Protocol</span>
               </div>

               <div className="p-8 bg-brand-white rounded-[2.5rem] border border-brand-gold/10 hover:shadow-xl transition-all">
                  <h4 className="text-brand-blue font-bold font-inter tracking-tight mb-4 ">Luggage Dimensions</h4>
                  <p className="text-xs text-brand-blue/60 leading-relaxed mb-4">Luxury coaches allow 2 large suitcases (23kg each) + 1 carry-on. Private GMC Yukons offer up to 600 liters of storage space, ideal for large families carrying Zem Zem water on the return journey.</p>
                  <span className="text-[10px] font-bold text-brand-blue/30 uppercase tracking-widest ">Ref: Cargo Policy V2</span>
               </div>

               <div className="p-8 bg-brand-blue rounded-[2.5rem] text-brand-white border border-brand-gold/20 hover:scale-105 transition-transform">
                  <h4 className="text-brand-gold font-bold font-inter tracking-tight mb-4 ">Driver Shift Protocol</h4>
                  <p className="text-xs text-brand-white/70 leading-relaxed mb-4">For the Doha-Makkah route, we rotate drivers at the 8-hour mark or ensure mandatory 1-hour sleep breaks for private chauffeured trips. Safety sensors (Lane assist, GPS) are active 24/7.</p>
                  <span className="text-[10px] font-bold text-brand-gold underline decoration-brand-gold/20">Source: HR Safety Manual</span>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section (Crucial for Local SEO) */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                 <HelpCircle className="w-6 h-6 text-brand-gold" />
              </div>
              <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue underline decoration-brand-gold/30 underline-offset-8">Frequently Asked Questions</h2>
           </div>
           
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Book Your Doha to Makkah Journey"
        description="Request a quote for your Doha–Makkah transport. Daily departures with comfortable GMC and bus services."
        primaryBtn={{ text: "Get Quote Now", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />

      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Article" 
        data={{
          title: "Doha to Makkah Bus & Private Transport | 2026 Route Guide",
          excerpt: "How to travel from Doha to Makkah in 2026? Book luxury daily bus services or private VVIP GMC Yukons with door-to-door transit.",
          image: "https://barkattravel.com/logo.png",
          date: "2026-03-27",
          advisor: "Shakeel Ahmed"
        }} 
      />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Doha to Makkah Transport",
          description: "Luxury bus and private GMC transport from Doha to Makkah. Daily service with border assistance at Salwa.",
          price: "250",
          currency: "QAR"
        }} 
      />
    </div>
  );
}

function ServiceHighlight({ title, desc }: any) {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-5 h-5 text-brand-gold mr-3 mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-brand-blue text-sm uppercase">{title}</h4>
        <p className="text-brand-blue/60 text-xs mt-1">{desc}</p>
      </div>
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

function ProcessCard({ number, title, desc }: any) {
  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all">
       <div className="text-4xl font-bold font-inter tracking-tight text-brand-gold/20 mb-4">{number}</div>
       <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">{title}</h4>
       <p className="text-brand-blue/60 text-sm ">{desc}</p>
    </div>
  );
}

function StatItem({ value, label }: any) {
  return (
    <div>
       <div className="text-3xl md:text-4xl font-bold font-inter tracking-tight text-brand-gold mb-2">{value}</div>
       <div className="text-xs uppercase font-bold tracking-[0.2em] text-brand-white/40">{label}</div>
    </div>
  );
}

function InsightCard({ title, desc }: any) {
  return (
    <div className="p-8 bg-brand-beige/20 rounded-3xl border border-brand-gold/10 hover:border-brand-gold transition-colors">
       <h4 className="font-bold text-brand-blue font-inter tracking-tight mb-3 uppercase tracking-widest text-xs ">{title}</h4>
       <p className="text-sm text-brand-blue/70  leading-relaxed">{desc}</p>
    </div>
  );
}


