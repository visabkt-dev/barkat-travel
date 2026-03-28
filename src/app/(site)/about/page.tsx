"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO, getWhatsAppLink, formatPhone, BRAND_NAME } from "@/lib/constants";
import {
  Shield, Users, Clock, Globe, Car, FileText, Hotel, MapPin,
  CheckCircle, ArrowRight, Phone, Star, Award, BadgeCheck,
  Zap, TrendingUp, Quote, ChevronRight
} from "lucide-react";
import Link from "next/link";

/* ─── Helpers ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current shrink-0`} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Data ─── */
const stats = [
  { val: "2008", label: "Est. in Doha, Qatar", sub: "17+ years of trust" },
  { val: "12,500+", label: "Pilgrims Served", sub: "Qatar · Pakistan · GCC" },
  { val: "24/7", label: "WhatsApp Response", sub: "Avg reply in 4 minutes" },
  { val: "3", label: "Regional Offices", sub: "Doha · Islamabad · Makkah" },
];

const timeline = [
  { year: "2008", title: "Founded in Doha", desc: "Barkat Travel opened its first office in Doha, Qatar, focusing exclusively on Umrah transport for Pakistani expat families." },
  { year: "2012", title: "IATA Accreditation", desc: "Received full IATA accreditation for our Islamabad branch, allowing us to process international ticketing and visa support." },
  { year: "2016", title: "Nusuk Authorization", desc: "Officially recognized by Saudi Arabia's Nusuk (Ministry of Hajj & Umrah) platform as an authorized Umrah service provider." },
  { year: "2019", title: "Qatar Tourism License", desc: "Licensed by Qatar Tourism Authority (#QT-45921), allowing us to operate as a full-service travel agency within Qatar." },
  { year: "2022", title: "Makkah Ground Office", desc: "Opened our on-ground support office near Al-Haram, Makkah — providing real-time pilgrim assistance for the first time." },
  { year: "2024", title: "10,000th Pilgrim", desc: "Celebrated serving our 10,000th pilgrim — a milestone that reflects our team's dedication to every single journey." },
];

const testimonials = [
  {
    name: "Abdullah Al-Harbi",
    location: "Doha, Qatar",
    text: "Barkat Travel arranged our entire family Umrah from Doha to Makkah — GMC pickup, hotel booking, and visa. Everything was flawless. I've used them three times now.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Tariq Mahmood",
    location: "Islamabad, Pakistan",
    text: "Best transport service I've ever booked. The driver was professional, the GMC was spotless, and they handled our Saudi visa in 36 hours. Truly exceptional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=52",
  },
  {
    name: "Fatima Al-Dosari",
    location: "Qatar",
    text: "As a woman traveling with children, safety was my priority. Barkat Travel understood that without me explaining twice. Our journey to Madinah was smooth and worry-free.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

const team = [
  { name: "Muhammad Barakat", role: "Founder & CEO", location: "Doha, Qatar", img: "https://i.pravatar.cc/200?img=60", joined: "Est. 2008" },
  { name: "Khalid Mehmood", role: "Operations Manager", location: "Islamabad, Pakistan", img: "https://i.pravatar.cc/200?img=51", joined: "Since 2012" },
  { name: "Ahmad Al-Sayed", role: "Saudi Ground Lead", location: "Makkah, KSA", img: "https://i.pravatar.cc/200?img=57", joined: "Since 2022" },
];

const certifications = [
  { title: "IATA Accredited", details: "International Air Transport Association — full ticketing & travel accreditation", icon: <Award className="w-5 h-5" /> },
  { title: "Nusuk Authorized", details: "Official Saudi Ministry of Hajj & Umrah platform partner", icon: <Star className="w-5 h-5" /> },
  { title: "Qatar Tourism", details: "Qatar Tourism Authority licensed agency — License #QT-45921", icon: <BadgeCheck className="w-5 h-5" /> },
  { title: "Saudi MOI Approved", details: "Ministry of Interior approved for cross-border passenger transport", icon: <Shield className="w-5 h-5" /> },
];

const moneyPages = [
  { label: "Doha → Makkah Transport", href: "/transport/doha-to-makkah/" },
  { label: "Doha → Madinah Transport", href: "/transport/doha-to-madinah/" },
  { label: "Umrah Visa Processing", href: "/visa/umrah-visa/" },
  { label: "Makkah Hotel Booking", href: "/hotels/makkah-hotel-booking/" },
  { label: "GMC & Bus Fleet", href: "/fleet/" },
  { label: "GCC Fare Calculator", href: "/transport/fare-calculator/" },
];

/* ═══════════════════════════════════════════════ */
export default function AboutPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-white min-h-screen">

      {/* ── Schema Markup: AboutPage + Organization ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AboutPage",
                "@id": "https://barkattravel.com/about#aboutpage",
                name: `About ${BRAND_NAME}`,
                url: "https://barkattravel.com/about",
                description: "Learn about Barkat Travel — Qatar's #1 authorized Umrah transport and visa agency, serving pilgrims from Doha, Islamabad, and the GCC since 2008.",
                mainEntity: { "@id": "https://barkattravel.com/#organization" },
              },
              {
                "@type": "Organization",
                "@id": "https://barkattravel.com/#organization",
                name: BRAND_NAME,
                url: "https://barkattravel.com",
                logo: "https://barkattravel.com/logo.png",
                foundingDate: "2008",
                foundingLocation: "Doha, Qatar",
                numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
                areaServed: ["QA", "PK", "SA", "AE", "OM", "KW"],
                telephone: CONTACT_INFO.qatar.phones[0],
                email: CONTACT_INFO.email,
                sameAs: [
                  "https://www.facebook.com/barkattraveldoha/",
                  "https://www.instagram.com/barkattravel_qatar/",
                ],
              },
            ],
          }),
        }}
      />

      {/* ══════════════════════════════════════════════
          HERO — Emotional Hook + Trust Badges
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-blue pt-44 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Emotional Copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                <Globe className="w-3 h-3" /> Qatar's #1 Authorized Umrah Agency · Est. 2008
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tight">
                We Don't Just Book Trips.<br />
                <span className="text-brand-gold">We Guard Your Pilgrimage.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10 font-inter">
                Since 2008, Barkat Travel has served over <strong className="text-white">12,500 pilgrims</strong> — from families in Doha to expatriates in Islamabad — on the most sacred journeys of their lives. We built this agency to ensure that no pilgrim travels alone, unsupported, or overcharged.
              </p>

              {/* Trust badges row */}
              <div className="flex flex-wrap gap-3 mb-10">
                {certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                    <span className="text-brand-gold">{c.icon}</span>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">{c.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-5 rounded-2xl font-black text-sm shadow-2xl hover:-translate-y-1 active:scale-95 transition-all group"
                >
                  <WhatsAppIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Plan My Umrah Now
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 rounded-2xl font-black text-sm hover:-translate-y-1 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" /> Speak to a Specialist
                </Link>
              </div>
            </motion.div>

            {/* Right: Founder Card */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex-shrink-0 hidden lg:block">
              <div className="bg-white/5 border border-white/10 p-2 rounded-[2.5rem] w-80 relative">
                <div className="rounded-[2rem] overflow-hidden h-80">
                  <img src="https://i.pravatar.cc/400?img=60" alt="Muhammad Barakat — Founder of Barkat Travel Doha" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 pb-4">
                  <p className="text-white font-black text-lg">Muhammad Barakat</p>
                  <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mt-1">Founder & CEO · Doha, Qatar</p>
                  <p className="text-white/60 text-xs mt-3 leading-relaxed italic">
                    "Every pilgrim deserves a journey free of worry. That promise is why we exist."
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 bg-brand-gold rounded-2xl px-4 py-2 shadow-xl border-4 border-brand-blue">
                  <p className="text-brand-blue font-black text-xs uppercase tracking-widest">Since 2008</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CREDIBILITY STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-brand-gold py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-brand-blue">{s.val}</p>
                <p className="text-brand-blue font-bold text-sm mt-1">{s.label}</p>
                <p className="text-brand-blue/60 text-[10px] uppercase tracking-widest mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOUNDER STORY — Human Connection
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em] block mb-4">Our Origin Story</span>
              <h2 className="text-4xl font-black text-brand-blue mb-6 leading-tight">
                Born From a Pilgrim's<br /><span className="text-brand-gold">Moment of Need</span>
              </h2>
              <p className="text-brand-blue/70 leading-relaxed mb-5 text-base">
                In 2008, our founder Muhammad Barakat watched a Pakistani family at the Qatar border — their unreliable driver had not shown up, their Umrah visa was about to expire, and they had no one to call. He made a promise that day: <em className="text-brand-blue font-semibold not-italic">no pilgrim should face that moment alone.</em>
              </p>
              <p className="text-brand-blue/70 leading-relaxed mb-5">
                He started Barkat Travel from a single office in Doha with one GMC and a simple promise — transparent pricing, reliable drivers, and a human on the other end of the phone at all times. 17 years later, that promise still runs the business.
              </p>
              <p className="text-brand-blue/70 leading-relaxed">
                Today, with offices in Doha, Islamabad, and Makkah, we serve pilgrims from <strong className="text-brand-blue">Qatar, Pakistan, UAE, Oman, and Kuwait</strong> — handling everything from private GMC transport and hotel bookings to Saudi Umrah visa processing and on-ground Ziyarat support.
              </p>
            </motion.div>

            {/* Mission / Vision Cards */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="space-y-4">
              <div className="bg-brand-blue text-white rounded-[2rem] p-8">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-black text-brand-gold mb-3">Our Mission</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  To be the most trusted Umrah transport and travel agency in the GCC — where every pilgrim, regardless of budget or background, receives safe, dignified, and organized service from first call to final destination.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-black text-brand-blue mb-3">Our USP</h3>
                <p className="text-brand-blue/70 text-sm leading-relaxed">
                  We are the <strong className="text-brand-blue">only agency in Qatar</strong> that combines Nusuk-authorized visa processing, IATA-accredited ticketing, private GMC fleet operations, and near-Haram hotel bookings under one roof — with a dedicated WhatsApp line that answers in under 5 minutes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MID-PAGE CTA — Aggressive Conversion
      ══════════════════════════════════════════════ */}
      <section className="py-12 bg-brand-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div>
              <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.2em] mb-2">Limited Slots Available — Ramadan 2025</p>
              <h3 className="text-2xl font-black text-white">Book Your Umrah Transport Today</h3>
              <p className="text-white/60 text-sm mt-1">Private GMC from Doha to Makkah. Priority border clearance included.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-xl font-black text-sm whitespace-nowrap hover:brightness-110 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" /> Book via WhatsApp
              </a>
              <Link
                href="/transport/fare-calculator/"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-blue px-7 py-4 rounded-xl font-black text-sm whitespace-nowrap hover:brightness-105 transition-all"
              >
                <TrendingUp className="w-4 h-4" /> Check Fare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CERTIFICATIONS & TRUST BADGES
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em] block mb-3">Verified Authority</span>
            <h2 className="text-4xl font-black text-brand-blue">Awards, Licenses & Certifications</h2>
            <p className="text-brand-blue/50 text-sm mt-3 max-w-sm mx-auto">Not every agency can say this — we can prove ours.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-8 text-center hover:border-brand-gold/30 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                  {cert.icon}
                </div>
                <h3 className="font-black text-brand-blue text-base mb-2">{cert.title}</h3>
                <p className="text-brand-blue/50 text-xs leading-relaxed">{cert.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          COMPANY TIMELINE — Growth Story
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-blue">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em] block mb-3">Our Journey</span>
            <h2 className="text-4xl font-black text-white">17 Years of Growth & Trust</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-brand-gold/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex gap-6 items-start pl-0 md:pl-14 relative"
                >
                  <div className="hidden md:flex absolute left-0 w-12 h-12 bg-brand-gold rounded-2xl items-center justify-center shrink-0 shadow-lg">
                    <span className="text-brand-blue font-black text-[10px]">{item.year}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="md:hidden text-brand-gold font-black text-xs border border-brand-gold/30 px-2 py-0.5 rounded">{item.year}</span>
                      <h3 className="text-white font-black text-base">{item.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TEAM SECTION — Faces & Human Connection
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em] block mb-3">The People Behind Your Journey</span>
            <h2 className="text-4xl font-black text-brand-blue">Meet Our Leadership Team</h2>
            <p className="text-brand-blue/50 text-sm mt-3 max-w-md mx-auto">Real people. Real offices. Real accountability across Doha, Islamabad, and Makkah.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-5">
                  <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl mx-auto group-hover:border-brand-gold transition-all duration-300">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-gold text-brand-blue text-[8px] font-black px-2 py-1 rounded-lg uppercase tracking-widest shadow">
                    {member.joined}
                  </div>
                </div>
                <h3 className="font-black text-brand-blue text-lg">{member.name}</h3>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
                <p className="text-brand-blue/40 text-xs mt-1 flex items-center justify-center gap-1">
                  <MapPin className="w-3 h-3" /> {member.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — Social Proof
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-[10px] text-brand-gold font-black uppercase tracking-[0.2em] block mb-3">What Pilgrims Say</span>
            <h2 className="text-4xl font-black text-brand-blue">Verified Pilgrim Reviews</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
              <span className="ml-2 text-brand-blue font-black text-sm">4.9 / 5.0</span>
              <span className="text-brand-blue/40 text-xs ml-1">(Google Reviews)</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Quote className="w-8 h-8 text-brand-gold/20 mb-4" />
                <p className="text-brand-blue/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-brand-gold/20" />
                  <div>
                    <p className="font-black text-brand-blue text-sm">{t.name}</p>
                    <p className="text-brand-blue/40 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3 h-3 text-brand-gold fill-brand-gold" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTERNAL LINKS — Money Pages
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-brand-gold/10">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-black text-brand-blue">Explore Our Services</h2>
            <p className="text-brand-blue/50 text-sm mt-2">Transport · Visas · Hotels · Fleet — All in one agency</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {moneyPages.map((page, i) => (
              <Link
                key={i}
                href={page.href}
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all group font-bold text-sm text-brand-blue"
              >
                {page.label}
                <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA — Aggressive, Persuasive
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Your Blessed Journey<br /><span className="text-brand-gold">Deserves the Best Team.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Join 12,500+ pilgrims who trusted Barkat Travel for Umrah transport, visa, and hotels. WhatsApp us now — our team responds in under 5 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-10 py-5 rounded-2xl font-black text-base shadow-2xl hover:-translate-y-1 active:scale-95 transition-all group"
              >
                <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                WhatsApp — Plan My Umrah
              </a>
              <Link
                href="/transport/fare-calculator/"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-blue px-10 py-5 rounded-2xl font-black text-base hover:brightness-105 hover:-translate-y-1 transition-all"
              >
                <Zap className="w-5 h-5" /> Check Transport Fares
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-60">
              <a href={`tel:${CONTACT_INFO.qatar.phones[0]}`} className="flex items-center gap-2 text-white text-sm hover:text-brand-gold transition-colors">
                <Phone className="w-4 h-4" /> Qatar: {formatPhone(CONTACT_INFO.qatar.phones[0])}
              </a>
              <a href={`tel:${CONTACT_INFO.pakistan.phones[0]}`} className="flex items-center gap-2 text-white text-sm hover:text-brand-gold transition-colors">
                <Phone className="w-4 h-4" /> Pakistan: {formatPhone(CONTACT_INFO.pakistan.phones[0])}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
