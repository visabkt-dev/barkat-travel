"use client";

import { useState } from "react";
import { CheckCircle, Plane, ArrowRight, Send, Phone, Globe } from "lucide-react";
import { getWhatsAppLink, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { usePathname } from "next/navigation";

interface VisaFormProps {
  className?: string;
  defaultVisaType?: string;
}

const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-blue text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all appearance-none";
const labelClass = "block text-[10px] font-black text-brand-blue/40 uppercase tracking-widest mb-1.5 ml-1";

export default function VisaForm({ className, defaultVisaType = "Saudi Umrah Visa" }: VisaFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    nationality: "",
    passengers: "1",
    visaType: defaultVisaType,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const update = (field: string, val: string) => setFormData(prev => ({ ...prev, [field]: val }));

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Send Lead to API (handles DB + Email)
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          email: formData.email,
          service_type: "Visa Assistance",
          details: `Nationality: ${formData.nationality}\nApplicants: ${formData.passengers}\nVisa Type: ${formData.visaType}\nMessage: ${formData.message}`,
          source_page: pathname,
          // DB fields
          nationality: formData.nationality,
          passengers: formData.passengers,
          visa_type: formData.visaType,
          additional_info: formData.message,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or contact us via WhatsApp.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("bg-white p-8 rounded-[2rem] text-center border border-brand-gold/10 shadow-2xl w-full mx-auto h-[400px] flex flex-col justify-center", className)}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-black text-brand-blue mb-2">Inquiry Received</h3>
        <p className="text-brand-blue/50 text-sm mb-8">JazakAllah Khair! We have received your visa request. Our agent will contact you on WhatsApp and Email shortly.</p>
        <button onClick={() => { setIsSubmitted(false); setStep(1); }} className="text-brand-gold font-bold text-sm bg-brand-gold/5 px-6 py-3 rounded-xl hover:bg-brand-gold/10 transition-colors">
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 w-full mx-auto overflow-hidden relative", className)}>
      {/* Progress Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
                <div key={s} className={cn("h-1.5 rounded-full transition-all duration-500", step >= s ? "w-8 bg-brand-gold" : "w-4 bg-gray-100")} />
            ))}
        </div>
        <span className="text-[10px] font-black uppercase tracking-tighter text-brand-blue/30">Step {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }}
              className="space-y-5"
            >
               <div>
                  <h3 className="text-xl font-black text-brand-blue mb-1">Visa Assistance</h3>
                  <p className="text-brand-blue/40 text-xs mb-6 font-medium">Fast and secure visa processing.</p>
               </div>
               <div>
                  <label className={labelClass}>WhatsApp Number *</label>
                  <div className="relative">
                    <input required type="tel" placeholder="+974 5555 1234" className={cn(inputClass, "pl-12")}
                      value={formData.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                  </div>
               </div>
               <div className="pt-4">
                  <button type="button" onClick={nextStep} disabled={!formData.whatsapp} className="w-full bg-brand-blue text-brand-gold py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 hover:translate-y-[-2px] active:translate-y-0 transition-all shadow-lg active:shadow-sm disabled:opacity-50">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
               <div className="grid grid-cols-2 gap-3">
                  <div>
                      <label className={labelClass}>Nationality</label>
                      <input type="text" className={inputClass} placeholder="e.g. Pakistani" value={formData.nationality} onChange={(e) => update("nationality", e.target.value)} />
                  </div>
                  <div>
                      <label className={labelClass}>Applicants</label>
                      <input type="number" min="1" className={inputClass} placeholder="1" value={formData.passengers} onChange={(e) => update("passengers", e.target.value)} />
                  </div>
               </div>
               <div>
                  <label className={labelClass}>Visa Type</label>
                  <div className="relative">
                    <select className={inputClass} value={formData.visaType} onChange={(e) => update("visaType", e.target.value)}>
                        <option value="Saudi Umrah Visa">Saudi Umrah Visa</option>
                        <option value="Saudi Tourist Visa">Saudi Tourist Visa</option>
                        <option value="Saudi Transit Visa">Saudi Transit Visa</option>
                        <option value="Multiple Entry Visa">Multiple Entry Visa</option>
                    </select>
                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold rotate-90 pointer-events-none" />
                  </div>
               </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button type="button" onClick={prevStep} className="flex-1 bg-gray-50 text-brand-blue py-4 rounded-xl font-bold text-sm border border-gray-100 hover:bg-gray-100 transition-colors">
                        Back
                    </button>
                    <button type="button" onClick={nextStep} className="flex-[2] bg-brand-blue text-brand-gold py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg text-center">
                        Continue <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3" 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
               <div>
                  <label className={labelClass}>Your Full Name *</label>
                  <input required type="text" placeholder="e.g. Abdullah Khan" className={inputClass}
                    value={formData.name} onChange={(e) => update("name", e.target.value)} />
               </div>
                <div>
                  <label className={labelClass}>Email Address (Optional)</label>
                  <input type="email" placeholder="name@example.com" className={inputClass}
                    value={formData.email} onChange={(e) => update("email", e.target.value)} />
               </div>
               <div>
                  <label className={labelClass}>Special Requests (Optional)</label>
                  <textarea rows={2} placeholder="Any specific requirements..." className={cn(inputClass, "resize-none")}
                    value={formData.message} onChange={(e) => update("message", e.target.value)} />
               </div>
               <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button type="button" onClick={prevStep} className="flex-1 bg-gray-50 text-brand-blue py-4 rounded-xl font-bold text-sm border border-gray-100 hover:bg-gray-100 transition-colors">
                        Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className={cn("flex-[2] bg-brand-gold text-brand-blue py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-xl", isSubmitting ? "opacity-70 cursor-wait" : "hover:bg-brand-gold/90 hover:-translate-y-0.5")}>
                        {isSubmitting ? "Processing..." : "Confirm Inquiry"} <Send className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-center text-[10px] text-brand-blue/30 font-bold uppercase tracking-widest pt-2">Typically replies in 5 minutes</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
