"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink, formatPhone } from "@/lib/constants";

interface ContactCTAProps {
  title?: string;
}

export default function ContactCTA({ title }: ContactCTAProps) {
  return (
    <section className="py-24 bg-brand-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-brand-blue rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-gold mb-6 leading-tight">
                {title || "Plan Your Blessed Journey Today"}
              </h2>
              <p className="text-brand-white/80 text-lg mb-10 max-w-xl">
                Whether it's for Umrah or GCC travel, our team is ready to assist you with the best rates and professional service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-start">
                  <div className="p-3 bg-brand-gold/10 rounded-xl mr-4 border border-brand-gold/20">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">Call Us (Qatar)</p>
                    <a href={`tel:${CONTACT_INFO.qatar.phones[0]}`} className="text-brand-white font-bold text-lg hover:text-brand-gold transition-colors">
                      {formatPhone(CONTACT_INFO.qatar.phones[0])}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 bg-brand-gold/10 rounded-xl mr-4 border border-brand-gold/20">
                    <MessageSquare className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">WhatsApp</p>
                    <a href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])} className="text-brand-white font-bold text-lg hover:text-brand-gold transition-colors">
                      Chat with Agent
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/get-quote"
                  className="bg-brand-gold text-brand-blue px-12 py-4 rounded-full font-bold text-lg hover:bg-brand-white transition-all text-center flex-1"
                >
                  Get a Price Quote
                </a>
              </div>
            </div>

            <div className="bg-brand-white/5 backdrop-blur-md rounded-3xl p-8 border border-brand-white/10 md:p-12 shadow-inner">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-black font-inter text-brand-gold mb-6 border-b border-brand-white/10 pb-4">Scan to Chat</h3>
                  <p className="text-brand-white/80 text-lg leading-relaxed mb-8 font-inter">
                    Scan the QR code to instantly start a conversation with our Umrah experts on WhatsApp.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-brand-white/60">
                      <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                      <span className="text-sm font-bold uppercase tracking-widest">Instant Quotes</span>
                    </div>
                    <div className="flex items-center gap-4 text-brand-white/60">
                      <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                      <span className="text-sm font-bold uppercase tracking-widest">Nusuk Support</span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 bg-white p-4 rounded-3xl shadow-2xl border-4 border-brand-gold/20">
                  <div className="w-40 h-40 bg-brand-white rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Mock QR Code SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue fill-current">
                      <rect x="10" y="10" width="20" height="20" />
                      <rect x="10" y="70" width="20" height="20" />
                      <rect x="70" y="10" width="20" height="20" />
                      <rect x="15" y="15" width="10" height="10" fill="white" />
                      <rect x="15" y="75" width="10" height="10" fill="white" />
                      <rect x="75" y="15" width="10" height="10" fill="white" />
                      <rect x="40" y="10" width="10" height="10" />
                      <rect x="10" y="40" width="10" height="10" />
                      <rect x="40" y="40" width="20" height="20" />
                      <rect x="70" y="40" width="10" height="10" />
                      <rect x="40" y="70" width="10" height="10" />
                      <rect x="70" y="70" width="20" height="20" />
                      <rect x="55" y="10" width="10" height="10" />
                      <rect x="10" y="55" width="10" height="10" />
                    </svg>
                    <div className="absolute inset-x-0 bottom-0 bg-brand-blue py-1 text-center">
                      <span className="text-[10px] font-black text-brand-gold tracking-widest uppercase">Barkat</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-brand-blue/40 font-black text-center mt-3 uppercase tracking-tighter">Scan to WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
