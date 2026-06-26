import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Start-Rite International School | Leading School in Abuja",
  description:
    "Start-Rite International School in Abuja, Nigeria offers world-class Cambridge curriculum education from Early Years through Sixth Form. COBIS accredited with 20+ years of excellence. Admissions open for 2026/2027.",
  keywords: [
    "Start-Rite Schools",
    "International School Abuja",
    "Best School in Abuja",
    "Cambridge Curriculum Nigeria",
    "COBIS School Nigeria",
    "British School Abuja",
    "Secondary School Abuja",
    "Primary School Abuja",
    "Early Years Abuja",
  ],
  authors: [{ name: "Start-Rite International School" }],
  openGraph: {
    title: "Start-Rite International School | Leading School in Abuja",
    description:
      "World-class Cambridge education from Early Years through Sixth Form in Abuja, Nigeria. COBIS accredited with 20+ years of excellence.",
    url: "https://startriteschools.com.ng",
    siteName: "Start-Rite International School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start-Rite International School",
    description:
      "World-class Cambridge education in Abuja, Nigeria. COBIS accredited.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-body antialiased">
        {children}
      </body>
    </html>
  );
}
