import React from "react";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import FareTool from "@/components/FareTool";
import FeaturedSnippet from "@/components/FeaturedSnippet";

export const metadata: Metadata = {
  title: "Saudi Arabia Transport Fare Calculator 2026 | Barkat Travel",
  description: "Calculate your exact taxi and bus fare from anywhere in the GCC to Saudi Arabia (Makkah, Madinah). Compare rates for GMC Yukon, Hyundai Staria, and luxury buses instantly.",
  alternates: {
    canonical: "/transport/fare-calculator",
  },
};

export default function FareCalculatorPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-white relative overflow-hidden">
        <div className="absolute top-0 right-[-20%] w-[60%] h-[100%] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
              Instant Estimation
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-inter text-brand-blue tracking-tight mb-6">
              GCC to Saudi Trip Fare <span className="text-brand-gold">Calculator</span>
            </h1>
            <p className="text-brand-blue/60 text-lg leading-relaxed font-inter">
              Get an instant, transparent estimate for your private transfer or group transport from any GCC city to Saudi Arabia. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-blue relative">
        <div className="absolute left-0 top-0 w-32 h-32 bg-brand-gold/20 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
             <FeaturedSnippet
                question="How much is the taxi fare from Doha to Saudi Arabia?"
                answer="The exact taxi fare depends on your specific vehicle and destination. You can use the Barkat Travel GCC Fare Calculator to get a live, accurate estimate for routes ranging from Makkah to Riyadh, comparing prices between private GMCs and shared luxury buses."
                example="For example, selecting a 'GMC Yukon' to 'Makkah' from 'Doha' will yield an entirely different structural price point than selecting a 'Business Sedan' heading to 'Riyadh'."
             />
          </div>
          <div className="max-w-4xl mx-auto">
            <FareTool />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
