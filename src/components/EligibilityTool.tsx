"use client";
import React, { useState } from "react";
import { getWhatsAppLink, CONTACT_INFO } from "@/lib/constants";
import { ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function EligibilityTool() {
  const [residency, setResidency] = useState("");
  const [nationality, setNationality] = useState("");
  const [result, setResult] = useState<any>(null);

  const checkEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!residency || !nationality) return;

    let visaType = "Standard Umrah Visa";
    let processingTime = "3 to 5 Working Days";
    let desc = "You need to apply for a standard Umrah Visa. Our team processes this by coordinating directly with authorized Saudi channels.";
    let highlyEligible = false;

    // Rules logic
    if (residency === "resident") {
      if (["us", "uk", "eu", "australia", "canada"].includes(nationality)) {
        visaType = "1-Year Multiple Entry Tourist Visa (eVisa)";
        processingTime = "Usually within 24 Hours";
        desc = "As a citizen of an eligible country, you can get a multiple-entry e-Visa instantly which is fully valid for Umrah.";
        highlyEligible = true;
      } else {
        visaType = "Resident eVisa";
        processingTime = "24 to 48 Hours";
        desc = "As a verified resident in an approved profession, you are eligible for the fast-track Saudi Tourist eVisa valid for Umrah.";
        highlyEligible = true;
      }
    } else {
      if (["us", "uk", "eu", "australia", "canada"].includes(nationality)) {
        visaType = "Saudi Tourist eVisa";
        processingTime = "Instant - 24 Hours";
        desc = "You qualify for a direct Saudi eVisa to perform Umrah.";
        highlyEligible = true;
      }
    }

    setResult({ visaType, processingTime, desc, highlyEligible });
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-brand-gold/10 relative overflow-hidden">
      {!result ? (
        <form onSubmit={checkEligibility} className="space-y-8 relative z-10">
          <div className="space-y-4">
            <label className="block text-brand-blue font-black text-xl mb-4">1. What is your current residency?</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setResidency("resident")}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  residency === "resident" ? "border-brand-gold bg-brand-gold/5" : "border-gray-100 hover:border-brand-blue/20"
                }`}
              >
                <div className="font-bold text-brand-blue">Permanent Resident / Expat</div>
                <div className="text-sm text-gray-500 mt-1">Living and working in your current country</div>
              </button>
              <button
                type="button"
                onClick={() => setResidency("non_resident")}
                className={`p-5 rounded-2xl border-2 text-left transition-all ${
                  residency === "non_resident" ? "border-brand-gold bg-brand-gold/5" : "border-gray-100 hover:border-brand-blue/20"
                }`}
              >
                <div className="font-bold text-brand-blue">Visiting Only</div>
                <div className="text-sm text-gray-500 mt-1">On a visit/tourist visa</div>
              </button>
            </div>
          </div>

          {residency && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <label className="block text-brand-blue font-black text-xl mb-4">2. Select your Nationality</label>
              <select
                required
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-medium"
              >
                <option value="" disabled>Choose your passport country...</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="srilanka">Sri Lanka</option>
                <option value="nepal">Nepal</option>
                <option value="philippines">Philippines</option>
                <option value="egypt">Egypt</option>
                <option value="uk">United Kingdom (UK)</option>
                <option value="us">United States (US)</option>
                <option value="canada">Canada</option>
                <option value="eu">European Union (Schengen)</option>
                <option value="australia">Australia / New Zealand</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {nationality && residency && (
            <button
              type="submit"
              className="w-full bg-brand-blue hover:bg-brand-gold text-white hover:text-brand-blue transition-all duration-300 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-4"
            >
              Analyze Eligibility <ShieldCheck size={20} />
            </button>
          )}
        </form>
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-500 text-center relative z-10">
          <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
            {result.highlyEligible ? (
              <CheckCircle2 size={40} className="text-green-500" />
            ) : (
              <AlertCircle size={40} className="text-brand-gold" />
            )}
          </div>
          <h2 className="text-3xl font-black text-brand-blue mb-2">Good News!</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Based on your details, here is the recommended Saudi Visa option for your Umrah journey.</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 text-left border border-gray-100">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recommended Visa</span>
              <div className="text-xl md:text-2xl font-black text-brand-gold mt-1">{result.visaType}</div>
            </div>
            <div className="mb-6">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estimated Processing Time</span>
              <div className="text-lg font-bold text-brand-blue mt-1 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {result.processingTime}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">What this means</span>
              <p className="text-brand-blue/70 text-sm mt-2 leading-relaxed">{result.desc}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-500/20"
            >
              Start Application on WhatsApp
            </a>
            <button
              onClick={() => { setResult(null); setResidency(""); setNationality(""); }}
              className="text-brand-blue underline text-sm font-bold py-4 px-6 hover:text-brand-gold transition-colors"
            >
              Check another passport
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
