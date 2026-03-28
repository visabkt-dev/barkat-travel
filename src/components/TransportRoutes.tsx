"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES, CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { ArrowLeft, ArrowRight, MapPin, Bus, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function TransportRoutes() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-brand-blue text-brand-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] -mr-48 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-[10px] font-bold tracking-[0.3em] uppercase">
              Regional Logistics Hub
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-inter leading-tight tracking-tight mb-6">
              Direct <br className="hidden md:block"/> VVIP Routes
            </h2>
            <p className="text-brand-white/80 text-lg font-light leading-relaxed font-inter">
              Precision-managed transport across major GCC cities. Swipe to explore our flagship routes.
            </p>
          </motion.div>

          <div className="flex items-center justify-center lg:justify-end gap-4">
             <button 
               onClick={scrollLeft}
               className="w-14 h-14 rounded-2xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all shadow-xl"
             >
                <ArrowLeft size={24} />
             </button>
             <button 
               onClick={scrollRight}
               className="w-14 h-14 rounded-2xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all shadow-xl"
             >
                <ArrowRight size={24} />
             </button>
          </div>
        </div>

        {/* Swipeable Container */}
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory px-4 -mx-4 lg:px-0 lg:mx-0 touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ROUTES.map((route: any, index: number) => {
            const isPopular = index < 2;
            return (
              <motion.div
                key={`${route.from}-${route.to}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
              >
                <div className="bg-brand-white/5 backdrop-blur-md border border-brand-white/10 p-10 rounded-[2.5rem] hover:border-brand-gold/40 transition-all group relative overflow-hidden flex flex-col h-full shadow-lg">
                   <div className="flex items-center justify-between mb-10">
                     <div className="p-4 rounded-2xl bg-brand-gold/10 text-brand-gold">
                       <MapPin className="w-6 h-6" />
                     </div>
                     {isPopular && (
                       <span className="text-[10px] uppercase font-black text-brand-blue tracking-[0.2em] bg-brand-gold px-4 py-1.5 rounded-full shadow-lg">
                         Most Booked
                       </span>
                     )}
                   </div>
                   
                   <div className="space-y-2 mb-12">
                     <div className="flex flex-col">
                       <span className="text-[10px] uppercase text-brand-white/30 tracking-[0.4em] font-bold mb-2">Depart</span>
                       <span className="text-3xl font-black font-inter tracking-tight text-brand-gold leading-none uppercase">
                         {route.from}
                       </span>
                     </div>
                     
                     <div className="py-8">
                        <div className="w-full h-[2px] bg-brand-white/10 relative">
                           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(184,142,47,0.5)]"></div>
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="absolute top-0 left-0 h-full bg-brand-gold/30"
                           />
                           <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-brand-gold bg-brand-blue"></div>
                        </div>
                     </div>

                     <div className="flex flex-col">
                       <span className="text-[10px] uppercase text-brand-white/30 tracking-[0.4em] font-bold mb-2">Arrive</span>
                       <span className="text-3xl font-black font-inter tracking-tight leading-none text-brand-white uppercase">
                         {route.to}
                       </span>
                     </div>
                   </div>

                   <div className="mt-auto pt-10 border-t border-brand-white/5 flex flex-col gap-6">
                     <div>
                        <p className="text-[10px] uppercase text-brand-white/30 tracking-[0.2em] font-bold mb-2">Execution Fleet</p>
                        {route.link ? (
                          <Link href={route.link} className="text-base font-black text-brand-gold hover:text-brand-white transition-colors flex items-center gap-2">
                             <Bus size={18} />
                             {route.vehicle}
                          </Link>
                        ) : (
                          <p className="text-base font-black text-brand-white flex items-center gap-2">
                            <Bus size={18} className="text-brand-gold" />
                            {route.vehicle}
                          </p>
                        )}
                     </div>
                     
                     <a
                       href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
                       className="w-full bg-brand-gold text-brand-blue py-5 rounded-2xl hover:bg-brand-white transition-all shadow-xl flex items-center justify-center group font-black text-[10px] uppercase tracking-widest"
                     >
                       <MessageSquare className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                       <span>Confirm Seat</span>
                     </a>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
