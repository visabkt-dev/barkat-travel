import React from "react";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import EligibilityTool from "@/components/EligibilityTool";
import FeaturedSnippet from "@/components/FeaturedSnippet";

export const metadata: Metadata = {
  title: "Umrah Visa Eligibility Checker | Barkat Travel",
  description: "Check your Saudi Umrah visa eligibility instantly. Fast, free tool for all nationalities (Pakistani, Indian, Egyptian, etc.). Apply online today.",
  alternates: {
    canonical: "/visa/eligibility-checker",
  },
};

export default function VisaCheckerPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 right-[-20%] w-[60%] h-[100%] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-[10px] font-bold tracking-[0.2em] uppercase">
              Free Assessment Tool
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-inter text-white tracking-tight mb-6">
              Umrah Visa <span className="text-brand-gold">Eligibility Checker</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed font-inter">
              Find out exactly which Saudi visa you qualify for based on your nationality and residency status. Get instant results and apply 100% online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
             <FeaturedSnippet
                question="How to check Saudi Umrah Visa eligibility for my nationality?"
                answer="You can instantly check which Saudi Visa you qualify for by using the free Barkat Travel Eligibility assessment tool. Eligibility largely depends on your specific nationality, GCC residency status, and passport type."
                example="For instance, certain nationalities holding valid US or Schengen visas are eligible for Visa-on-Arrival, while resident expatriates in GCC nations like Qatar might qualify directly for the 1-year e-Tourist multiple entry visa."
             />
          </div>
          <div className="max-w-4xl mx-auto">
            <EligibilityTool />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
