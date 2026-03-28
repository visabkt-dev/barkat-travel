"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Car, Plane, FileText, Hotel, ArrowRight, ArrowLeft, Send, Phone } from "lucide-react";
import { getWhatsAppLink, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { usePathname } from "next/navigation";

interface BookingFormProps {
  defaultService?: string;
  className?: string;
}

const services = [
  { id: "Transport", label: "GCC Transport" },
  { id: "Umrah Package", label: "Umrah Package" },
  { id: "Visa", label: "Visa Assistance" },
  { id: "Hotel", label: "Hotel Booking" },
];

const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-blue text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all appearance-none";
const labelClass = "block text-[10px] font-black text-brand-blue/40 uppercase tracking-widest mb-1.5 ml-1";

export default function BookingForm({ defaultService, className }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    service: defaultService || "Transport",
    // Transport
    pickup: "Doha, Qatar",
    dropoff: "Makkah, Saudi Arabia",
    passengers: "1",
    date: "",
    // Visa
    nationality: "",
    visaType: "Saudi Umrah Visa",
    // Hotel
    hotelCity: "Makkah",
    checkIn: "",
    checkOut: "",
    // Extra
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const update = (field: string, val: string) => setFormData(prev => ({ ...prev, [field]: val }));

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const getCategory = (s: string) => {
    const sl = s.toLowerCase();
    if (sl.includes("visa")) return "Visa";
    if (sl.includes("hotel") || sl.includes("accommodation")) return "Hotel";
    return "Transport";
  };

  const pathname = usePathname();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    const category = getCategory(formData.service);

    let serviceDetails = "";
    let service_details_for_email = "";
    if (category === "Transport") {
      serviceDetails = `Pickup: ${formData.pickup}\nDropoff: ${formData.dropoff}\nPassengers: ${formData.passengers}\nDate: ${formData.date || "Flexible"}`;
      service_details_for_email = serviceDetails;
    } else if (category === "Visa") {
      serviceDetails = `Nationality: ${formData.nationality || "Not specified"}\nVisa Type: ${formData.visaType}\nApplicants: ${formData.passengers}`;
      service_details_for_email = serviceDetails;
    } else if (category === "Hotel") {
      serviceDetails = `City/Hotel: ${formData.hotelCity}\nCheck-In: ${formData.checkIn || "Flexible"}\nCheck-Out: ${formData.checkOut || "Flexible"}`;
      service_details_for_email = serviceDetails;
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
          service_type: formData.service,
          details: service_details_for_email,
          source_page: pathname,
          // DB fields
          pickup: formData.pickup,
          dropoff: formData.dropoff,
          travel_date: formData.date || formData.checkIn,
          passengers: formData.passengers,
          additional_info: formData.message,
          city: formData.hotelCity,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          nationality: formData.nationality,
          visa_type: formData.visaType,
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
      <div className={cn("bg-white p-8 rounded-[2rem] text-center border border-brand-gold/10 shadow-2xl max-w-md mx-auto h-[400px] flex flex-col justify-center", className)}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-black text-brand-blue mb-2">Inquiry Received</h3>
        <p className="text-brand-blue/50 text-sm mb-8">JazakAllah Khair! We have received your request. Our agent will contact you on WhatsApp and Email shortly.</p>
        <button onClick={() => { setIsSubmitted(false); setStep(1); }} className="text-brand-gold font-bold text-sm bg-brand-gold/5 px-6 py-3 rounded-xl hover:bg-brand-gold/10 transition-colors">
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className={cn("bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-xl mx-auto overflow-hidden relative", className)}>
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
                  <h3 className="text-xl font-black text-brand-blue mb-1">
                    {getCategory(formData.service) === 'Visa' ? 'Visa Assistance' : 
                     getCategory(formData.service) === 'Hotel' ? 'Hotel Booking' : 
                     'Quick Transport Quote'}
                  </h3>
                  <p className="text-brand-blue/40 text-xs mb-6 font-medium">
                    {getCategory(formData.service) === 'Visa' ? 'Fast and secure visa processing.' : 
                     getCategory(formData.service) === 'Hotel' ? 'Find the best stays for your trip.' : 
                     'Start your journey with expert assistance.'}
                  </p>
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
               <div>
                  <label className={labelClass}>Select Service</label>
                  <div className="relative">
                    <select className={inputClass} value={formData.service} onChange={(e) => update("service", e.target.value)}>
                        {(!services.some(s => s.id === formData.service) && formData.service) && (
                          <option value={formData.service}>{formData.service}</option>
                        )}
                        {services.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                    </select>
                    <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold rotate-90 pointer-events-none" />
                  </div>
               </div>

               {/* Dynamic Fields */}
               {getCategory(formData.service) === "Transport" && (
                 <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelClass}>From</label>
                            <input type="text" className={inputClass} value={formData.pickup} onChange={(e) => update("pickup", e.target.value)} />
                        </div>
                        <div>
                            <label className={labelClass}>To</label>
                            <input type="text" className={inputClass} value={formData.dropoff} onChange={(e) => update("dropoff", e.target.value)} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelClass}>Date</label>
                            <input type="date" className={inputClass} style={{colorScheme: 'light'}} value={formData.date} onChange={(e) => update("date", e.target.value)} />
                        </div>
                        <div>
                            <label className={labelClass}>Passengers</label>
                            <div className="relative">
                                <select className={inputClass} value={formData.passengers} onChange={(e) => update("passengers", e.target.value)}>
                                    <option value="1-4 Pax (Camry)">1-4 Pax (Camry)</option>
                                    <option value="1-7 Pax (Staria)">1-7 Pax (Staria)</option>
                                    <option value="1-7 Pax (Starex)">1-7 Pax (Starex)</option>
                                    <option value="1-7 Pax (GMC)">1-7 Pax (GMC)</option>
                                    <option value="8-11 Pax (Hiace)">8-11 Pax (Hiace)</option>
                                    <option value="12-17 Pax (Coaster)">12-17 Pax (Coaster)</option>
                                </select>
                                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold rotate-90 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                 </div>
               )}

               {getCategory(formData.service) === "Visa" && (
                 <div className="space-y-4">
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
                        <select className={inputClass} value={formData.visaType} onChange={(e) => update("visaType", e.target.value)}>
                            <option>Saudi Umrah Visa</option>
                            <option>Saudi Tourist Visa</option>
                            <option>Saudi Transit Visa</option>
                            <option>Multiple Entry Visa</option>
                        </select>
                    </div>
                 </div>
               )}

               {getCategory(formData.service) === "Hotel" && (
                 <div className="space-y-4">
                    <div>
                        <label className={labelClass}>City / Hotel Name (Optional)</label>
                        <input type="text" className={inputClass} placeholder="e.g. Makkah or Voco Hotel" value={formData.hotelCity} onChange={(e) => update("hotelCity", e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className={labelClass}>Check-in</label>
                            <input type="date" className={inputClass} style={{colorScheme: 'light'}} value={formData.checkIn} onChange={(e) => update("checkIn", e.target.value)} />
                        </div>
                        <div>
                            <label className={labelClass}>Check-out</label>
                            <input type="date" className={inputClass} style={{colorScheme: 'light'}} value={formData.checkOut} onChange={(e) => update("checkOut", e.target.value)} />
                        </div>
                    </div>
                 </div>
               )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
