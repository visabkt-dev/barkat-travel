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
  title: "Makkah Hotel Booking | Luxury Stay Near Haram | Barkat Travel",
  description: "Book the best hotels in Makkah near Masjid al-Haram. Luxury 5-star hotels with Haram views or budget options with shuttle service. Direct booking assistance.",
  keywords: ["Makkah hotel booking", "Hotels near Haram Makkah", "Makkah budget hotels", "5 star hotels Makkah", "Barkat Travel Makkah hotels"],
  alternates: {
    canonical: "/hotels/makkah-hotel-booking",
  },
};

const faqs = [
  {
    q: "Do you have hotels with direct views of the Kaaba?",
    a: "Yes, we have direct contracts with luxury hotels like Clock Tower and others that offer high-end Kaaba and Haram view rooms."
  },
  {
    q: "How far are your budget hotels from the Haram?",
    a: "Our budget options are typically 500m to 1km away, but most include a 24/7 free shuttle service to and from the Haram."
  },
  {
    q: "Can you help with full board (meals) bookings?",
    a: "Certainly! We can arrange breakfast, half-board, or full-board meal plans depending on the hotel policy and your group's requirements."
  }
];

export default function MakkahHotelsPage() {
  return (
    <div className="bg-brand-white min-h-screen">
      <SchemaMarkup schemaType="FAQ" data={faqs} />
      <SchemaMarkup 
        schemaType="Service" 
        data={{
          name: "Makkah Hotel Booking",
          description: "Luxury and budget hotel bookings in Makkah, Saudi Arabia, near Masjid al-Haram. Custom packages for Umrah pilgrims.",
          provider: "Barkat Travel"
        }} 
      />

      {/* Hero */}
      <section className="bg-brand-blue pt-44 pb-16 md:pt-48 md:pb-20 text-center text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Stay in Comfort</span>
          <h1 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-gold mt-2 mb-4">Makkah Hotel Booking</h1>
          <p className="text-lg text-brand-white/80 max-w-2xl mx-auto ">
            Luxury and budget accommodations meticulously selected for your spiritual journey.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold font-inter tracking-tight text-brand-blue tracking-tighter ">Your Sanctuary in the Holy City</h2>
              <FeaturedSnippet
                question="What is the best way to book a hotel near Masjid al-Haram?"
                answer="Booking a hotel through an authorized Umrah travel agency is the best way to secure guaranteed accommodations near Masjid al-Haram. Agencies like Barkat Travel leverage direct supplier contracts to provide confirmed reservations in 5-star Makkah properties, often at rates significantly lower than standard online travel portals."
                example="For example, booking a family suite in the Abraj Al Bait complex through Barkat Travel ensures your reservation is verified and perfectly aligned with your Umrah visa issuance."
              />
              
              <div className="space-y-6 text-base text-brand-blue/80 leading-relaxed font-medium mt-8">
                <div>
                  <h3 className="text-lg font-black font-inter tracking-tight text-brand-blue mb-2">How to Choose Your Makkah Accommodation</h3>
                  <p>
                    Choosing your accommodation in Makkah requires balancing walking distance to the Haram with your overall budget. Premium <strong>5-star hotels in Makkah</strong> located in the Clock Tower complex offer direct Kaaba views and private prayer halls, while our vetted 3-star and 4-star alternatives in the Ajyad district provide tremendous value with complimentary 24/7 shuttle services directly to the Mosque's King Abdulaziz gate.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 <ServiceItem title="Haram View Rooms" desc="Wake up to the view of the Holy Mosque." />
                 <ServiceItem title="Budget Friendly" desc="High quality stays at affordable rates." />
                 <ServiceItem title="Shuttle Service" desc="Convenient transport for farther hotels." />
                 <ServiceItem title="Group Discounts" desc="Special rates for families and groups." />
              </div>

              <div className="pt-8 border-t border-brand-gold/10 flex flex-wrap gap-4">
                 <Link href="/transport/" className="text-xs font-bold text-brand-gold flex items-center group">
                    Need Airport Pickup? <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link href="/hotels/madinah-hotel-booking/" className="text-xs font-bold text-brand-gold flex items-center group">
                    Madinah Hotels <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>
           </div>
           <div className="sticky top-32">
              <HotelForm defaultCity="Makkah Hotel Booking" />
           </div>
        </div>
      </section>

      {/* Why Book with Us */}
      <section className="py-24 bg-brand-beige/20 text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12">Why Barkat Travel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8">
                  <Shield className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-brand-blue mb-2">Verified Stays</h4>
                  <p className="text-brand-blue/60 text-sm">We personally visit and verify every hotel in our inventory.</p>
               </div>
               <div className="p-8">
                  <Star className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-brand-blue mb-2">Exclusive Rates</h4>
                  <p className="text-brand-blue/60 text-sm">Our direct contracts save you up to 20% compared to online portals.</p>
               </div>
               <div className="p-8">
                  <Clock className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-brand-blue mb-2">On-Ground Support</h4>
                  <p className="text-brand-blue/60 text-sm">Our Makkah team is ready to assist with check-ins and upgrades.</p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl font-bold font-inter tracking-tight text-brand-blue mb-12 flex items-center gap-4">
              <HelpCircle className="text-brand-gold w-8 h-8" />
              Frequently Asked Questions
           </h2>
           <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <PageCTA
        heading="Book Your Makkah Hotel Now"
        description="We assist pilgrims and travelers in booking hotels close to Masjid Al-Haram. Budget to 5-star options available."
        primaryBtn={{ text: "Check Availability", href: "/get-quote/" }}
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


