"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Bus, ChevronDown, CheckCircle2, Globe, ShieldCheck, Users,
  BadgeCheck, Zap, Star, Car, ArrowRight, MapPin, Calendar, Clock,
  Hotel, Phone, MessageCircle, ChevronLeft, ChevronRight, Quote, FileText
} from "lucide-react";
import Hero from "@/components/Hero";
import TransportRoutes from "@/components/TransportRoutes";
import ContactCTA from "@/components/ContactCTA";
import NAPSection from "@/components/NAPSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";

/* ─── Data ───────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Mohammad Ishaq",
    role: "Business Owner",
    location: "Doha, Qatar",
    initials: "MI",
    text: "Barkat Travel is my go-to for all GCC transport. Their luxury GMCs and professional drivers make the Doha–Makkah route feel like a breeze. Border clearance was seamless — no waiting.",
    stars: 5,
    tag: "Doha → Makkah",
  },
  {
    name: "Fatima Al-Sayed",
    role: "Qatar Resident",
    location: "Doha, Qatar",
    initials: "FA",
    text: "The best visa service in Qatar. Quick, reliable, and they handle everything from documentation to hotel bookings. My Umrah visa was ready in under 48 hours!",
    stars: 5,
    tag: "Umrah Visa",
  },
  {
    name: "Khalid Al-Farsi",
    role: "Family Group",
    location: "Doha, Qatar",
    initials: "KF",
    text: "We traveled as a family of 8. The GMC Yukon was immaculate, the driver was professional, and we arrived directly at our hotel door in Makkah. Zero stress.",
    stars: 5,
    tag: "VVIP GMC",
  },
  {
    name: "Amina Siddiqui",
    role: "Repeat Customer",
    location: "Doha, Qatar",
    initials: "AS",
    text: "Third time using Barkat Travel for Umrah transport. Every year they exceed expectations. The bus departure is on time, seats are comfortable, and the halts are well-planned.",
    stars: 5,
    tag: "Luxury Bus",
  },
];

const faqs = [
  {
    question: "How much does a taxi from Doha to Makkah cost?",
    answer: "The price for a taxi from Doha to Makkah varies by vehicle and group size. A shared seat on a luxury bus starts from around QAR 350 per person. A private GMC Yukon for a family group is priced per vehicle — WhatsApp us for an instant quote, we respond in under 5 minutes.",
  },
  {
    question: "How long does the journey from Doha to Makkah take by road?",
    answer: "The road journey from Doha to Makkah takes approximately 14–16 hours. By private GMC with our priority border clearance at Abu Samra / Salwa, we aim to reach Makkah in around 14 hours. Our luxury bus service takes 15–18 hours including scheduled prayer, meal, and rest stops.",
  },
  {
    question: "Is the Qatar–Saudi Arabia border crossing (Abu Samra) easy?",
    answer: "Yes — with Barkat Travel it is. We pre-manifest all passenger documents 24 hours before departure, which allows us to use priority clearance lanes at the Abu Samra / Salwa border crossing. This significantly reduces waiting time compared to individual travelers queuing at the border.",
  },
  {
    question: "Can Qatar residents book Umrah transport from Barkat Travel?",
    answer: "Yes, absolutely. We specialize in Umrah transport for Qatar residents and expats of all nationalities. We offer both private GMC transfers and luxury bus departures from Doha directly to Makkah and Madinah. We also assist with Saudi e-visa and Nusuk registration.",
  },
  {
    question: "Do you provide Saudi Umrah visa from Qatar?",
    answer: "Yes. We are a licensed agency offering fast-track Saudi Umrah e-visa processing for Qatar residents. We handle all documentation, Nusuk ID synchronization, and portal submission — visas are typically ready within 24–48 hours. All nationalities residing in Qatar are eligible.",
  },
  {
    question: "What vehicles are available for Doha to Makkah & Madinah transport?",
    answer: "We operate a comprehensive fleet: Toyota Camry (4 Pax), Hyundai Staria & Starex (7 Pax minivans), GMC Yukon (7 Pax luxury SUV), Toyota Hiace (11 Pax), and Coaster Buses (17 Pax). All vehicles are air-conditioned, well-maintained, and equipped for long journeys.",
  },
  {
    question: "Do you offer internal Saudi transport (Makkah to Madinah, Jeddah, Taif)?",
    answer: "Yes! In addition to Qatar to Saudi travel, we provide secure and direct internal Ziyarat transfers. We offer daily transport from Makkah to Madinah, Makkah to Jeddah Airport, and Makkah to Taif Ziyarat tours in our modern vehicles.",
  },
  {
    question: "Can you book hotels near the Haram in Makkah or Madinah?",
    answer: "Yes. We offer direct hotel bookings in Makkah and Madinah, ranging from VVIP suites (Fairmont, Hilton, Pullman Clock Tower) to budget-friendly options — all within walking distance of the Haramain.",
  },
  {
    question: "What are the requirements for Qatar residents to apply for an Umrah visa?",
    answer: "Qatar residents need to provide a clear copy of their Qatar ID (front and back), a Passport copy valid for at least 6 months, 2 recent passport-sized photographs (white background), and a copy of their residential permit or entry visa.",
  },
  {
    question: "Can residents of Pakistan and Philippines apply for Umrah via NUSUK from Qatar?",
    answer: "Yes, residents of Pakistan and the Philippines can apply for an Umrah visa through the NUSUK app or seek assistance for personal visits. Barkat Travel provides full support for these nationalities to ensure a smooth application and approval process.",
  },
  {
    question: "Can Qatar residents travel to Makkah in their own private cars?",
    answer: "Yes, Qatar residents can travel by their own car. Requirements: The car must be registered in the driver's name or have valid authorization, and mandatory Saudi health insurance plus comprehensive car insurance are required for crossing the border.",
  },
  {
    question: "Is Barkat Travel a certified and authorized Umrah travel agency?",
    answer: "Yes, Barkat Travel is fully authorized and licensed by Qatar Tourism and the Saudi Ministry of Hajj & Umrah. We are an official agency providing verified visa, transport, and hotel services for pilgrims from Qatar and Pakistan.",
  },
];

const popularRoutes = [
  {
    from: "Doha",
    to: "Makkah",
    duration: "~14h",
    frequency: "Daily",
    badge: "Most Popular",
    badgeColor: "bg-brand-gold text-brand-blue",
    link: "/transport/doha-to-makkah/",
    description: "Doha to Makkah Taxi Service — private luxury transport for Umrah pilgrims from Qatar to Makkah with professional drivers, priority border clearance at Abu Samra, and direct drop at your hotel.",
    price: "Starting from 450 QR",
  },
  {
    from: "Doha",
    to: "Madinah",
    duration: "~16h",
    frequency: "Weekly",
    badge: "Umrah Special",
    badgeColor: "bg-brand-blue text-white",
    link: "/transport/doha-to-madinah/",
    description: "Qatar to Madinah Umrah transport — direct private GMC or group bus from Doha to Al-Madinah Al-Munawwarah. Comfortable, safe and door-to-door.",
    price: "Starting from 550 QR",
  },
  {
    from: "Makkah",
    to: "Madinah",
    duration: "~4.5h",
    frequency: "Daily Ziyarat",
    badge: "Internal Ziyarat",
    badgeColor: "bg-emerald-700 text-white",
    link: "/transport/",
    description: "Makkah to Madinah secure VIP transfer — travel between the two Holy holy cities in our modern fleet.",
    price: "Contact for rates",
  },
];

const whyUsPoints = [
  {
    icon: <ShieldCheck className="text-brand-gold" size={28} />,
    title: "Priority Border Clearance",
    desc: "We pre-manifest all passengers 24h in advance for fast-lane processing at Abu Samra / Salwa crossings.",
  },
  {
    icon: <Zap className="text-brand-gold" size={28} />,
    title: "GPS-Tracked Fleet",
    desc: "Every vehicle is monitored 24/7 from our Doha command center. Your family's safety is never compromised.",
  },
  {
    icon: <Globe className="text-brand-gold" size={28} />,
    title: "Visa in 48 Hours",
    desc: "Fast-track Saudi Umrah visa processing with Nusuk synchronization — fully managed by our licensed team.",
  },
  {
    icon: <Hotel className="text-brand-gold" size={28} />,
    title: "Central Hotel Bookings",
    desc: "Direct proximity bookings in Makkah and Madinah — from Fairmont VVIP suites to budget stays.",
  },
  {
    icon: <Users className="text-brand-gold" size={28} />,
    title: "Multilingual Chauffeurs",
    desc: "Professional drivers trained in GCC cross-border protocols. Arabic, Urdu & English spoken.",
  },
  {
    icon: <BadgeCheck className="text-brand-gold" size={28} />,
    title: "Fully Licensed & Authorized",
    desc: "Saudi Nusuk authorized, Qatar Tourism licensed (QT-45921), and Mowasalat approved operator.",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup schemaType="TravelAgency" />
      <SchemaMarkup
        schemaType="LocalBusiness"
        data={{
          ...CONTACT_INFO.qatar,
          reviews: testimonials,
          rating: "4.9",
          reviewCount: "1250",
        }}
      />

      {/* 1️⃣ HERO */}
      <Hero />

      {/* 2️⃣ INSTANT QUOTE STRIP */}
      <QuoteStrip />

      {/* 3️⃣ POPULAR ROUTES */}
      <PopularRoutes />

      {/* 4️⃣ WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 5️⃣ FLEET SHOWCASE */}
      <FleetShowcase />

      {/* 6️⃣ SOCIAL PROOF / REVIEWS */}
      <ReviewsSection />

      {/* 7️⃣ UMRAH TRANSPORT GUIDE */}
      <UmrahGuide />

      {/* 8️⃣ FAQ */}
      <FAQSection />

      {/* 9️⃣ CTA BANNER */}
      <CTABanner />

      <ContactCTA />
    </>
  );
}

/* ─── 2. Instant Quote Strip ──────────────────────────────────── */
function QuoteStrip() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  return (
    <div className="bg-brand-blue border-b border-brand-gold/20">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            <p className="text-sm font-bold">
              <span className="text-brand-gold">250+ pilgrims</span> booked this month — spots filling fast
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/get-quote/"
              className="bg-brand-gold text-brand-blue px-7 py-3 rounded-xl font-black text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle size={16} /> Get Instant Quote
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-7 py-3 rounded-xl font-black text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 3. Popular Routes ────────────────────────────────────────── */
function PopularRoutes() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  return (
    <section className="py-16 bg-brand-white" id="routes">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
            Popular Routes
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-brand-blue mb-4 tracking-tight">
            Doha → Makkah & Madinah
          </h2>
          <p className="text-brand-blue/60 text-lg font-inter">
            Direct luxury transport from Qatar to Saudi Arabia — private GMC or group bus, daily departures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {popularRoutes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-brand-gold/10 shadow-lg hover:shadow-2xl transition-all overflow-hidden group flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-brand-blue p-6 relative">
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${route.badgeColor}`}>
                  {route.badge}
                </span>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{route.from} →</p>
                    <p className="text-2xl font-black tracking-tight">{route.to}</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-white/70 text-xs">
                    <Clock size={13} className="text-brand-gold" />
                    <span>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/70 text-xs">
                    <Calendar size={13} className="text-brand-gold" />
                    <span>{route.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-brand-blue/70 text-sm leading-relaxed mb-4 flex-1">{route.description}</p>
                <div className="text-brand-gold font-black text-sm mb-5">{route.price}</div>
                <div className="flex gap-3">
                  <Link
                    href={route.link}
                    className="flex-1 bg-brand-blue text-white text-center py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-blue transition-all"
                  >
                    Book Now
                  </Link>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white text-center py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-links for SEO */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            { label: "Qatar to Makkah Taxi", href: "/transport/doha-to-makkah/" },
            { label: "Qatar to Madinah Transport", href: "/transport/doha-to-madinah/" },
            { label: "Umrah Taxi Qatar", href: "/transport/" },
            { label: "VIP Umrah Transport Doha", href: "/transport/" },
            { label: "Doha to Riyadh Transfer", href: "/transport/" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue text-xs font-medium hover:bg-brand-blue hover:text-white transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. Why Choose Us ─────────────────────────────────────────── */
function WhyChooseUs() {
  return (
    <section className="py-16 bg-brand-blue/5 border-y border-brand-gold/10" id="why-us">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
            The Barkat Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-brand-blue mb-4 tracking-tight">
            Why Pilgrims Worldwide <span className="text-brand-gold">Trust Us</span>
          </h2>
          <p className="text-brand-blue/60 text-lg font-inter">
            Established 2008. 15+ years of seamless GCC travel management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyUsPoints.map((pt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-7 rounded-2xl border border-brand-gold/10 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-brand-gold/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-500">
                {pt.icon}
              </div>
              <h3 className="text-lg font-black font-inter text-brand-blue mb-2 tracking-tight">{pt.title}</h3>
              <p className="text-brand-blue/60 text-sm leading-relaxed font-inter">{pt.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-4xl mx-auto">
          {[
            { num: "15+", label: "Years in Operation" },
            { num: "250+", label: "Monthly Pilgrims" },
            { num: "4.9★", label: "Average Rating" },
            { num: "24/7", label: "Ground Support" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-black font-inter text-brand-gold">{s.num}</p>
              <p className="text-brand-blue/60 text-xs uppercase tracking-widest font-bold mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. Fleet Showcase ────────────────────────────────────────── */
function FleetShowcase() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  return (
    <section className="py-16 bg-brand-blue relative overflow-hidden" id="fleet">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-[10px] font-bold tracking-[0.2em] uppercase">
              Flagship Fleet
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-white mb-6 tracking-tight">
              GMC Yukon <span className="text-brand-gold">Executive</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 font-inter">
              Travel in a private, luxury cabin from your doorstep in Doha to your hotel in Makkah or Madinah. No shared transport. No strangers.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Tri-zone climate control for desert comfort",
                "High-speed in-vehicle Wi-Fi",
                "Full privacy glass — ideal for families",
                "GPS-tracked, professional chauffeur",
                "Priority border clearance included",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 size={16} className="text-brand-gold flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/fleet/"
                className="bg-brand-gold text-brand-blue px-8 py-4 rounded-xl font-black text-sm hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                View Full Fleet <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> Book GMC Now
              </a>
            </div>
          </div>

          {/* Right: Vehicle Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-[80px]" />
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
              alt="GMC Yukon Executive luxury transport Doha to Makkah"
              className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* floating badge */}
            <div className="absolute bottom-4 left-4 z-20 bg-white rounded-2xl p-4 shadow-xl">
              <p className="text-[10px] font-black text-brand-blue/50 uppercase tracking-widest mb-1">Seats Available</p>
              <p className="text-2xl font-black text-brand-gold">6–8 Pax</p>
              <p className="text-[10px] text-brand-blue/50">per GMC Yukon</p>
            </div>
          </div>
        </div>

        {/* Vehicle Fleet Grid */}
        <div className="mt-14 pt-14 border-t border-white/10">
          <h3 className="text-white font-black text-xl mb-8 text-center">Full Fleet — All Vehicle Types</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Car size={24} />, title: "Toyota Camry", pax: "4 Pax", desc: "Comfortable and efficient sedan. Perfect for small families and intercity trips." },
              { icon: <Car size={24} />, title: "Hyundai Staria", pax: "7 Pax", desc: "Premium luxury minivan — reclining captain seats, panoramic sunroof, smooth ride." },
              { icon: <Users size={24} />, title: "Hyundai Starex", pax: "7 Pax", desc: "Spacious and economical minivan for family and group Umrah travel." },
              { icon: <Car size={24} />, title: "GMC Yukon Executive", pax: "7 Pax", desc: "VVIP private cabin, tri-zone AC, WiFi, privacy glass. Best for luxury travel." },
              { icon: <Users size={24} />, title: "Toyota Hiace", pax: "11 Pax", desc: "Spacious and reliable. Ideal for medium-sized groups traveling across Saudi Arabia." },
              { icon: <Bus size={24} />, title: "Coaster Bus", pax: "17 Pax", desc: "Luxury minibus for larger Umrah groups. Reclining seats, AC, and Wi-Fi included." },
            ].map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-gold mb-4">
                  {v.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-white font-black text-sm">{v.title}</h4>
                  <span className="bg-brand-gold/20 text-brand-gold text-[10px] font-bold px-2 py-0.5 rounded-full">{v.pax}</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. Reviews Section ───────────────────────────────────────── */
function ReviewsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

  return (
    <section className="py-16 bg-brand-white" id="reviews">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
            Real Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-brand-blue mb-4 tracking-tight">
            Trusted by <span className="text-brand-gold">1,250+ Pilgrims</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#B88E2F" className="text-brand-gold" />
            ))}
            <span className="ml-2 text-brand-blue font-black text-lg">4.9</span>
            <span className="text-brand-blue/40 text-sm ml-1">/ 5.0</span>
          </div>
          <p className="text-brand-blue/50 text-xs font-bold uppercase tracking-widest">
            Based on 1,250+ verified bookings
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-brand-blue rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-6 right-8 text-white/5">
                <Quote size={80} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#B88E2F" className="text-brand-gold" />
                ))}
              </div>
              <blockquote className="text-white text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center font-black text-brand-gold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-black font-inter text-white tracking-tight">{t.name}</p>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{t.role} · {t.location}</p>
                  </div>
                </div>
                <span className="hidden sm:block px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] font-bold uppercase tracking-widest">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-brand-gold" : "w-2 bg-brand-blue/20"}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
          {[
            { icon: <Shield size={24} />, label: "Saudi Nusuk", sub: "Authorized" },
            { icon: <BadgeCheck size={24} />, label: "Qatar Tourism", sub: "Licensed QT-45921" },
            { icon: <Car size={24} />, label: "Mowasalat", sub: "Approved Operator" },
            { icon: <Star size={24} />, label: "Hajj & Umrah", sub: "Regional Agency" },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-brand-blue/5 border border-brand-gold/10 rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-brand-blue hover:border-brand-blue transition-all"
            >
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center text-brand-gold mb-3 group-hover:bg-white/10 transition-all">
                {b.icon}
              </div>
              <p className="font-black text-brand-blue group-hover:text-white text-sm transition-colors">{b.label}</p>
              <p className="text-brand-blue/50 group-hover:text-white/50 text-[10px] uppercase tracking-widest font-bold transition-colors">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. Umrah Transport Guide ─────────────────────────────────── */
function UmrahGuide() {
  const stages = [
    {
      title: "1. Documentation",
      desc: "Prepare your Qatar ID and Passport. We process your Saudi Umrah e-visa and synchronize your Unified ID with the Nusuk portal within 24-48 hours.",
      icon: <FileText className="text-brand-gold" size={32} />,
      details: ["QID & Passport Copy", "Passport Photos", "Umrah E-Visa Filing", "Nusuk Sync"]
    },
    {
      title: "2. Vehicle Selection",
      desc: "Choose between a private GMC Yukon for family privacy or a luxury group bus. All vehicles are climate-controlled and GPS-monitored.",
      icon: <Car className="text-brand-gold" size={32} />,
      details: ["Private GMC Yukon", "Luxury 45-Seat Bus", "GPS & Safety Tracked", "In-Car Wi-Fi"]
    },
    {
      title: "3. Salwa Border",
      desc: "Our vehicles utilize priority manifest lanes at the Abu Samra (Qatar) and Salwa (Saudi) borders. We handle all manifest paperwork in advance.",
      icon: <ShieldCheck className="text-brand-gold" size={32} />,
      details: ["Pre-filled Manifests", "Priority Clearance", "Border Tax Support", "Resident Lane Usage"]
    },
    {
      title: "4. Sacred Arrival",
      desc: "Direct drop-off at your hotel in Makkah or Madinah. We provide 24/7 on-ground support and assistance with Nusuk app prayer slots.",
      icon: <MapPin className="text-brand-gold" size={32} />,
      details: ["Door-to-Door Transit", "Haram Proximity Drop", "Nusuk App Guidance", "Ziyarat Available"]
    }
  ];

  return (
    <section className="py-24 bg-brand-white relative overflow-hidden" id="guide">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full -mr-64 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full -ml-64 -mb-32 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-brand-blue/5 text-brand-blue border border-brand-blue/10 text-[10px] font-black tracking-[0.2em] uppercase">
            Start to Finish
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-inter text-brand-blue mb-6 tracking-tight">
            Your Comprehensive <span className="text-brand-gold">Umrah Journey Guide</span>
          </h2>
          <p className="text-brand-blue/60 text-lg leading-relaxed font-inter">
            From your doorstep in Doha to the Holy Haram in Makkah — we manage every detail of your spiritual transit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-[2.5rem] border border-brand-gold/10 p-8 shadow-xl hover:shadow-2xl hover:border-brand-gold/30 transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {stage.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-brand-blue mb-4 tracking-tight">
                {stage.title}
              </h3>
              
              <p className="text-brand-blue/60 text-sm leading-relaxed mb-8 flex-grow">
                {stage.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-brand-gold/5">
                {stage.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                    <span className="text-[11px] font-bold text-brand-blue/40 uppercase tracking-widest">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Text Content - Relocated for better UX */}
        <div className="mt-20 p-10 bg-brand-blue rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            <div className="lg:col-span-2">
              <h4 className="text-brand-gold font-black text-2xl mb-6 tracking-tight">Expert Guidance for Doha Pilgrims</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70 text-sm leading-relaxed">
                <p>
                  Since 2008, Barkat Travel has been the trusted name for <strong className="text-white">Umrah transport from Qatar</strong>. We operate daily luxury bus services and private VVIP GMC Yukons directly from Doha to Makkah. Our expertise lies in managing the complex Salwa boundary manifests in advance, ensuring your group crosses into Saudi Arabia with zero delays.
                </p>
                <p>
                  Every journey includes GPS tracking and 24/7 command center monitoring. Whether you are an expat resident from Pakistan, India, or Egypt, or a Qatari national, we provide complete <strong className="text-white">Doha to Saudi transport</strong> compliance. From your 48-hour e-visa issuance to hotel bookings within walking distance of the Haram, we are your official pilgrimage partner.
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex flex-col justify-center text-center">
              <p className="text-brand-gold font-black text-4xl mb-2">12+ Years</p>
              <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Of Trusted Service</p>
              <Link
                href="/get-quote/"
                className="w-full bg-brand-gold text-brand-blue py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all font-inter"
              >
                Inquire Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── 8. FAQ Section ───────────────────────────────────────────── */
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-brand-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-brand-blue mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="text-brand-blue/60 font-inter">
            Everything you need to know about Umrah transport from Qatar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-brand-gold/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 group"
              >
                <h3 className="font-bold text-brand-blue text-sm md:text-base leading-snug group-hover:text-brand-gold transition-colors">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 text-brand-gold/60 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-brand-blue/70 text-sm leading-relaxed border-l-2 border-brand-gold/30 ml-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 9. CTA Banner ────────────────────────────────────────────── */
function CTABanner() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);
  return (
    <section className="py-16 bg-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-gold/5 -skew-y-3 scale-110 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-[10px] font-bold tracking-[0.2em] uppercase">
            Ready to Travel?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-inter text-white mb-6 leading-tight tracking-tight">
            Book Your Umrah Transport <br />
            <span className="text-brand-gold">from Qatar Today</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-inter">
            Join 250+ pilgrims who travel monthly with Barkat Travel. Private GMC, luxury bus, visa & hotel — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-quote/"
              className="bg-brand-gold text-brand-blue px-10 py-5 rounded-2xl font-black text-base hover:brightness-110 transition-all shadow-[0_20px_50px_rgba(184,142,47,0.3)] flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} /> Get Instant Quote
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-base hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </a>
            <a
              href={`tel:${CONTACT_INFO.qatar.phones[0]}`}
              className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={20} /> Direct Call
            </a>
          </div>
          <p className="text-white/30 text-xs mt-8 font-bold uppercase tracking-widest">
            Typically replies in 5 minutes · Available 24/7
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared Icon ───────────────────────────────────────────────── */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
