import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJ Motor Mechanics | Jeep, Dodge & Chrysler Specialists",
  description:
    "Precision automotive specialists for Jeep, Dodge & Chrysler vehicles. Expert diagnostics, repairs, transmission work, and custom builds in Pretoria.",
  keywords: [
    "Jeep specialist Pretoria",
    "Dodge repairs",
    "Chrysler service",
    "vehicle diagnostics",
    "transmission repairs",
    "MJ Motor Mechanics",
  ],
  icons: {
    icon: "/images/logo/icon.jpg",
    apple: "/images/logo/icon.jpg",
  },
  openGraph: {
    title: "MJ Motor Mechanics | Jeep, Dodge & Chrysler Specialists",
    description: "Precision Automotive Specialists",
    type: "website",
    images: ["/images/logo/icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${bebasNeue.variable}`}>
      <body className="overflow-x-hidden bg-light text-gray-800">
        {children}
      </body>
    </html>
  );
}
