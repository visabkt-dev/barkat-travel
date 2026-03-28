"use client";

import { useState, useEffect } from "react";
import { X, MessageSquare, Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 15 seconds or on exit intent
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenBarkatPopup");
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 15000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        const hasSeen = localStorage.getItem("hasSeenBarkatPopup");
        if (!hasSeen) {
          setIsVisible(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenBarkatPopup", "true");
  };

  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-blue/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] max-w-lg w-full relative overflow-hidden shadow-2xl border border-brand-gold/20"
          >
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
            
            <button 
              onClick={closePopup}
              className="absolute top-6 right-6 text-brand-blue/30 hover:text-brand-blue transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-8">
                <Timer className="w-10 h-10 text-brand-gold" />
              </div>
              
              <h3 className="text-3xl font-bold text-brand-blue mb-4 leading-tight">
                Limited Time Offer!
              </h3>
              <p className="text-brand-blue/60 mb-10 text-lg ">
                Inquire about your Umrah transport or Visa today and get a <span className="text-brand-gold font-bold">Special Ramadan Discount</span>.
              </p>

              <div className="flex flex-col space-y-4">
                <a 
                  href="/get-quote"
                  onClick={closePopup}
                  className="bg-brand-gold text-brand-blue py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Claim Offer Now</span>
                </a>
                <button 
                  onClick={closePopup}
                  className="text-brand-blue/30 text-xs font-bold uppercase tracking-widest hover:text-brand-blue transition-colors pt-2"
                >
                  Maybe Later
                </button>
              </div>
            </div>

            <div className="bg-brand-beige/30 py-4 text-center border-t border-brand-blue/5">
              <p className="text-[10px] uppercase font-bold text-brand-blue/40 tracking-widest">
                Trusted by 10,000+ Happy Travelers
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
