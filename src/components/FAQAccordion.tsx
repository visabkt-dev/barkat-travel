"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-brand-gold/20 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors hover:border-brand-gold/50"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <h3 className="text-[15px] font-medium text-brand-blue font-inter pr-4 flex items-start">
                <span className="text-brand-gold mr-3 font-bold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <ChevronDown
                className={`w-4 h-4 text-brand-gold shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-brand-blue/70 text-sm leading-relaxed border-t border-brand-gold/5 bg-brand-beige/5">
                    <p className="pl-7">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
