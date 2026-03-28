import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saudi Transport | Private GMC & Bus to Makkah | Barkat Travel",
  description: "Book luxury cross-border transport from Doha to Makkah, Madinah, and Riyadh. Private VVIP GMC yukons and 49-seater luxury buses with authorized border clearance.",
  keywords: ["Saudi transport from Qatar", "Doha to Makkah transport", "Doha to Riyadh bus", "Private GMC to Saudi Arabia", "Umrah transport services"],
  alternates: {
    canonical: "/transport",
  },
};

export default function TransportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
