import { BRAND_NAME, CONTACT_INFO } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Barkat Travel",
  description: "Official terms and conditions for Barkat Travel services including Umrah transport, Saudi visa processing, and hotel bookings.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-brand-beige min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-brand-gold/10">
        <h1 className="text-4xl font-bold font-inter tracking-tight text-brand-blue mb-10 border-b border-brand-gold/20 pb-6 uppercase tracking-tighter">Terms & Conditions</h1>
        
        <div className="space-y-8 text-brand-blue/80 leading-relaxed font-medium">
          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">1. Booking & Payments</h2>
            <p>All transport and hotel bookings are subject to availability. Full payment or a deposit may be required at the time of booking confirmation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">2. Visa Processing</h2>
            <p>{BRAND_NAME} acts as an authorized intermediary for visa applications. The final decision on visa approval or rejection rests solely with the Saudi Ministry. Processing fees are generally non-refundable once the application has been submitted.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">3. Cancellations & Refunds</h2>
            <p className="">Standard cancellation policies apply:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Transport: Cancellations made within 24 hours of departure may be subject to a fee.</li>
              <li>Hotels: Refund policies vary by hotel; please check at the time of booking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">4. Limitation of Liability</h2>
            <p>We are not liable for delays caused by border inspections, traffic, or changes in government regulations during your journey.</p>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-gold/10 text-center text-xs text-brand-blue/40  uppercase tracking-widest leading-loose">
           © {new Date().getFullYear()} {BRAND_NAME}. <br/>All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
