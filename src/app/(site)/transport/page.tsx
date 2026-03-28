"use client";

import { motion } from "framer-motion";
import { ROUTES, CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Bus, Car, Users, Shield, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";
import FeaturedSnippet from "@/components/FeaturedSnippet";

export default function TransportPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-beige min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block underline decoration-brand-gold/30 underline-offset-8">Authorized GCC Transport Partner</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">Luxury GCC Transport Network</h1>
          <p className="text-brand-white/80 max-w-2xl mx-auto text-lg  leading-relaxed">
            Safe, reliable, and comfortable. We provide professional cross-border transport between Qatar, Saudi Arabia, and the UAE for families and groups.
          </p>
        </div>
      </section>

      {/* Professional Transport Categories */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
               <div className="border-l-4 border-brand-gold/20 pl-8">
                  <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-4">Transport from Qatar to Makkah: Route Overview</h2>
                  <p className="text-lg text-brand-blue/70 leading-relaxed ">
                     Traveling from <strong>Doha to Makkah</strong> involves a 1,400-kilometer road journey through the eastern and central regions of Saudi Arabia. Most pilgrims prefer road transport because it allows for direct travel between cities without the logistics of flight changes or airport transfers. At Barkat Travel, we coordinate this entire route, ensuring all border manifest requirements at <strong>Salwa and Abu Samra</strong> are finalized before your departure.
                  </p>
               </div>

               {/* Expert Answer Block */}
               <FeaturedSnippet
                 question="How long does the journey take from Doha to Makkah?"
                 answer="The road journey from Doha to Makkah typically takes between 15 to 18 hours depending on border crossing efficiency and traffic conditions near Riyadh."
                 example="Private GMC Yukon transport is generally 3 hours faster than luxury bus services, as private vehicles benefit from quicker document processing at the Salwa Saudi entry checkpoint and flexible prayer stops."
               />
            </div>
         </div>
      </section>

      {/* Journey Flowchart */}
      <section className="py-24 bg-brand-beige/10">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-4">Journey Integrity Roadmap</h2>
               <p className="text-brand-blue/60 text-sm ">Our 4-Step Professional Protocol for Every Cross-Border Trip across the GCC.</p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
               <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-gold/20 -translate-y-1/2 z-0"></div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                  <Link href="/fleet/" className="block">
                    <WorkflowStep 
                       number="01" 
                       title="Fleet Selection" 
                       desc="Tailored vehicles selected based on luggage, group size, and Saudi ministry entry requirements." 
                       icon={<Car className="w-5 h-5" />}
                    />
                  </Link>
                  <WorkflowStep 
                     number="02" 
                     title="Route Audit" 
                     desc="Real-time border wait-time assessment via Ghuwaifat or Salwa to ensure on-time arrival for Umrah permits." 
                     icon={<ArrowRight className="w-5 h-5" />}
                  />
                  <WorkflowStep 
                     number="03" 
                     title="Driver Brief" 
                     desc="Safety protocols and specific Ziarat training for Makkah Clock Tower and Masjid Nabawi proximity." 
                     icon={<Users className="w-5 h-5" />}
                  />
                  <WorkflowStep 
                     number="04" 
                     title="Live Support" 
                     desc="24/7 dedicated WhatsApp coordination during transit for emergency border assistance and Nusuk app troubleshooting." 
                     icon={<MessageSquare className="w-5 h-5" />}
                  />
               </div>
            </div>
         </div>
      </section>

      {/* Professional Resource Guide */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12  text-center">GCC Travel Documentation Checklist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 bg-brand-gold/5 rounded-3xl border border-brand-gold/10">
                  <h4 className="font-bold text-brand-blue mb-4 uppercase tracking-widest text-xs">Standard Requirement</h4>
                  <ul className="space-y-4 text-sm text-brand-blue/70 ">
                     <li>• Valid Passport (Minimum 6 months validity)</li>
                     <li>• Qatar ID / Resident Identity Card (Original)</li>
                     <li>• Saudi E-Visa (Tourist or Umrah specific)</li>
                     <li>• Nusuk App Appointment (Active status)</li>
                  </ul>
               </div>
               <div className="p-8 bg-brand-blue rounded-3xl text-brand-white shadow-xl">
                  <h4 className="font-bold text-brand-gold mb-4 uppercase tracking-widest text-xs">Barkat Executive Support</h4>
                  <ul className="space-y-4 text-sm text-brand-white/80 ">
                     <li>• Certified Border Manifest (Digital & Print)</li>
                     <li>• Road Journey Insurance Linkage</li>
                     <li>• KSA Simulation Briefing (Route awareness)</li>
                     <li>• 24h Emergency Multilingual Coordination</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Fleet List */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-inter tracking-tight mb-12 text-center decoration-brand-gold underline underline-offset-8 ">Commercial Transport Solutions Qatar</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {ROUTES.map((route) => {
              const routeSlug = `/transport/${route.from.toLowerCase().replace(/ /g, '-')}-to-${route.to.toLowerCase().replace(/ /g, '-')}`;
              return (
                <div key={`${route.from}-${route.to}`} className="bg-white/5 border border-brand-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/10 transition-colors group">
                  <div className="flex items-center space-x-8 mb-4 md:mb-0">
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-brand-gold font-bold mb-1 ">Departure</p>
                      <p className="text-xl font-bold font-inter tracking-tight">{route.from}</p>
                    </div>
                    <ArrowRight className="text-brand-gold mx-4 group-hover:translate-x-2 transition-transform" />
                    <div className="text-center">
                      <p className="text-[10px] uppercase text-brand-gold font-bold mb-1 ">Destination</p>
                      <p className="text-xl font-bold font-inter tracking-tight">{route.to}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-3">
                     <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">{route.vehicle}</p>
                     <div className="flex gap-3">
                        <Link 
                          href={routeSlug}
                          className="text-xs font-bold border border-brand-gold/30 text-brand-gold px-4 py-2 rounded-full hover:bg-brand-gold hover:text-brand-blue transition-all"
                        >
                          Details
                        </Link>
                        <a 
                          href={whatsappLink} 
                          className="bg-brand-gold text-brand-blue px-6 py-2 rounded-full text-xs font-bold flex items-center hover:bg-brand-white transition-colors"
                        >
                          <MessageSquare className="w-3 h-3 mr-2" />
                          Get a Quote
                        </a>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
             <p className="text-brand-white/50 text-sm  mb-4">Service Coverage Areas:</p>
             <div className="flex flex-wrap justify-center gap-6">
                <Link href="/location/pakistan/" className="text-brand-gold hover:underline text-sm font-bold">Barkat Pakistan (Islamabad)</Link>
                <div className="w-1 h-1 bg-brand-gold/30 rounded-full my-auto"></div>
                <Link href="/location/saudi-arabia/" className="text-brand-gold hover:underline text-sm font-bold">Riyadh & Makkah Ground Team</Link>
                <div className="w-1 h-1 bg-brand-gold/30 rounded-full my-auto"></div>
                <Link href="/contact/" className="text-brand-gold hover:underline text-sm font-bold">Doha Global Headquarters</Link>
             </div>
          </div>
         </div>
      </section>

      {/* FAQ Expansion (Point 9 - 15-20 Questions Strategy) */}
      <section className="py-24 bg-brand-white">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12  text-center underline decoration-brand-gold/20 underline-offset-8">Transport Knowledge Base</h2>
            <div className="space-y-8 text-left">
               <QuestionResponse 
                  q="What is the best way to travel from Doha to Madinah for families?" 
                  a="The most efficient way for families to reach Madinah from Doha is using our private GMC Yukon service. This avoids the logistical delays of shared buses and allows for direct transit through Riyadh to Masjid Nabawi in approximately 16 hours."
               />
               <QuestionResponse 
                  q="Are the Barkat Travel buses equipped for long road trips to Saudi Arabia?" 
                  a="Yes, our 2026 fleet of luxury coaches is the highest standard in Qatar, featuring Euro-6 climate control, recliner seating, and on-board Wi-Fi to ensure pilgrims can update their Nusuk app permits during the trans-GCC journey."
               />
               <QuestionResponse 
                  q="What boarding documents are required at the Salwa border for Qatar residents?" 
                  a="Residents must present a valid passport (6 months validity), Qatar ID, and a Saudi e-visa. Barkat Travel provides the required commercial manifest and passenger manifest docs to ensure priority processing at the border."
               />
               <QuestionResponse 
                  q="Does Barkat Travel offer shared transport options from Doha to Makkah?" 
                  a="Yes, we operate a regular schedule of shared economy and VIP luxury buses departing from our Doha office. Prices start from 250 QAR, providing the most affordable road pilgrimage option in the region."
               />
            </div>
            <div className="mt-12 text-center">
               <Link href="/knowledge-base" className="text-brand-gold font-bold uppercase tracking-widest text-[10px] border-b border-brand-gold pb-1 hover:text-brand-blue hover:border-brand-blue transition-all">
                  Access Full 20-Point Transport FAQ
               </Link>
            </div>
         </div>
      </section>

      <PageCTA
        heading="Ready to Book Your Transport?"
        description="Get a price quote for Doha to Makkah, Madinah, or Riyadh. Comfortable vehicles, professional drivers, competitive rates."
        primaryBtn={{ text: "Get Transport Quote", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function WorkflowStep({ number, title, desc, icon }: any) {
   return (
      <div className="bg-white p-8 rounded-[2.5rem] border border-brand-gold/10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2">
         <div className="w-14 h-14 bg-brand-gold text-brand-blue rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform">
            {icon}
         </div>
         <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">{number}</span>
         <h3 className="text-lg font-bold font-inter tracking-tight text-brand-blue mb-3">{title}</h3>
         <p className="text-brand-blue/50 text-xs  leading-relaxed">{desc}</p>
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

function MarkerItem({ icon: Icon, title, text }: any) {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded-xl mr-6 border border-brand-gold/20 shrink-0">
        <Icon className="w-6 h-6 text-brand-gold" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-brand-blue font-inter tracking-tight mb-1">{title}</h4>
        <p className="text-brand-blue/60 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

