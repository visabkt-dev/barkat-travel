import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Office Support | Contact Us | Barkat Travel",
  description: "Get in touch with Barkat Travel. Specialized offices in Qatar, Pakistan, and Saudi Arabia. We provide premium Umrah transport, Hajj packages, and fast Saudi visa processing worldwide. Call or WhatsApp 24/7.",
  keywords: ["Contact Barkat Travel", "Umrah transport Qatar", "Barkat Travel Pakistan", "Saudi Arabia Umrah services", "Hajj packages 2026", "Doha Umrah agency", "Islamabad travel agent"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
