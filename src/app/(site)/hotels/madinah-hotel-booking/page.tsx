import HotelForm from "@/components/HotelForm";
import FAQAccordion from "@/components/FAQAccordion";
import PageCTA from "@/components/PageCTA";
import SchemaMarkup from "@/components/SchemaMarkup";
import FeaturedSnippet from "@/components/FeaturedSnippet";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/constants";
import { Hotel, MapPin, Clock, Shield, Star, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Madinah Hotel Booking | Stay Near Masjid Nabawi | Barkat Travel",
  description: "Exclusive hotel deals in Madinah. Book 5-star, 4-star, and budget hotels near the Prophet's Mosque. Modern rooms and expert group booking support.",
  keywords: ["Madinah hotel booking", "Hotels near Prophet Mosque", "Madinah 5 star hotels", "Budget hotels Madinah", "Barkat Travel Madinah hotels"],
  alternates: {
    canonical: "/hotels/madinah-hotel-booking",
  },
};

const faqs = [
  {
    q: "Are the hotels within walking distance of Al-Masjid an-Nabawi?",
    a: "Most of our partner hotels are located within the central markazia area, just a 2 to 5 minute walk from the mosque's outer courtyards."
  },
  {
    q: "Can you arrange hotels specifically for ladies or groups?",
    a: "Yes, we can organize specific floors or blocks for larger groups and suggest hotels that are closer to the ladies' entrances of the Masjid."
  },
  {
    q: "Is breakfast included in the booking?",
    a: "We offer both breakfast-included and room-only rates. Most of our 4 and 5 star partners provide high-quality international buffet breakfasts."
  }
];

export default function MadinahHotelsPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Madinah Hotel Booking",
          description: "Premium and budget hotels in Madinah's Markazia district, just steps from Al-Masjid an-Nabawi.",
          provider: "Barkat Travel"
        }} 
      />

      {/* Hero */}
      <section className="bg-brand-blue pt-44 pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Serenity & Peace</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4 ">Madinah Hotel Booking</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto  mb-8">
            Stay in the heart of the Prophet's City. Modern comfort matched with spiritual tranquility.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue tracking-tighter ">Experience True Hospitality</h2>
              <FeaturedSnippet
                question="Where should I stay in Madinah for Umrah?"
                answer="The best place to stay in Madinah is the Central Markazia district. Staying in this zone ensures you are within a 5-minute walk to Al-Masjid an-Nabawi, allowing easy access for all five daily prayers."
                example="For instance, hotels in the Northern Markazia are highly recommended for female pilgrims as they are situated closer to the dedicated ladies' entrances and the Rawdah access gates."
              />
              
              <div className="space-y-6 text-base text-brand-blue/80 leading-relaxed font-medium mt-8 mb-8">
                <div>
                  <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">Navigating Madinah Accommodations</h3>
                  <p>
                    Unlike Makkah where shuttle services are common, the goal in Madinah is absolute proximity. We concentrate our <strong>Madinah hotel bookings</strong> within the first and second rings of the Prophet's Mosque. Whether you need a 5-star luxury suite for a large family or a comfortable 3-star property for a budget group, our direct contracts guarantee your reservation well before you arrive for Ziyarat.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-white p-8 rounded-[2rem] border border-brand-gold/10 shadow-sm">
                 <ServiceItem title="Markazia District" desc="Stay steps away from the Prophet's Mosque." />
                 <ServiceItem title="Family Suites" desc="Spacious options for large families." />
                 <ServiceItem title="Ziarat Support" desc="Optional transport packages for local historical sites." />
                 <ServiceItem title="Wheelchair Access" desc="Special arrangements for elderly pilgrims." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10 flex flex-wrap gap-4">
                 <Link href="/transport/doha-to-madinah/" className="text-xs font-bold text-brand-gold flex items-center group">
                    Transport from Doha <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link href="/hotels/makkah-hotel-booking/" className="text-xs font-bold text-brand-gold flex items-center group">
                    Makkah Hotels <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
           <div className="sticky top-32">
              <HotelForm defaultCity="Madinah Hotel Booking" />
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="flex items-center space-x-4 mb-12">
              <HelpCircle className="text-brand-gold w-8 h-8" />
              <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue">Madinah Stay FAQ</h2>
           </div>
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Find Hotels Near Masjid An-Nabawi"
        description="We help you find and book hotels in Madinah close to the Prophet's Mosque. Start your inquiry today."
        primaryBtn={{ text: "Book Now", href: "/get-quote/" }}
        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}
      />
    </div>
  );
}

function ServiceItem({ title, desc }: any) {
  return (
    <div className="flex items-start">
      <CheckCircle className="w-4 h-4 text-brand-gold mr-3 mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-brand-blue text-sm uppercase">{title}</h4>
        <p className="text-brand-blue/50 text-[10px] ">{desc}</p>
      </div>
    </div>
  );
}


