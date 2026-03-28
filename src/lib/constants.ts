export const BRAND_NAME = "Barkat Travel";
export const BRAND_TAGLINE = "Exclusive GCC Transport • Umrah Travel • VVIP Logistics";

export const CONTACT_INFO = {
  qatar: {
    name: "Barkat Al Madinah Tourism",
    phones: ["+97477382929"],
    address: "Umm Al-Ghawaling, Building 64 Office 5, Doha Qatar",
    city: "Doha",
    country: "Qatar",
    hours: "24/7 (Office: 8AM - 10PM)",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.747192809545!2d51.542!3d25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534e56570c9%3A0x9591e1d32ff00e5e!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1710260000000!5m2!1sen!2sqa"
  },
  pakistan: {
    name: "Barkat Al Madinah Travel (Pvt.) Ltd",
    iata: true,
    phones: ["+923004503060"],
    address: "Adyala Tower, Adyala Road, Shop No. 1, Ground Floor, Islamabad",
    city: "Islamabad",
    country: "Pakistan",
    hours: "9AM - 8PM",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106338.441112444!2d73.0!3d33.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515133b45273!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710260000000!5m2!1sen!2s"
  },
  saudi: {
    name: "Barkat Al Madinah Support KSA",
    phones: ["+966593784002"],
    address: "Makkah / Madinah On-Ground Assistance",
    city: "Makkah",
    country: "Saudi Arabia",
    hours: "24/7",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.242874742!2d39.8!3d21.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98fba9505bc4f10!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1710260000000!5m2!1sen!2s"
  },
  uae: {
    name: "Barkat Travel UAE Hub",
    phones: ["+97477738292"], // Using HQ phone for now as it's a hub
    address: "Deira / Bur Dubai Regional Support",
    city: "Dubai",
    country: "United Arab Emirates",
    hours: "24/7",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231000.0!2d55.3!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f2ad8833b%3A0xb1b8b30d8544a0d0!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1710260000000!5m2!1sen!2s"
  },
  oman: {
    name: "Barkat Travel Oman Support",
    phones: ["+97477738292"],
    address: "Muscat / Salalah Regional Service",
    city: "Muscat",
    country: "Oman",
    hours: "24/7",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116800.0!2d58.4!3d23.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f0931e24747d%3A0x1d4d8c83e3b5e43a!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1710260000000!5m2!1sen!2s"
  },
  email: "info@barkattravel.com",
};

export const WHATSAPP_MESSAGE = `Hello Barkat Travel,
I am requesting a quote for:
Service: 
Travel Date: 
Passengers: 
Pickup location: 
Please provide the best available rates.`;

export const getWhatsAppLink = (phone: string, customMessage?: string) => {
  const cleanPhone = phone.replace(/\D/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(customMessage || WHATSAPP_MESSAGE)}`;
};

/** Strip all non-digit chars except leading + so the number is safe in a tel: href */
export const getPhoneLink = (phone: string): string => {
  // Keep leading + then strip everything non-digit
  const hasPlus = phone.trimStart().startsWith("+");
  const digits = phone.replace(/\D/g, "");
  return hasPlus ? `+${digits}` : digits;
};

/** Build a prefilled mailto: link */
export const getMailtoLink = (email: string, subject = "Inquiry%20from%20Barkat%20Travel%20Website") =>
  `mailto:${email}?subject=${subject}`;

/**
 * Format a sanitised phone number for display.
 * e.g. +97477382929 → +974 7738 2929
 *      +923004503060 → +92 300 450 3060
 *      +966593784002 → +966 59 378 4002
 */
export const formatPhone = (phone: string): string => {
  const clean = phone.replace(/\s/g, "");
  if (clean.startsWith("+974")) {
    // Qatar: +974 XXXX XXXX
    const local = clean.slice(4);
    return `+974 ${local.slice(0, 4)} ${local.slice(4)}`;
  }
  if (clean.startsWith("+92")) {
    // Pakistan: +92 3XX XXX XXXX
    const local = clean.slice(3);
    return `+92 ${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`;
  }
  if (clean.startsWith("+966")) {
    // Saudi: +966 5X XXX XXXX
    const local = clean.slice(4);
    return `+966 ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
  }
  // fallback: just return as-is
  return clean;
};

export const SERVICES = [
  {
    id: "hajj-umrah",
    title: "Hajj & Umrah Packages",
    description: "Complete pilgrimage solutions including luxury hotels, group transport, and guided tours in Makkah and Madinah.",
    icon: "Compass",
    link: "/visa/umrah-visa/",
  },
  {
    id: "gcc-transport",
    title: "On-Ground Global Transport",
    description: "Private GMC, coach, and luxury car services across Saudi Arabia (Makkah, Madinah, Jeddah, Taif) and GCC.",
    icon: "Bus",
    link: "/transport/",
  },
  {
    id: "visa-support",
    title: "Global Visa Support",
    description: "Authorized processing for Umrah, Tourist, Transit, and Business visas for Saudi Arabia and GCC residents.",
    icon: "Globe",
    link: "/visa/",
  },
  {
    id: "hotel-booking",
    title: "VVIP Hotel Bookings",
    description: "Exclusive inventory in Makkah (Near Haram) and Madinah, paired with door-to-door hospitality.",
    icon: "Hotel",
    link: "/hotels/",
  },
];

export const ROUTES = [
  { from: "Doha", to: "Makkah", price: "Starting from 450 QR", vehicle: "Bus / Van / Car", link: "/transport/doha-to-makkah/" },
  { from: "Doha", to: "Madinah", price: "Starting from 550 QR", vehicle: "Bus / Van / Car", link: "/transport/doha-to-madinah/" },
  { from: "Doha", to: "Riyadh", price: "Starting from 350 QR", vehicle: "Bus / Van / Car", link: "/transport/doha-to-riyadh/" },
  { from: "Riyadh", to: "Doha", price: "Starting from 350 QR", vehicle: "Bus / Van / Car", link: "/transport/doha-to-riyadh/" },
];

export const VISA_TYPES = [
  { title: "Umrah Visa", description: "Specifically for religious travel to Makkah and Madinah." },
  { title: "Tourist Visa", description: "For leisure travel and visiting friends/family in Saudi Arabia." },
  { title: "Transit Visa", description: "For short stopovers while traveling through Saudi Arabia." },
  { title: "Multiple Entry Visa", description: "Ideal for frequent travelers to the Kingdom." },
];

export const HOTELS = [
  {
    name: "Fairmont Clock Tower Makkah",
    city: "Makkah",
    rating: 5,
    haramDist: "0 m — Inside Abraj Al Bait",
    tag: "VVIP · Iconic Tower",
    features: [
      "Direct access to Masjid Al-Haram",
      "Luxury suites with Kaaba view",
      "24-hr concierge & butler service",
      "Rooftop prayer observation deck",
      "Private transport arrangement",
    ],
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Anjum Hotel Makkah",
    city: "Makkah",
    rating: 5,
    haramDist: "250 m — Al Haram District",
    tag: "Premium · Family Favourite",
    features: [
      "Steps from Masjid Al-Haram gate",
      "Spacious family suites available",
      "Complimentary Haram shuttle",
      "On-site halal dining restaurants",
      "Priority check-in for pilgrims",
    ],
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Hilton Convention Hotel Makkah",
    city: "Makkah",
    rating: 5,
    haramDist: "500 m — Ibrahim Al Khalil Rd",
    tag: "Luxury · Group Friendly",
    features: [
      "Large group & corporate bookings",
      "Modern rooms with Haram views",
      "24-hr WhatsApp pilgrim support",
      "Group pricing through Barkat Travel",
      "Conference & event facilities",
    ],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
  },
];

