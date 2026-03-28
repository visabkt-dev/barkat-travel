import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Umrah Transport Fleet | GMC, Bus & Luxury Cars | Barkat Travel",
  description: "Explore Barkat Travel's VVIP fleet of GMC Yukons, Hyundai Starias, and Luxury Buses. Specialized transport for pilgrims between Qatar, Saudi Arabia, and across the Kingdom.",
  keywords: ["Barkat travel fleet", "GMC Yukon Umrah transport", "Luxury bus Qatar to Makkah", "Hyundai Staria Saudi travel", "Umrah vehicles"],
  alternates: {
    canonical: "/fleet",
  },
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
