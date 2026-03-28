"use client";

import { motion } from "framer-motion";
import { Bus, MapPin, FileText, Globe, Hotel, Car, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

const ICON_MAP: Record<string, any> = {
  Bus: Bus,
  MapPin: MapPin,
  FileText: FileText,
  Globe: Globe,
  Hotel: Hotel,
  Car: Car,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Official Service Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue mb-8">
            Superior Travel Solutions
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-8 opacity-30"></div>
          <p className="text-brand-blue/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Authorized logistics and visa compliance for the GCC region. We specialize in precision-managed Umrah journeys and luxury private transport.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Bus;
            const isLarge = index < 2; // Highlighting first two as primary
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-8 bg-white border border-brand-gold/5 rounded-3xl shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 flex flex-col relative overflow-hidden ${
                  isLarge ? "lg:col-span-6" : "lg:col-span-4"
                }`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000 ${
                   isLarge ? "opacity-20" : "opacity-10"
                }`}></div>
                
                <div className="flex items-start justify-between mb-10">
                   <div className="w-20 h-20 rounded-3xl bg-brand-beige flex items-center justify-center group-hover:bg-brand-blue group-hover:rotate-12 transition-all duration-700 shadow-inner">
                     <Icon className="w-10 h-10 text-brand-gold group-hover:text-brand-gold transition-colors" />
                   </div>
                   <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] bg-brand-gold/5 px-4 py-1.5 rounded-full border border-brand-gold/10">
                      {isLarge ? "Exclusive Priority" : "Standard Hub"}
                   </span>
                </div>

                <h3 className={`font-bold text-brand-blue mb-4 font-inter tracking-tight leading-tight ${
                   isLarge ? "text-2xl md:text-3xl" : "text-xl"
                }`}>
                  {service.title}
                </h3>
                <p className={`text-brand-blue/60 mb-12 leading-relaxed font-inter ${
                   isLarge ? "text-lg max-w-md" : "text-sm"
                }`}>
                  {service.description}
                </p>
                
                <Link
                  href={service.link}
                  className="mt-auto inline-flex items-center self-start px-8 py-4 rounded-2xl bg-brand-blue text-brand-white font-bold text-[10px] uppercase tracking-[0.2em] group-hover:bg-brand-gold group-hover:text-brand-blue transition-all shadow-xl"
                >
                  Explore Guidance
                  <ArrowRight className="h-4 w-4 ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
