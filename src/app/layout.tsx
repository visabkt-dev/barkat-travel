import type { Metadata } from "next";
import { Noto_Sans, Noto_Naskh_Arabic, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";



const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const noto = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const arabic = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://barkattravel.com'),
  title: "Umrah Transport & Visa Service | Doha to Saudi Arabia | Barkat Travel",
  description: "Official Barkat Travel. Licensed agency for luxury Umrah transport, private GMC Yukons, and Saudi e-visa from Qatar. Serving pilgrims in Doha, Pakistan, and Saudi Arabia since 2008.",
  keywords: "Qatar to Makkah taxi, Doha to Makkah transport, Umrah taxi Qatar, Doha to Madinah bus, Qatar Umrah visa, Saudi e-visa Qatar, VIP Umrah transport Doha, GCC transport Qatar, Umrah from Qatar, barkat travel",
  openGraph: {
    title: "Umrah Transport & Visa Service | Barkat Travel",
    description: "Luxury GMC & bus transport from Doha to Makkah & Madinah. Official Saudi Umrah visa in 48h. Qatar's #1 pilgrimage partner.",
    url: "https://barkattravel.com",
    siteName: "Barkat Travel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${noto.variable} ${arabic.variable} ${roboto.variable} antialiased`}
      >
        {/* Google Analytics placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
