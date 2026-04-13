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
  title: "MJ Auto Engineering | Off-Road & Jeep Specialists – Pretoria",
  description:
    "Pretoria's premier off-road and Jeep engineering workshop. Expert diagnostics, engine rebuilds, lift kits, custom builds, and ECU work. 391 Ketjen St, Pretoria West.",
  keywords: [
    "Jeep specialist Pretoria",
    "off-road builds",
    "lift kits Pretoria",
    "vehicle diagnostics",
    "engine rebuilds",
    "ECU tuning",
    "MJ Auto Engineering",
  ],
  openGraph: {
    title: "MJ Auto Engineering | Off-Road & Jeep Specialists",
    description: "Engineering Power. Built for the Wild.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${bebasNeue.variable}`}>
      <body className="overflow-x-hidden" style={{ background: "#F4F3EE", color: "#0A0A0A" }}>
        {children}
      </body>
    </html>
  );
}
