"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageSquare, CheckCircle, Plane, Car, Hotel, FileText } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { supabase } from "@/lib/supabase";
import { usePathname } from "next/navigation";

// Lead collection setup

type FormData = {
  fullName: string;
  whatsappNumber: string;
  email: string;
  serviceType: string;
  additionalInfo: string;
  
  // Transport
  transportPickup: string;
  transportDropoff: string;
  transportDate: string;
  transportPassengers: string;
  transportVehicle: string;

  // Umrah Package
  umrahDeparture: string;
  umrahDate: string;
  umrahPassengers: string;
  umrahMakkahStar: string;
  umrahMadinahStar: string;
  umrahNeedVisa: string;
  
  // Visa
  visaNationality: string;
  visaResidence: string;
  visaApplicants: string;
  visaType: string;
  visaTravelDate: string;
  
  // Hotel
  hotelCity: string;
  hotelCheckIn: string;
  hotelCheckOut: string;
  hotelRooms: string;
  hotelStar: string;
};

export default function GetQuoteForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatsappNumber: "",
    email: "",
    serviceType: "Transport",
    additionalInfo: "",
    
    transportPickup: "Doha, Qatar",
    transportDropoff: "Makkah, Saudi Arabia",
    transportDate: "",
    transportPassengers: "1",
    transportVehicle: "GMC Yukon / Similar",

    umrahDeparture: "Doha, Qatar",
    umrahDate: "",
    umrahPassengers: "1",
    umrahMakkahStar: "5 Star",
    umrahMadinahStar: "4 Star",
    umrahNeedVisa: "Yes, include Visa",

    visaNationality: "",
    visaResidence: "Qatar",
    visaApplicants: "1",
    visaType: "Saudi Umrah Visa",
    visaTravelDate: "",

    hotelCity: "Makkah",
    hotelCheckIn: "",
    hotelCheckOut: "",
    hotelRooms: "1 Double Room",
    hotelStar: "5 Star",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const pathname = usePathname();

  const handleWhatsAppSubmit = async () => {
    setIsSubmitting(true);
    let serviceDetails = "";
    
    if (formData.serviceType === "Transport") {
      serviceDetails = `Pick-up: ${formData.transportPickup}
Drop-off: ${formData.transportDropoff}
Date: ${formData.transportDate || "Flexible"}
Passengers: ${formData.transportPassengers}
Preferred Vehicle: ${formData.transportVehicle}`;
    } else if (formData.serviceType === "Umrah Package") {
      serviceDetails = `Departure: ${formData.umrahDeparture}
Expected Date: ${formData.umrahDate || "Flexible"}
Passengers: ${formData.umrahPassengers}
Makkah Hotel: ${formData.umrahMakkahStar}
Madinah Hotel: ${formData.umrahMadinahStar}
Visa Required: ${formData.umrahNeedVisa}`;
    } else if (formData.serviceType === "Visa") {
      serviceDetails = `Nationality: ${formData.visaNationality || "Not provided"}
Residence: ${formData.visaResidence}
Applicants: ${formData.visaApplicants}
Visa Type: ${formData.visaType}
Expected Travel Date: ${formData.visaTravelDate || "Flexible"}`;
    } else if (formData.serviceType === "Hotel") {
      serviceDetails = `City: ${formData.hotelCity}
Check-In: ${formData.hotelCheckIn || "Flexible"}
Check-Out: ${formData.hotelCheckOut || "Flexible"}
Rooms/Guests: ${formData.hotelRooms}
Star Rating: ${formData.hotelStar}`;
    }

    try {
      // Send Lead to API (handles DB + Email)
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          whatsapp: formData.whatsappNumber,
          email: formData.email,
          service_type: formData.serviceType,
          details: serviceDetails,
          source_page: pathname,
          // Add specific fields for DB
          pickup: formData.transportPickup || formData.umrahDeparture,
          dropoff: formData.transportDropoff,
          travel_date: formData.transportDate || formData.umrahDate || formData.visaTravelDate || formData.hotelCheckIn,
          passengers: formData.transportPassengers || formData.umrahPassengers || formData.visaApplicants || formData.hotelRooms,
          additional_info: formData.additionalInfo,
          city: formData.hotelCity,
          check_in: formData.hotelCheckIn,
          check_out: formData.hotelCheckOut,
          nationality: formData.visaNationality,
          visa_type: formData.visaType,
          metadata: {
            makkah_hotel: formData.umrahMakkahStar,
            madinah_hotel: formData.umrahMadinahStar,
            visa_required: formData.umrahNeedVisa,
            residence: formData.visaResidence,
            hotel_star: formData.hotelStar,
            vehicle: formData.transportVehicle
          }
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

  // Modern input classes ensuring no default blue border from the browser
  const inputClass = "w-full bg-[#f8f9fa] border-2 border-[#e9ecef] rounded-xl px-4 py-3 text-brand-blue focus:outline-none focus:ring-0 focus:border-brand-gold transition-all appearance-none";

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-brand-blue p-8 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2 text-brand-gold">Get a Custom Quote</h2>
          <p className="text-white/80 text-sm">Tell us about your journey, and we'll handle the rest.</p>
        </div>
      </div>

      <div className="p-8">
        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-3xl font-black text-brand-blue mb-4">Inquiry Received!</h3>
            <p className="text-brand-blue/60 mb-8 max-w-sm mx-auto">
              JazakAllah Khair. We have received your request. Our team will contact you via WhatsApp and Email shortly with your custom quote.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ ...formData, fullName: "", whatsappNumber: "", additionalInfo: "" }); }}
              className="text-brand-gold font-bold hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-8 relative">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-gold" 
                  initial={{ width: "25%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className={step >= 1 ? "text-brand-blue" : ""}>Contact</span>
                <span className={step >= 2 ? "text-brand-blue" : ""}>Service</span>
                <span className={step >= 3 ? "text-brand-blue" : ""}>Details</span>
                <span className={step >= 4 ? "text-brand-blue" : ""}>Review</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Steps content stays same... using targetContent to match first and last line of loop */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-brand-blue mb-4">Your Contact Information</h3>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue/70 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      className={inputClass}
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                      placeholder="e.g. Abdullah Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue/70 mb-2">WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      className={inputClass}
                      value={formData.whatsappNumber}
                      onChange={(e) => updateFormData("whatsappNumber", e.target.value)}
                      placeholder="e.g. +974 5555 1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-blue/70 mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      className={inputClass}
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="name@example.com"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-brand-blue mb-4">What service do you need?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "Transport", icon: <Car className="w-5 h-5" />, label: "GCC Transport" },
                      { id: "Umrah Package", icon: <Plane className="w-5 h-5" />, label: "Full Umrah Package" },
                      { id: "Visa", icon: <FileText className="w-5 h-5" />, label: "Visa Assistance" },
                      { id: "Hotel", icon: <Hotel className="w-5 h-5" />, label: "Hotel Booking" }
                    ].map((s) => (
                      <div 
                        key={s.id}
                        onClick={() => updateFormData("serviceType", s.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center gap-3 ${formData.serviceType === s.id ? 'border-brand-gold bg-brand-gold/5 text-brand-blue font-bold shadow-md' : 'border-[#e9ecef] bg-[#f8f9fa] text-[#495057] hover:border-gray-300'}`}
                      >
                         <div className={formData.serviceType === s.id ? 'text-brand-gold' : 'text-[#adb5bd]'}>{s.icon}</div>
                         {s.label}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-brand-blue mb-4">Travel Details ({formData.serviceType})</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                     
                     {/* TRANSPORT FORM */}
                     {formData.serviceType === "Transport" && (
                       <>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Pick-up Location</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Doha, Qatar"
                              className={inputClass}
                              value={formData.transportPickup}
                              onChange={(e) => updateFormData("transportPickup", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Drop-off Location</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Makkah, Saudi Arabia"
                              className={inputClass}
                              value={formData.transportDropoff}
                              onChange={(e) => updateFormData("transportDropoff", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Vehicle Preference</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.transportVehicle} onChange={(e) => updateFormData("transportVehicle", e.target.value)}>
                                 <option value="GMC Yukon / Similar">VVIP GMC Yukon or similar</option>
                                 <option value="Business Sedan">Business Sedan (Camry/Similar)</option>
                                 <option value="Hiace / Coaster">Group Van/Coaster</option>
                                 <option value="Not Sure">Need Recommendation</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Number of Passengers</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.transportPassengers} onChange={(e) => updateFormData("transportPassengers", e.target.value)}>
                                 {[1,2,3,4,5,6,7,"8+"].map(n => <option key={n} value={n}>{n} Passenger(s)</option>)}
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Travel Date</label>
                            <input 
                              type="date" 
                              className={inputClass}
                              style={{colorScheme: 'light'}} /* fixes browser date picker dark mode issues */
                              value={formData.transportDate}
                              onChange={(e) => updateFormData("transportDate", e.target.value)}
                            />
                         </div>
                       </>
                     )}

                     {/* UMRAH PACKAGE FORM */}
                     {formData.serviceType === "Umrah Package" && (
                       <>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Departure City</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Doha, Qatar"
                              className={inputClass}
                              value={formData.umrahDeparture}
                              onChange={(e) => updateFormData("umrahDeparture", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Expected Travel Date</label>
                            <input 
                              type="date" 
                              className={inputClass}
                              style={{colorScheme: 'light'}}
                              value={formData.umrahDate}
                              onChange={(e) => updateFormData("umrahDate", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Makkah Hotel</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.umrahMakkahStar} onChange={(e) => updateFormData("umrahMakkahStar", e.target.value)}>
                                 <option value="5 Star">5 Star (Clock Tower etc)</option>
                                 <option value="4 Star">4 Star (Close to Haram)</option>
                                 <option value="Economy">Economy (Budget friendly)</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Madinah Hotel</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.umrahMadinahStar} onChange={(e) => updateFormData("umrahMadinahStar", e.target.value)}>
                                 <option value="5 Star">5 Star (Markaziya Area)</option>
                                 <option value="4 Star">4 Star</option>
                                 <option value="Economy">Economy</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Total Passengers</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.umrahPassengers} onChange={(e) => updateFormData("umrahPassengers", e.target.value)}>
                                 {[1,2,3,4,5,6,7,"8+"].map(n => <option key={n} value={n}>{n} pax</option>)}
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Need Visa Service?</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.umrahNeedVisa} onChange={(e) => updateFormData("umrahNeedVisa", e.target.value)}>
                                 <option value="Yes, include Visa">Yes, include Visa processing</option>
                                 <option value="No, I have it">No, I already have Visa</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                       </>
                     )}

                     {/* VISA FORM */}
                     {formData.serviceType === "Visa" && (
                       <>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Nationality (Passport origin)</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Pakistani, Indian"
                              className={inputClass}
                              value={formData.visaNationality}
                              onChange={(e) => updateFormData("visaNationality", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Country of Residence</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Qatar, UAE"
                              className={inputClass}
                              value={formData.visaResidence}
                              onChange={(e) => updateFormData("visaResidence", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Number of Applicants</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.visaApplicants} onChange={(e) => updateFormData("visaApplicants", e.target.value)}>
                                 {[1,2,3,4,5,6,7,"8+"].map(n => <option key={n} value={n}>{n} Applicant(s)</option>)}
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Visa Type Needed</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.visaType} onChange={(e) => updateFormData("visaType", e.target.value)}>
                                 <option value="Saudi Umrah Visa">Saudi Umrah Visa</option>
                                 <option value="Tourist Visa">Saudi Tourist Visa (1 Year)</option>
                                 <option value="Transit Visa">Transit / Stopover Visa</option>
                                 <option value="Not Sure">Not sure, need advice</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Intended Travel Date</label>
                            <input 
                              type="date" 
                              className={inputClass}
                              style={{colorScheme: 'light'}}
                              value={formData.visaTravelDate}
                              onChange={(e) => updateFormData("visaTravelDate", e.target.value)}
                            />
                         </div>
                       </>
                     )}

                     {/* HOTEL FORM */}
                     {formData.serviceType === "Hotel" && (
                       <>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Hotel City</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.hotelCity} onChange={(e) => updateFormData("hotelCity", e.target.value)}>
                                 <option value="Makkah">Makkah Al Mukarramah</option>
                                 <option value="Madinah">Madinah Al Munawwarah</option>
                                 <option value="Both">Both (Makkah & Madinah)</option>
                                 <option value="Qatar">Qatar (Doha/Lusail)</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Star Rating</label>
                            <div className="relative">
                              <select className={inputClass} value={formData.hotelStar} onChange={(e) => updateFormData("hotelStar", e.target.value)}>
                                 <option value="5 Star">5 Star (VVIP / Premium)</option>
                                 <option value="4 Star">4 Star</option>
                                 <option value="3 Star">3 Star / Economy</option>
                              </select>
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <ArrowRight className="w-4 h-4 text-brand-gold rotate-90" />
                              </div>
                            </div>
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Check-in Date</label>
                            <input 
                              type="date" 
                              className={inputClass}
                              style={{colorScheme: 'light'}}
                              value={formData.hotelCheckIn}
                              onChange={(e) => updateFormData("hotelCheckIn", e.target.value)}
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Check-out Date</label>
                            <input 
                              type="date" 
                              className={inputClass}
                              style={{colorScheme: 'light'}}
                              value={formData.hotelCheckOut}
                              onChange={(e) => updateFormData("hotelCheckOut", e.target.value)}
                            />
                         </div>
                         <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-brand-blue/70 mb-2">Rooms & Guests Setup</label>
                            <input 
                              type="text" 
                              placeholder="e.g. 1 Double Room, 1 Family Suite for 4 persons"
                              className={inputClass}
                              value={formData.hotelRooms}
                              onChange={(e) => updateFormData("hotelRooms", e.target.value)}
                            />
                         </div>
                       </>
                     )}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-brand-blue mb-4">Review & Send</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-brand-blue/70 mb-2">Any Additional Requirements? (Optional)</label>
                    <textarea 
                      className={inputClass}
                      rows={4}
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                      placeholder="e.g. We need a wheelchair accessible vehicle, or specific hotel preferences..."
                    />
                  </div>

                  <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10">
                     <h4 className="font-bold text-brand-blue mb-4">Summary</h4>
                     <ul className="space-y-2 text-sm text-brand-blue/80">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Name: {formData.fullName || "Not provided"}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Service: {formData.serviceType}</li>
                        
                        {formData.serviceType === "Transport" && (
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Route: {formData.transportPickup} to {formData.transportDropoff} ({formData.transportPassengers} pax)</li>
                        )}
                        {formData.serviceType === "Umrah Package" && (
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Route: {formData.umrahDeparture} to Saudi Arabia ({formData.umrahPassengers} pax)</li>
                        )}
                        {formData.serviceType === "Visa" && (
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Visa: {formData.visaType} ({formData.visaNationality}, {formData.visaApplicants} pax)</li>
                        )}
                        {formData.serviceType === "Hotel" && (
                          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold"/> Location: {formData.hotelCity} ({formData.hotelRooms})</li>
                        )}
                     </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between items-center pt-6 border-t border-gray-100">
               {step > 1 ? (
                 <button 
                   onClick={prevStep}
                   className="flex items-center gap-2 text-gray-500 hover:text-brand-blue font-bold text-sm transition-colors py-2 px-4 rounded-xl hover:bg-gray-50"
                 >
                   <ArrowLeft className="w-4 h-4" /> Back
                 </button>
               ) : <div />}

               {step < 4 ? (
                 <button 
                   onClick={nextStep}
                   disabled={step === 1 && (!formData.fullName || !formData.whatsappNumber)}
                   className={`flex items-center gap-2 bg-brand-blue text-brand-gold py-3 px-8 rounded-xl font-bold text-sm transition-all shadow-md ${step === 1 && (!formData.fullName || !formData.whatsappNumber) ? 'opacity-50 cursor-not-allowed text-white' : 'hover:bg-brand-blue/90 hover:shadow-lg hover:-translate-y-0.5'}`}
                 >
                   Next Step <ArrowRight className="w-4 h-4" />
                 </button>
               ) : (
                 <button 
                   onClick={handleWhatsAppSubmit}
                   disabled={isSubmitting}
                   className={`flex items-center gap-2 bg-brand-gold text-brand-blue py-3 px-8 rounded-xl font-black text-sm transition-all shadow-md ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-brand-gold/90 hover:shadow-lg hover:-translate-y-0.5'}`}
                 >
                   {isSubmitting ? 'Sending...' : 'Confirm Inquiry'} <CheckCircle className="w-5 h-5" />
                 </button>
               )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
