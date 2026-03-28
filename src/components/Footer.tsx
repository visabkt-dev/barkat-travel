import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, BadgeCheck, ShieldCheck, Star, CreditCard } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO, getWhatsAppLink, formatPhone } from "@/lib/constants";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-4 h-4 fill-current shrink-0"} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-brand-white pt-16 pb-8 border-t border-brand-gold/10">
      <div className="container mx-auto px-4">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Brand & Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex flex-col group items-start">
              <span className="text-xl font-bold text-brand-gold group-hover:opacity-80 transition-opacity duration-300">
                Barkat Travel
              </span>
            </Link>

            {/* Company Status */}
            <div className="space-y-4">
              <div className="bg-brand-white/5 rounded-xl p-4 border border-brand-white/10">
                <p className="text-[10px] text-brand-gold uppercase tracking-wider font-bold mb-1">Service Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
                  <p className="text-sm font-bold text-brand-white">Operational GCC-Wide</p>
                </div>
              </div>
            </div>

            {/* Trust & Reviews */}
            <div className="space-y-4 pt-4 border-t border-brand-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <div className="text-sm font-bold text-brand-white">
                  4.9/5.0 <span className="text-brand-white/50 text-xs font-normal">Google Reviews</span>
                </div>
              </div>
              <p className="text-xs text-brand-white/60 leading-relaxed">
                Trusted by 1,250+ pilgrims across Qatar and GCC.
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/barkattraveldoha/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-white/5 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 border border-brand-white/10">
                 <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/barkattravel_qatar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-white/5 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 border border-brand-white/10">
                 <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/barkattravel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-brand-white/5 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 border border-brand-white/10">
                 <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* GCC Transport */}
            <div>
              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-6">GCC Transport</p>
              <ul className="space-y-3">
                <li><Link href="/location/uae/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">UAE</Link></li>
                <li><Link href="/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Qatar</Link></li>
                <li><Link href="/location/saudi-arabia/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Saudi Arabia</Link></li>
                <li><Link href="/location/oman/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Oman</Link></li>
                <li className="pt-2 border-t border-brand-white/5">
                  <p className="text-[10px] text-brand-gold/60 uppercase tracking-wider mb-2 font-bold">Qatar to Saudi (By Bus)</p>
                  <ul className="space-y-2">
                    <li><Link href="/transport/doha-to-makkah/" className="text-brand-white/60 hover:text-brand-gold transition-all text-xs hover:pl-1">Doha to Makkah</Link></li>
                    <li><Link href="/transport/doha-to-madinah/" className="text-brand-white/60 hover:text-brand-gold transition-all text-xs hover:pl-1">Doha to Madinah</Link></li>
                  </ul>
                </li>
                <li className="pt-2 border-t border-brand-white/5">
                  <p className="text-[10px] text-brand-gold/60 uppercase tracking-wider mb-2 font-bold">Saudi Domestic (Ziyarats)</p>
                  <ul className="space-y-2">
                    <li><Link href="/transport/" className="text-brand-white/60 hover:text-brand-gold transition-all text-xs hover:pl-1">Makkah to Madinah</Link></li>
                    <li><Link href="/transport/" className="text-brand-white/60 hover:text-brand-gold transition-all text-xs hover:pl-1">Makkah to Jeddah</Link></li>
                    <li><Link href="/transport/" className="text-brand-white/60 hover:text-brand-gold transition-all text-xs hover:pl-1">Makkah to Taif</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Visa */}
            <div>
              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-6">Visa</p>
              <ul className="space-y-3">
                <li><Link href="/visa/umrah-visa/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Umrah Visa</Link></li>
                <li><Link href="/visa/tourist-visa/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Tourism Visa Saudi</Link></li>
                <li><Link href="/visa/transit-visa/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Transit Visa Saudi</Link></li>
                <li><Link href="/visa/multiple-entry-visa/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Multiple Entry Visa</Link></li>
              </ul>
            </div>

            {/* Hotel Booking */}
            <div>
              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-6">Hotel Booking</p>
              <ul className="space-y-3">
                <li><Link href="/hotels/makkah-hotel-booking/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Makkah Hotels</Link></li>
                <li><Link href="/hotels/madinah-hotel-booking/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Madinah Hotels</Link></li>
                <li><Link href="/hotels/qatar-hotels/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Qatar Hotels</Link></li>
              </ul>

              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-widest mt-8 mb-6">Quick Links</p>
              <ul className="space-y-3">
                <li><Link href="/about/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">About Us</Link></li>
                <li><Link href="/fleet/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Our Fleet</Link></li>
                <li><Link href="/contact/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Contact</Link></li>
                <li><Link href="/get-quote/" className="text-brand-white/60 hover:text-brand-gold transition-all text-sm hover:pl-1">Get a Quote</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="lg:col-span-3 space-y-6">
            {/* Phone Numbers */}
            <div className="bg-brand-white/5 rounded-2xl p-6 border border-brand-white/10 space-y-4">
              <p className="text-[11px] font-bold text-brand-gold uppercase tracking-widest mb-4">Contact Numbers</p>
              <div className="space-y-3">
                <a href={`tel:${CONTACT_INFO.qatar.phones[0]}`} className="flex items-center gap-3 text-brand-white/80 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-white/40 uppercase tracking-wider font-bold">Qatar</p>
                    <p className="text-sm font-bold">{formatPhone(CONTACT_INFO.qatar.phones[0])}</p>
                  </div>
                </a>
                <a href={`tel:${CONTACT_INFO.pakistan.phones[0]}`} className="flex items-center gap-3 text-brand-white/80 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-white/40 uppercase tracking-wider font-bold">Pakistan</p>
                    <p className="text-sm font-bold">{formatPhone(CONTACT_INFO.pakistan.phones[0])}</p>
                  </div>
                </a>
                <a href={`tel:${CONTACT_INFO.saudi.phones[0]}`} className="flex items-center gap-3 text-brand-white/80 hover:text-brand-gold transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-white/40 uppercase tracking-wider font-bold">Saudi Arabia</p>
                    <p className="text-sm font-bold">{formatPhone(CONTACT_INFO.saudi.phones[0])}</p>
                  </div>
                </a>
              </div>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-brand-white/80 hover:text-brand-gold transition-colors pt-2 border-t border-brand-white/10">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white hover:bg-[#20b858] rounded-xl px-6 py-4 text-sm font-bold transition-all shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Trust Badges */}
            <div className="space-y-3">
               <div className="flex items-center gap-3 py-3 border-t border-brand-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                     <BadgeCheck className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-white/60">IATA Licensed & Qatar Tourism Auth</p>
               </div>
               <div className="flex items-center gap-3 py-3 border-t border-brand-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                     <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-white/60">Saudi Ministry (Nusuk) Authorized</p>
               </div>
            </div>

            {/* Payment Methods */}
            <div className="pt-4 border-t border-brand-white/10">
               <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-3">Accepted Payments</p>
               <div className="flex items-center gap-2">
                  <div className="bg-brand-white/10 px-3 py-1.5 rounded-lg border border-brand-white/5 flex items-center gap-2">
                     <CreditCard className="w-4 h-4 text-brand-white/80" />
                     <span className="text-[10px] font-bold text-brand-white/80 tracking-wider">CARD</span>
                  </div>
                  <div className="bg-brand-white/10 px-3 py-1.5 rounded-lg border border-brand-white/5 flex items-center gap-2">
                     <span className="text-[10px] font-bold text-brand-white/80 tracking-wider">CASH</span>
                  </div>
                  <div className="bg-brand-white/10 px-3 py-1.5 rounded-lg border border-brand-white/5 flex items-center gap-2">
                     <span className="text-[10px] font-bold text-brand-white/80 tracking-wider">TRANSFER</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 w-full md:w-auto justify-center md:justify-start">
             <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
             <p className="text-xs text-brand-white/60">
                Authorized GCC Transport & Travel Services
             </p>
          </div>
          <p className="text-xs text-brand-white/60 text-center md:text-left">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="text-xs text-brand-white/60 space-x-6 w-full md:w-auto flex justify-center md:justify-end">
            <Link href="/privacy-policy/" className="hover:text-brand-gold transition-colors">Privacy</Link>
            <Link href="/terms-conditions/" className="hover:text-brand-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
