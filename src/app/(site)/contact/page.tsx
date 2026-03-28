"use client";

import { motion } from "framer-motion";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight,
  ShieldCheck, Star, Zap, Globe, Map as MapIcon, Send
} from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink, getPhoneLink, getMailtoLink, formatPhone, BRAND_NAME } from "@/lib/constants";

import { useState } from "react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { usePathname } from "next/navigation";

/* ─── Conversion Tracking Helper ─── */
const trackEvent = (name: string, data: Record<string, unknown> = {}) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    if ((window as any).gtag) {
      (window as any).gtag("event", name, data);
    }
    // Meta Pixel
    if ((window as any).fbq) {
      (window as any).fbq("track", name, data);
    }
    console.log(`[Analytics] ${name}`, data);
  }
};

/* ─── WhatsApp SVG ─── */
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current shrink-0`} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "How fast do you reply on WhatsApp?",
    a: "Our WhatsApp team responds in under 5 minutes during business hours. For off-hours inquiries, we reply first thing the next morning.",
  },
  {
    q: "Can I book Umrah transport from outside Qatar?",
    a: "Yes! We serve pilgrims from Qatar, Pakistan, UAE, Oman, Kuwait, and worldwide. On-ground support covers Makkah, Madinah, Jeddah, and Taif.",
  },
  {
    q: "Do you process Saudi Umrah visas?",
    a: "Yes. As a fully authorized agency we issue Saudi Umrah e-visas and tourist visas — typically within 24–48 hours.",
  },
  {
    q: "Is private family transport available for Umrah?",
    a: "Absolutely. We specialise in VVIP private transport including GMC Yukon Executive and luxury bus options for any group size.",
  },
];

/* ─── Schema data ─── */
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://barkattravel.com/contact#contactpage",
      name: `Contact ${BRAND_NAME}`,
      url: "https://barkattravel.com/contact",
      description:
        "Contact Barkat Travel for Umrah transport, visa, and hotel bookings. 24/7 WhatsApp support from Doha, Islamabad, and Makkah.",
      mainEntity: { "@id": "https://barkattravel.com/#localbusiness" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://barkattravel.com/#localbusiness",
      name: BRAND_NAME,
      url: "https://barkattravel.com",
      logo: "https://barkattravel.com/logo.png",
      image: "https://barkattravel.com/hero/bg-makkah.jpg",
      priceRange: "$$",
      telephone: "+97430014213",
      email: CONTACT_INFO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.qatar.address,
        addressLocality: "Doha",
        addressCountry: "QA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2867,
        longitude: 51.5333,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: ["https://wa.me/97430014213"],
    },
  ],
};

/* ═══════════════════════════════════════════════ */
export default function ContactPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  const pathname = usePathname();

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "Private Umrah Transport",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.whatsapp) {
      setError("Please fill in the required fields (*)");
      return;
    }
    setIsSubmitting(true);
    trackEvent("contact_form_submit", { service: formData.service, source: pathname });

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          service_type: formData.service,
          travel_date: formData.date,
          additional_info: formData.message,
          source_page: pathname,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        trackEvent("contact_form_success", { service: formData.service });
      } else {
        setError("Something went wrong. Please contact us via WhatsApp.");
        trackEvent("contact_form_error");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-beige/30 min-h-screen">

      {/* ── Schema Markup: ContactPage + LocalBusiness ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* ══════════════════════════════════════════════
          HERO — above the fold
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-blue pt-44 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* ── Left: headline + primary CTAs ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                <Globe className="w-3 h-3" /> Doha · Islamabad · Makkah · Madinah
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tight">
                Connect With Our<br />
                <span className="text-brand-gold">Umrah Travel Experts</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10 font-inter mx-auto lg:mx-0">
                Premium transport, fast-track visas, luxury hotels.&nbsp;
                <span className="text-brand-gold font-bold underline decoration-brand-gold/30">
                  Under 5-minute WhatsApp response — guaranteed.
                </span>
              </p>

              {/* Social proof row */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[13, 14, 15].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-blue overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex gap-0.5 text-brand-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider mt-0.5">12,500+ Happy Pilgrims</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-brand-gold" />
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider text-left">
                    Nusuk & Qatar<br />Tourism Licensed
                  </p>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("click_whatsapp_hero")}
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-5 rounded-2xl font-black text-sm shadow-2xl hover:-translate-y-1 active:scale-95 transition-all group"
                >
                  <WhatsAppIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp — Start a Chat
                </a>
                <a
                  href={`tel:${getPhoneLink(CONTACT_INFO.qatar.phones[0])}`}
                  onClick={() => trackEvent("click_call_hero")}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-sm hover:-translate-y-1 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" /> Call: 24/7 Hotline
                </a>
              </div>
            </motion.div>

            {/* ── Right: Interactive chat widget (fills dead space) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 relative hidden lg:flex flex-col max-w-[420px]"
            >
              {/* Chat window */}
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-brand-blue px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold/40">
                        <img src="https://i.pravatar.cc/100?img=11" alt="Specialist" className="w-full h-full object-cover" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-blue rounded-full" />
                    </div>
                    <div>
                      <p className="text-white font-black text-sm">Barkat Specialist</p>
                      <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Online Now · Avg reply 4m</p>
                    </div>
                  </div>
                  <Zap className="w-4 h-4 text-brand-gold" />
                </div>

                {/* Messages */}
                <div className="bg-gray-50 px-6 py-6 space-y-4 h-[280px] flex flex-col justify-end">
                  <div className="self-start max-w-[85%] bg-white border border-gray-100 border-l-4 border-l-brand-gold p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-brand-blue">
                    As-salamu Alaykum! 👋<br />How can I assist you with Umrah transport or visa today?
                  </div>
                  <div className="self-end max-w-[85%] bg-brand-blue text-white p-4 rounded-2xl rounded-br-none shadow-sm text-sm">
                    Need a GMC for 7-person family Umrah from Doha.
                  </div>
                  <div className="self-start max-w-[85%] bg-white border border-gray-100 border-l-4 border-l-brand-gold p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-brand-blue">
                    I can arrange a GMC Yukon for your dates with priority border clearance. Let me get your details. 🕋
                  </div>
                </div>

                {/* Input row — links to WhatsApp */}
                <div className="bg-white px-4 py-3 border-t border-gray-100 flex gap-2 items-center">
                  <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-xs text-gray-400 select-none">
                    Type your message…
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("click_chat_widget")}
                    className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white hover:brightness-110 transition-all flex-shrink-0"
                    aria-label="Open WhatsApp"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-gold rounded-2xl px-5 py-3 shadow-xl border-4 border-white flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-blue" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-brand-blue/60">Verified Authority</p>
                  <p className="text-brand-blue font-black text-sm leading-none">Nusuk Authorized</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT CARDS — WhatsApp · Phone · Email
      ══════════════════════════════════════════════ */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col group"
            >
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-black text-brand-blue mb-1">WhatsApp Support</h3>
              <p className="text-xs text-brand-blue/50 mb-6 font-inter leading-relaxed flex-1">
                Fastest channel — instant quotes, visa checks, and booking confirmations.{" "}
                <span className="text-[#25D366] font-bold">Recommended.</span>
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp_card")}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-[#25D366]/20 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" /> Open WhatsApp Chat
              </a>
            </motion.div>

            {/* Phone — Click-to-Call (tel: links) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col group"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-black text-brand-blue mb-1">Call Direct 24/7</h3>
              <p className="text-xs text-brand-blue/50 mb-6 font-inter leading-relaxed flex-1">
                Speak directly with our regional operation managers — tap to dial instantly.
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${getPhoneLink(CONTACT_INFO.qatar.phones[0])}`}
                  onClick={() => trackEvent("click_call_qatar", { number: CONTACT_INFO.qatar.phones[0] })}
                  className="flex items-center justify-between w-full p-4 bg-brand-blue/5 rounded-xl hover:bg-brand-blue hover:text-white transition-all group/btn"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Qatar · Doha</span>
                  <span className="font-bold text-sm">{formatPhone(CONTACT_INFO.qatar.phones[0])}</span>
                </a>
                <a
                  href={`tel:${getPhoneLink(CONTACT_INFO.pakistan.phones[0])}`}
                  onClick={() => trackEvent("click_call_pk", { number: CONTACT_INFO.pakistan.phones[0] })}
                  className="flex items-center justify-between w-full p-4 bg-gray-50 border border-gray-100 rounded-xl hover:bg-brand-blue hover:text-white transition-all"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Pakistan · ISB</span>
                  <span className="font-bold text-sm">{formatPhone(CONTACT_INFO.pakistan.phones[0])}</span>
                </a>
              </div>
            </motion.div>

            {/* Email — Mailto link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col group"
            >
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-xl font-black text-brand-blue mb-1">Email Inquiry</h3>
              <p className="text-xs text-brand-blue/50 mb-6 font-inter leading-relaxed flex-1">
                For B2B partnerships, group invoicing, and official documentation requests.
              </p>
              <a
                href={getMailtoLink(CONTACT_INFO.email)}
                onClick={() => trackEvent("click_email", { email: CONTACT_INFO.email })}
                className="flex items-center justify-center gap-2 w-full border-2 border-brand-gold/30 text-brand-blue py-4 rounded-xl font-black text-sm tracking-wider uppercase hover:bg-brand-gold hover:border-brand-gold hover:text-brand-blue transition-all active:scale-95"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <p className="text-[10px] text-brand-blue/30 font-bold mt-3 text-center tracking-widest break-all">
                {CONTACT_INFO.email}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FORM + LOCATIONS (Maps)
      ══════════════════════════════════════════════ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* ── Left: Office locations + embedded Google Map ── */}
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl font-black text-brand-blue leading-tight mb-2">
                  Our Global<br /><span className="text-brand-gold">Stations</span>
                </h2>
                <div className="w-16 h-1.5 bg-brand-gold rounded-full" />
              </div>

              {/* Doha Office — Embedded Google Map */}
              <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-md">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-black text-brand-blue">Doha Head Office</h3>
                      <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mt-1">
                        Qatar Tourism Licensed
                      </p>
                    </div>
                    <MapPin className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
                  </div>
                  <p className="text-brand-blue/50 text-xs leading-relaxed font-inter">{CONTACT_INFO.qatar.address}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                    <Clock className="w-3.5 h-3.5" /> {CONTACT_INFO.qatar.hours}
                  </div>
                </div>

                {/* ── Google Maps Embed ── */}
                <div className="h-[240px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.457!2d51.4418!3d25.2867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d93979942f7902!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1711531752786!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barkat Travel Doha Office Location"
                  />
                </div>

                <div className="bg-brand-blue px-6 py-4 flex items-center justify-between">
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Navigate to our office</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.qatar.address + ", Doha, Qatar")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("click_map_directions")}
                    className="inline-flex items-center gap-1.5 text-brand-gold text-[10px] font-black uppercase tracking-widest hover:underline"
                  >
                    <MapIcon className="w-3.5 h-3.5" /> Get Directions
                  </a>
                </div>
              </div>

              {/* Makkah + Islamabad mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 p-6 rounded-3xl hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-black text-brand-blue">Makkah Operations</h4>
                    <MapPin className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-[11px] text-brand-blue/50 leading-relaxed mb-3">{CONTACT_INFO.saudi.address}</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 24/7 Priority
                  </div>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-3xl hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-black text-brand-blue">Islamabad Branch</h4>
                    <MapPin className="w-4 h-4 text-brand-blue/30" />
                  </div>
                  <p className="text-[11px] text-brand-blue/50 leading-relaxed mb-3">{CONTACT_INFO.pakistan.address}</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> {CONTACT_INFO.pakistan.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="flex-[1.3]">
              <div className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-brand-gold/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 pointer-events-none">
                  <Zap className="w-16 h-16 text-brand-gold/6" />
                </div>

                <div className="mb-10">
                  <h2 className="text-4xl font-black text-brand-blue mb-2">Service Inquiry</h2>
                  <p className="text-brand-blue/50 text-sm">Fill in the form — our team replies via WhatsApp in minutes.</p>
                </div>

                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-black text-brand-blue">Inquiry Submitted!</h3>
                    <p className="text-brand-blue/50 mt-2 text-sm">A specialist will contact you on WhatsApp shortly. Average response: 4m 32s.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand-gold font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {error && (
                      <div className="bg-red-50 border border-red-100 text-red-600 text-xs font-bold p-4 rounded-xl">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 ml-1">Full Name *</label>
                        <input
                          required type="text" placeholder="Abdullah Ahmad"
                          className="w-full bg-brand-beige/20 px-5 py-4 rounded-2xl border border-brand-gold/10 font-bold text-brand-blue text-sm focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all"
                          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 ml-1">WhatsApp Number *</label>
                        <input
                          required type="tel" placeholder="+974 5000 0000"
                          className="w-full bg-brand-beige/20 px-5 py-4 rounded-2xl border border-brand-gold/10 font-bold text-brand-blue text-sm focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all"
                          value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 ml-1">Service Required</label>
                        <select
                          className="w-full bg-brand-beige/20 px-5 py-4 rounded-2xl border border-brand-gold/10 font-bold text-brand-blue text-sm appearance-none outline-none"
                          value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option>Private Umrah Transport</option>
                          <option>Group Bus Service</option>
                          <option>Visa Assistance Only</option>
                          <option>Hotel + Transport Package</option>
                          <option>Corporate GCC Travel</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 ml-1">Preferred Travel Date</label>
                        <input
                          type="date"
                          className="w-full bg-brand-beige/20 px-5 py-4 rounded-2xl border border-brand-gold/10 font-bold text-brand-blue text-sm outline-none"
                          value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 ml-1">Additional Requirements</label>
                      <textarea
                        rows={4} placeholder="Group size, specific hotels, special assistance needed…"
                        className="w-full bg-brand-beige/20 px-5 py-4 rounded-2xl border border-brand-gold/10 font-medium text-brand-blue text-sm outline-none resize-none"
                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      disabled={isSubmitting} type="submit"
                      className="w-full bg-brand-blue text-white py-6 rounded-2xl font-black text-base hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
                    >
                      {isSubmitting ? "Submitting Priority Request…" : "Request Priority WhatsApp Quote"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-brand-blue/20 uppercase tracking-[0.3em]">
                      <ShieldCheck className="w-3 h-3" /> 256-bit SSL · Encrypted Submission
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-brand-gold/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Information Centre</span>
            <h2 className="text-4xl font-black text-brand-blue">Booking Support FAQ</h2>
            <p className="text-brand-blue/50 text-sm mt-3 max-w-md mx-auto leading-relaxed">
              Quick answers for pilgrims travelling from Doha, Islamabad, Muscat, and beyond.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}
