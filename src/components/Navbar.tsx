"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "Transport", 
    href: "/transport/",
    submenu: [
      { name: "Doha to Makkah", href: "/transport/doha-to-makkah/", description: "Luxury bus & GMC private transfers" },
      { name: "Doha to Madinah", href: "/transport/doha-to-madinah/", description: "Reliable weekly & daily routes" },
      { name: "Fare Calculator", href: "/transport/fare-calculator/", description: "Calculate travel cost instantly" },
      { name: "Doha to Riyadh", href: "/transport/doha-to-riyadh/", description: "Business & personal travel" },
    ]
  },
  { 
    name: "Visa Services", 
    href: "/visa/",
    submenu: [
      { name: "Umrah Visa", href: "/visa/umrah-visa/", description: "Fast-track religious visa processing" },
      { name: "Eligibility Checker", href: "/visa/eligibility-checker/", description: "Find your visa options instantly" },
      { name: "Tourist Visa", href: "/visa/tourist-visa/", description: "Hassle-free Saudi entry permits" },
      { name: "Transit Visa", href: "/visa/transit-visa/", description: "Quick 24/48h stopover clearance" },
    ]
  },
  { name: "Hotels", 
    href: "/hotels/",
    submenu: [
      { name: "Makkah Hotels", href: "/hotels/makkah-hotel-booking/", description: "Luxury stays near the Haram" },
      { name: "Madinah Hotels", href: "/hotels/madinah-hotel-booking/", description: "Quality accommodation in Madinah" },
    ]
  },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500",
        isScrolled || pathname !== "/"
          ? "bg-brand-blue/95 backdrop-blur-xl py-3 border-b border-brand-gold/20 shadow-2xl top-0 md:top-9"
          : "bg-transparent py-6 border-b border-transparent top-0 md:top-9"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group items-start">
          <span className={cn(
            "text-2xl font-black tracking-tighter text-brand-gold group-hover:scale-105 transition-transform duration-300",
          )}>
            Barkat Travel
          </span>
          <span className="text-[9px] text-brand-white/50 font-bold uppercase tracking-[0.3em] mt-0.5 group-hover:text-brand-gold/80 transition-colors">
            GCC Premier Services
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <div className="flex items-center">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative group px-1"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {link.submenu ? (
                  <button className="flex items-center text-[13px] font-bold uppercase tracking-wider text-brand-white/80 hover:text-brand-gold hover:bg-white/5 px-4 py-3 rounded-xl transition-all">
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 ml-1.5 opacity-40 group-hover:rotate-180 group-hover:opacity-100 transition-all" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                        "text-[13px] font-bold uppercase tracking-wider px-4 py-3 rounded-xl transition-all",
                        pathname === link.href ? "text-brand-gold bg-brand-gold/5" : "text-brand-white/80 hover:text-brand-gold hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.submenu && (
                  <div className={cn(
                    "absolute top-full left-0 w-72 bg-brand-blue/95 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] py-4 mt-2 transition-all duration-300 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-[100]",
                  )}>
                    <div className="px-3 pb-2 mb-2 border-b border-white/5">
                        <span className="text-[10px] uppercase font-black tracking-widest text-brand-gold/50 px-3">{link.name} Overview</span>
                    </div>
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="flex flex-col px-6 py-3 hover:bg-white/5 transition-all group/item"
                      >
                        <span className="text-sm font-bold text-brand-white group-hover/item:text-brand-gold transition-colors">{sub.name}</span>
                        {sub.description && (
                            <span className="text-[10px] text-white/40 group-hover/item:text-white/60 transition-colors mt-0.5">{sub.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-white/10">
            {/* WhatsApp Support Badge */}
            <a
              href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">24/7 Support</span>
                <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors">Chat Now</span>
              </div>
            </a>
            
            <a
              href="/get-quote/"
              className="bg-brand-gold hover:bg-white text-brand-blue px-8 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(184,142,47,0.3)] hover:scale-105"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="lg:hidden flex items-center space-x-4">
          <a
            href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <button
            className="w-10 h-10 flex items-center justify-center text-brand-gold rounded-xl bg-white/5 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-brand-blue border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden shadow-3xl",
          isOpen ? "max-h-[100vh] py-10 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="flex flex-col items-center space-y-2 px-6">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="w-full">
              {link.submenu ? (
                <div className="flex flex-col items-center">
                  <button 
                    onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                    className="w-full py-4 text-center text-xl font-bold text-brand-white flex items-center justify-center border-b border-white/5"
                  >
                    {link.name}
                    <ChevronDown className={cn("w-5 h-5 ml-3 transition-transform duration-300 opacity-30", activeSubmenu === link.name && "rotate-180 opacity-100 text-brand-gold")} />
                  </button>
                  {activeSubmenu === link.name && (
                    <div className="w-full bg-white/5 rounded-2xl my-2 overflow-hidden border border-white/10">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block w-full py-4 px-6 text-center text-base font-medium text-brand-white/70 hover:text-brand-gold hover:bg-white/10 transition-all border-b border-white/5 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block w-full py-4 text-center text-xl font-bold text-brand-white border-b border-white/5"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="w-full flex flex-col gap-4 pt-10">
            <a
              href={getWhatsAppLink(CONTACT_INFO.qatar.phones[0])}
              className="bg-[#25D366] text-white py-5 rounded-2xl text-lg font-black text-center shadow-xl flex items-center justify-center gap-3"
            >
               <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
               </svg>
              WhatsApp Support
            </a>
            <a
              href="/get-quote/"
              className="bg-brand-gold text-brand-blue py-5 rounded-2xl text-lg font-black text-center shadow-xl"
            >
              Get Instant Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
