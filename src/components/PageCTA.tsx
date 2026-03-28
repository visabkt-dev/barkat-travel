"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import Link from "next/link";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export interface PageCTAProps {
  /** Small label above heading */
  label?: string;
  /** Main heading */
  heading: string;
  /** Supporting description */
  description: string;
  /** Primary button text & href */
  primaryBtn?: { text: string; href: string };
  /** Secondary button text & href (defaults to Contact Us) */
  secondaryBtn?: { text: string; href: string };
  /** Show WhatsApp button (default: true) */
  showWhatsApp?: boolean;
  /** Phone number to show (default: Qatar) */
  showPhone?: boolean;
  /** Background variant */
  variant?: "blue" | "white" | "gold";
}

export default function PageCTA({
  label = "Ready to Begin?",
  heading,
  description,
  primaryBtn = { text: "Start Booking", href: "/get-quote/" },
  secondaryBtn = { text: "Contact Us", href: "/contact/" },
  showWhatsApp = true,
  showPhone = true,
  variant = "blue",
}: PageCTAProps) {
  const whatsappLink = getWhatsAppLink(CONTACT_INFO.qatar.phones[0]);

  const bg = variant === "blue" ? "bg-brand-blue" : variant === "gold" ? "bg-brand-gold" : "bg-white border-t border-gray-100";
  const headingColor = variant === "gold" ? "text-brand-blue" : "text-brand-gold";
  const descColor = variant === "gold" ? "text-brand-blue/80" : variant === "white" ? "text-brand-blue/70" : "text-white/80";
  const labelColor = variant === "gold" ? "text-brand-blue/60" : "text-brand-gold";
  const primaryClass = variant === "gold"
    ? "bg-brand-blue hover:bg-brand-blue/90 text-white"
    : "bg-brand-gold hover:bg-white text-brand-blue";
  const secondaryClass = variant === "gold"
    ? "bg-white/30 hover:bg-white/50 text-brand-blue border border-brand-blue/20"
    : variant === "white"
    ? "bg-brand-blue hover:bg-brand-blue/90 text-white"
    : "bg-white/10 hover:bg-white/20 text-white border border-white/20";
  const phoneColor = variant === "gold" ? "text-brand-blue/70 hover:text-brand-blue" : "text-white/70 hover:text-brand-gold";

  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Text */}
          <div className="max-w-xl">
            <span className={`text-xs font-bold uppercase tracking-wider ${labelColor}`}>{label}</span>
            <h2 className={`text-2xl md:text-3xl font-bold mt-2 mb-3 ${headingColor}`}>{heading}</h2>
            <p className={`text-sm leading-relaxed ${descColor}`}>{description}</p>

            {showPhone && (
              <a href={`tel:${CONTACT_INFO.qatar.phones[0]}`}
                className={`inline-flex items-center gap-2 mt-4 text-sm transition-colors ${phoneColor}`}>
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.qatar.phones[0]}
              </a>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href={primaryBtn.href}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg ${primaryClass}`}>
              {primaryBtn.text}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href={secondaryBtn.href}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all ${secondaryClass}`}>
              {secondaryBtn.text}
            </Link>

            {showWhatsApp && (
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-md">
                <WhatsAppIcon />
                WhatsApp
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
