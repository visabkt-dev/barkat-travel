import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saudi Umrah & Tourist Visa | Fast Online Processing | Barkat Travel",
  description: "Comprehensive Saudi visa processing from Qatar. Get your Umrah visa, Tourist e-Visa, or Multiple Entry visa in 24-48 hours with guaranteed results.",
  keywords: ["Saudi visa agent Qatar", "Umrah visa processing", "Saudi tourist visa", "Transit visa Saudi", "Barkat Travel visa assistant"],
  alternates: {
    canonical: "/visa",
  },
};

export default function VisaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
