import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
