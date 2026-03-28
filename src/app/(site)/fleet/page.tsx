"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Users, Fuel, Gauge, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import PageCTA from "@/components/PageCTA";
import FAQAccordion from "@/components/FAQAccordion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const FLEET = [
  {
    name: "Toyota Camry",
    type: "Executive Sedan",
    passengers: "1–3",
    bestFor: "Business trips, airport transfers, solo travelers",
    features: ["Leather interior", "Climate control", "Bluetooth audio", "Spacious trunk"],
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800",
    tag: "Business Class",
  },
  {
    name: "Hyundai Staria",
    type: "Premium MPV",
    passengers: "5–9",
    bestFor: "Family travel, small groups, Umrah trips",
    features: ["Captain seats", "Sliding doors", "A/C rear zone", "USB charging"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?auto=format&fit=crop&q=80&w=800",
    tag: "Family Comfort",
  },
  {
    name: "Hyundai Starex",
    type: "Passenger Van",
    passengers: "7–11",
    bestFor: "Group transfers, airport pickups, short routes",
    features: ["Wide seating", "Large cargo", "Dual A/C", "Privacy glass"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
    tag: "Group Value",
  },
  {
    name: "GMC Yukon",
    type: "VVIP Luxury SUV",
    passengers: "5–7",
    bestFor: "VVIP families, Doha–Makkah direct, long-haul comfort",
    features: ["Full leather", "Bose® audio", "Cooled seats", "600L cargo"],
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    tag: "VVIP Choice",
  },
  {
    name: "Toyota HiAce",
    type: "Commuter Van",
    passengers: "10–14",
    bestFor: "Medium groups, inter-city transport, Umrah groups",
    features: ["High roof", "Recliner seats", "Overhead storage", "Rear A/C"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    tag: "Group Efficiency",
  },
  {
    name: "Toyota Coaster",
    type: "Luxury Mini Bus",
    passengers: "20–29",
    bestFor: "Large groups, daily bus service Doha–Makkah/Madinah",
    features: ["Recliner seats", "On-board Wi-Fi", "Luggage hold", "Prayer stop schedule"],
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    tag: "Most Popular",
  },
];

const faqs = [
  {
    q: "Which vehicle is best for a family Umrah trip from Doha to Makkah?",
    a: "For families of 4-6, we recommend the GMC Yukon for door-to-door VVIP comfort. For larger families (7-11), the Hyundai Staria or Starex offers spacious seating with dedicated luggage space.",
  },
  {
    q: "What is the difference between the Staria and Starex?",
    a: "The Hyundai Staria is a newer, more premium model with captain seats and a modern design, ideal for comfort. The Starex is a more practical choice offering wider seating and larger cargo capacity for groups.",
  },
  {
    q: "Can I book a Toyota Coaster for a group trip?",
    a: "Yes, the Toyota Coaster is our most popular choice for group travel between Doha and Makkah/Madinah. It accommodates 20-29 passengers with recliner seats, on-board Wi-Fi, and scheduled prayer stops.",
  },
  {
    q: "Are all vehicles equipped for long-distance Saudi Arabia trips?",
    a: "Absolutely. Every vehicle in our fleet is regularly serviced and equipped for the 1,400km Doha-Makkah route. This includes dual A/C zones, luggage capacity for Zem Zem water returns, and GPS tracking.",
  },
  {
    q: "Do you offer Toyota Camry for airport transfers only?",
    a: "While the Camry is excellent for airport transfers, it is also available for short-distance business trips and intercity travel within Qatar and Saudi Arabia.",
  },
];

export default function FleetPage() {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  return (
    <div className="bg-brand-beige min-h-screen">
      {/* Hero */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">Our Vehicle Fleet</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mb-4">
            Premium Transport Fleet
          </h1>
          <p className="text-brand-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            From executive sedans to luxury coaches — choose the perfect vehicle for your GCC journey.
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-8 bg-brand-gold">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-brand-blue">
            <div className="text-center">
              <p className="text-3xl font-bold font-inter">6</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Vehicle Types</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold font-inter">1–29</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Passengers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold font-inter">24/7</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Availability</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold font-inter">100%</p>
              <p className="text-xs font-bold uppercase tracking-wider opacity-70">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold font-inter tracking-tight text-brand-blue mb-3">
              Choose Your Vehicle
            </h2>
            <p className="text-brand-blue/60 text-sm max-w-xl mx-auto">
              All vehicles are professionally maintained, GPS-tracked, and driven by experienced multilingual drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-brand-gold/10 shadow-sm hover:shadow-xl transition-all group"
              >
                {/* Image */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                      vehicle.tag === "VVIP Choice" 
                        ? "bg-brand-gold text-brand-blue" 
                        : vehicle.tag === "Most Popular"
                        ? "bg-[#25D366] text-white"
                        : "bg-brand-blue text-brand-gold"
                    }`}>
                      {vehicle.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] text-brand-gold font-bold uppercase tracking-wider mb-1">{vehicle.type}</p>
                  <h3 className="text-xl font-bold font-inter tracking-tight text-brand-blue mb-1">{vehicle.name}</h3>
                  
                  <div className="flex items-center gap-4 mt-3 mb-4 text-brand-blue/60 text-xs">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-brand-gold" />
                      {vehicle.passengers} pax
                    </span>
                  </div>

                  <p className="text-xs text-brand-blue/60 mb-4 leading-relaxed">
                    <span className="font-bold text-brand-blue">Best for:</span> {vehicle.bestFor}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {vehicle.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-xs text-brand-blue/70">
                        <CheckCircle className="w-3 h-3 text-brand-gold shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-gold text-brand-white hover:text-brand-blue py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    <WhatsAppIcon />
                    Book {vehicle.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-brand-white border-y border-brand-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-3">Fleet Comparison</h2>
            <p className="text-brand-blue/60 text-sm">Quick comparison to help you choose the right vehicle.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-brand-gold/10 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-brand-blue text-brand-gold text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-5">Vehicle</th>
                  <th className="p-5">Type</th>
                  <th className="p-5">Passengers</th>
                  <th className="p-5">Best For</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm text-brand-blue/80">
                {FLEET.map((v, i) => (
                  <tr key={v.name} className={`border-b border-brand-gold/5 transition-colors hover:bg-brand-gold/5 ${i % 2 === 1 ? "bg-brand-beige/20" : ""}`}>
                    <td className="p-5 font-bold text-brand-blue">{v.name}</td>
                    <td className="p-5">{v.type}</td>
                    <td className="p-5">
                      <span className="text-brand-gold font-bold">{v.passengers}</span>
                    </td>
                    <td className="p-5 text-xs">{v.bestFor}</td>
                    <td className="p-5">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#20b858] transition-colors"
                      >
                        <WhatsAppIcon />
                        Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Routes our fleet covers */}
      <section className="py-20 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-gold mb-3">Routes Our Fleet Covers</h2>
          <p className="text-brand-white/60 text-sm mb-12 max-w-lg mx-auto">
            Our vehicles operate across all major Doha to Saudi Arabia routes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/transport/doha-to-makkah/" className="group bg-white/5 border border-brand-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <p className="text-brand-gold font-bold text-lg mb-1">Doha → Makkah</p>
              <p className="text-brand-white/50 text-xs">Daily bus & private GMC service</p>
              <ArrowRight className="w-4 h-4 text-brand-gold mt-3 mx-auto group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/transport/doha-to-madinah/" className="group bg-white/5 border border-brand-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <p className="text-brand-gold font-bold text-lg mb-1">Doha → Madinah</p>
              <p className="text-brand-white/50 text-xs">Luxury coaches & private vans</p>
              <ArrowRight className="w-4 h-4 text-brand-gold mt-3 mx-auto group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link href="/transport/doha-to-riyadh/" className="group bg-white/5 border border-brand-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <p className="text-brand-gold font-bold text-lg mb-1">Doha → Riyadh</p>
              <p className="text-brand-white/50 text-xs">Executive sedans & SUVs</p>
              <ArrowRight className="w-4 h-4 text-brand-gold mt-3 mx-auto group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brand-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold font-inter tracking-tight text-brand-blue mb-10 text-center">
            Fleet Questions & Answers
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Need Help Choosing a Vehicle?"
        description="Tell us your group size, route, and travel date — we will recommend the best vehicle and give you a quote within minutes."
        primaryBtn={{ text: "Get Fleet Quote", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}
