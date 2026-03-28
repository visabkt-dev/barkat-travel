import { BRAND_NAME, CONTACT_INFO } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-beige min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-brand-gold/10">
        <h1 className="text-4xl font-bold font-inter tracking-tight text-brand-blue mb-10 border-b border-brand-gold/20 pb-6 uppercase tracking-tighter">Privacy Policy</h1>

        <div className="space-y-8 text-brand-blue/80 leading-relaxed font-medium">
          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">1. Information We Collect</h2>
            <p className="">We collect information about you in a variety of ways when you use the Services. This information includes:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Personal Data: Full name, WhatsApp number, email address, and passport details for visa processing.</li>
              <li>Booking Details: Travel dates, passenger counts, and destination preferences.</li>
              <li>Communication Data: Records of your inquiries via WhatsApp or office visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Process your transport and hotel bookings.</li>
              <li>Submit visa applications to the Saudi Ministry on your behalf.</li>
              <li>Communicate updates regarding your travel via WhatsApp or call.</li>
              <li>Improve our services and customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">3. Data Sharing</h2>
            <p>We only share your data with authorized government bodies (for visas) and our trusted fulfillment partners (hotels, transport drivers). We never sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-blue mb-4 font-inter tracking-tight">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at {CONTACT_INFO.email}.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-gold/10 text-center">
          <p className="text-xs text-brand-blue/40  uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} {BRAND_NAME}.<br />All Data Protected under Qatar & Pakistan Privacy Laws.
          </p>
        </div>
      </div>
    </div>
  );
}
