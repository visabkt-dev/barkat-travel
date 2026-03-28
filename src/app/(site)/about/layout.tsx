import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Qatar's #1 Umrah Travel Agency | Barkat Travel",
  description: "Learn about Barkat Travel. Serving pilgrims since 2008 with authorized Umrah transport, visa processing, and premium hospitality across Qatar, Saudi Arabia, and Pakistan.",
  keywords: ["About Barkat Travel", "Umrah travel agency history", "Qatar travel experts", "Authorized Umrah agent", "Cross-border travel specialists"],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
