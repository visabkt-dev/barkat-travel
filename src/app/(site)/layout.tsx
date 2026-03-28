import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadPopup from "@/components/LeadPopup";
import TopBar from "@/components/TopBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umrah Transport & Visa Service | Doha to Saudi Arabia | Barkat Travel",
  alternates: {
    canonical: "/",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup />
      <TopBar />
      <Navbar />
      <main className="min-h-screen">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </>
  );
}
