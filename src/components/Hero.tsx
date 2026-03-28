"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink, formatPhone } from "@/lib/constants";
import BookingForm from "./BookingForm";

export default function Hero() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/75 to-brand-blue/50 z-10" />
        <img
          src="/hero/bg-makkah.jpg"
          alt="Makkah Haram — Umrah and Ziyarat transport"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy & CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            {/* Trust eyebrow */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-black text-white uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Booking Open
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-black text-brand-gold uppercase tracking-wider">
                ★ 4.9 · 1,250+ Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15 text-[10px] font-black text-white uppercase tracking-wider">
                Est. 2008
              </span>
            </div>

            {/* H1 — SEO-optimised, keyword-first */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-[1.08] tracking-tight drop-shadow-2xl">
              Saudi Arabia Premium <br className="hidden md:block" />
              <span className="text-brand-gold">Umrah Taxi & Ziyarat Service</span>
            </h1>

            {/* Sub-heading */}
            <p className="text-base md:text-xl text-white/90 mb-8 font-medium max-w-xl leading-relaxed drop-shadow-md mx-auto lg:mx-0">
              Private luxury transport for Umrah pilgrims across Saudi Arabia. 
              Safe, direct and comfortable travel for Makkah, Madinah, Jeddah and exclusive Ziyarat tours with professional drivers.
            </p>

            {/* Key micro-benefits */}
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10">
              {[
                "Luxurious Inter-city Travel",
                "VIP Ziyarat in Makkah & Madinah",
                "Saudi Umrah visa in 48h",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 size={14} className="text-brand-gold flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="/get-quote/"
                className="bg-brand-gold text-brand-blue px-10 py-5 rounded-2xl text-base font-black transition-all shadow-[0_20px_50px_rgba(184,142,47,0.4)] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Get Instant Quote
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl text-base font-black transition-all shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Booking
              </motion.a>
            </div>

            {/* Phone secondary CTA */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href={`tel:${CONTACT_INFO.qatar.phones[0]}`}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone size={14} className="text-brand-gold" />
                {formatPhone(CONTACT_INFO.qatar.phones[0])}
                <span className="text-white/30">· Available 24/7</span>
              </a>
            </div>

            {/* Route chips for SEO */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-3 text-center lg:text-left">Popular Routes:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "Jeddah → Makkah",
                  "Makkah → Madinah",
                  "Makkah Ziyarat Tour",
                  "Jeddah → Taif",
                ].map((r) => (
                  <span
                    key={r}
                    className="bg-white/8 px-3 py-1.5 rounded-full border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Booking Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-6"
          >
            <BookingForm className="shadow-[0_40px_80px_rgba(0,0,0,0.5)] border-white/10 w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
