"use client";

import { motion } from "framer-motion";
import { VISA_TYPES, CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { FileText, CheckCircle, Globe, Shield, Clock, Send, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";
import FeaturedSnippet from "@/components/FeaturedSnippet";

export default function VisaPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block underline decoration-brand-gold/30 underline-offset-8">Licensed Saudi Visa Service</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-4 ">Saudi Visa Services</h1>
          <p className="text-brand-white/70 max-w-2xl mx-auto text-lg  leading-relaxed">
            Professional visa processing with guaranteed results. We specialize in accurate documentation and fast-track e-visa services for the Kingdom of Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Visa Processing Benefits & Statistics */}
      <section className="py-12 bg-white border-b border-brand-gold/10">
         <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-brand-beige/20 rounded-[3rem] p-8 md:p-12 border border-brand-gold/10 shadow-inner">
               <div className="text-center mb-10">
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue ">Approval Speed & Success Metrics</h3>
                  <p className="text-brand-blue/60 text-[10px] uppercase tracking-widest mt-2">Historical Data Summary for March 2026</p>
               </div>
               
               <div className="space-y-8">
                  <MetricBar label="Umrah Visa Approval" percentage="99.8%" duration="24-48h" />
                  <MetricBar label="Tourist E-Visa" percentage="100%" duration="2-12h" />
                  <MetricBar label="Transit/Multiple Entry" percentage="98.5%" duration="48-72h" />
               </div>
            </div>
         </div>
      </section>

      {/* Visa Types */}
      <section className="py-24 bg-brand-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VISA_TYPES.map((visa, index) => {
               const slug = visa.title.toLowerCase().replace(/ /g, '-');
               const link = `/visa/${slug}/`;
               return (
                  <div 
                    key={visa.title} 
                    className="bg-white p-8 rounded-3xl shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all hover:border-brand-gold/40 group flex flex-col h-full"
                  >
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-4 border border-brand-gold/20 group-hover:bg-brand-gold transition-colors">
                      <FileText className="w-8 h-8 text-brand-gold group-hover:text-brand-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-4">{visa.title}</h3>
                    <p className="text-brand-blue/60 text-sm leading-relaxed mb-8 flex-grow ">
                      {visa.description}
                    </p>
                    <Link 
                      href={link} 
                      className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform mt-auto"
                    >
                      Technical Requirements
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80" 
                    alt="Makkah" 
                    className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute top-10 -right-10 bg-brand-blue p-8 rounded-3xl shadow-2xl text-brand-white max-w-xs hidden md:block border border-brand-gold/20">
                 <h4 className="text-brand-gold font-bold mb-4 ">Quick Processing</h4>
                 <p className="text-sm opacity-80">Most Umrah and Tourist visas are processed within 24-48 hours after document submission.</p>
               </div>
            </div>

            <div>
              <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">The Process</span>
              <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue mt-4 mb-4">How to Apply?</h2>
              
              <div className="mb-8">
                 <FeaturedSnippet
                    question="How to apply for a Saudi Visa from Qatar?"
                    answer="To apply for a Saudi Visa from Qatar, you need to submit your passport copy, Qatar ID, and a recent digital photo to an authorized agency like Barkat Travel. Our processing team handles the digital Ministry of Foreign Affairs (MOFA) audit to minimize rejection rates, issuing your e-visa in 24-48 hours."
                    example="For example, if you are a Pakistani resident in Qatar applying for a 1-year multiple entry Tourist visa, our agents will align your Qatar ID profession with the approved Saudi visa categories before application submission."
                 />
              </div>

              <div className="space-y-10">
                <ProcessStep 
                  number="01" 
                  title="Document Submission" 
                  text="Send your passport copy and photograph via WhatsApp or visit our office." 
                />
                <ProcessStep 
                  number="02" 
                  title="Verification" 
                  text="Our experts will verify your documents against the latest Saudi visa regulations." 
                />
                <ProcessStep 
                  number="03" 
                  title="Payment & Processing" 
                  text="Complete the payment and we will initiate the application with the Saudi Ministry." 
                />
                <ProcessStep 
                  number="04" 
                  title="E-Visa Delivery" 
                  text="Receive your e-visa directly on WhatsApp and Email, ready for your travel." 
                />
              </div>

              <div className="mt-12">
                <a 
                  href={whatsappLink} 
                  className="bg-brand-blue text-brand-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-brand-blue transition-all inline-flex items-center"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Start Your Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-brand-blue text-brand-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-inter tracking-tight text-brand-gold mb-4">Why Choose Barkat Travel for Visa?</h2>
              <div className="w-24 h-1 bg-brand-gold/30 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tight">Authorized Agency</h3>
                <p className="text-brand-white/60 text-sm">We are a licensed and authorized travel agency for Saudi visa processing.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tight">Universal Support</h3>
                <p className="text-brand-white/60 text-sm">We process visas for all eligible nationalities living in Qatar and Pakistan.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tight">Swift Response</h3>
                <p className="text-brand-white/60 text-sm">Our dedicated visa desk handles every inquiry with priority and speed.</p>
              </div>
           </div>
        </div>
      </section>
      <PageCTA
        heading="Need Help With Your Saudi Visa?"
        description="Our visa team handles Umrah visas, tourist visas, and transit visas for applicants in Qatar and Pakistan. Fast processing, high success rate."
        primaryBtn={{ text: "Apply for Visa", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function MetricBar({ label, percentage, duration }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{label}</span>
          <span className="ml-4 text-[10px] text-brand-gold font-bold ">Avg: {duration}</span>
        </div>
        <span className="text-sm font-bold text-brand-blue font-inter tracking-tight">{percentage}</span>
      </div>
      <div className="h-2 w-full bg-brand-gold/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-gold rounded-full" 
          style={{ width: percentage.replace('%', '') + '%' }}
        ></div>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, text }: any) {
  return (
    <div className="flex group">
      <div className="text-4xl font-bold font-inter tracking-tight text-brand-gold/20 mr-8 group-hover:text-brand-gold transition-colors shrink-0">{number}</div>
      <div>
         <h4 className="text-xl font-bold text-brand-blue font-inter tracking-tight mb-2 tracking-tight flex items-center">
            {title}
            <div className="h-px bg-brand-gold/20 flex-grow ml-4"></div>
         </h4>
        <p className="text-brand-blue/60 text-sm  leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
