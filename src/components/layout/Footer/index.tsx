"use client";

import Link from "next/link";
import { SITE } from "@/constants/site";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#builds", label: "Builds" },
  { href: "#contact", label: "Contact" },
];

const SERVICES_LIST = [
  "Vehicle Diagnostics",
  "Engine Repairs & Rebuilds",
  "Suspension & Lift Kits",
  "Off-Road Custom Builds",
  "Electrical & ECU Work",
];

export default function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0"
                style={{ background: "rgba(255,98,0,0.12)", border: "1px solid rgba(255,98,0,0.25)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#FF6200" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="leading-none">
                <div className="text-white font-bold text-base tracking-tight">
                  MJ <span style={{ color: "#FF6200" }}>AUTO</span>
                </div>
                <div className="text-[9px] tracking-[0.18em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Engineering
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Pretoria&apos;s premier off-road and Jeep engineering specialists. Built to go further.
            </p>
            <div className="flex gap-2.5">
              {[
                { label: "FB", href: SITE.social.facebook },
                { label: "IG", href: SITE.social.instagram },
                { label: "WA", href: SITE.social.whatsapp },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-[10px] font-bold tracking-wide transition-all duration-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)",
                    borderRadius: "6px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,98,0,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FF6200";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.18em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors duration-300" style={{ color: "rgba(255,255,255,0.42)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF6200")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.42)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.18em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="text-sm" style={{ color: "rgba(255,255,255,0.42)" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs tracking-[0.18em] uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.28)" }}>Address</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{SITE.address}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.28)" }}>Phone</p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-sm font-medium transition-colors duration-300" style={{ color: "#FF6200" }}>
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.28)" }}>Hours</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{SITE.hours.weekdays}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{SITE.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} MJ Auto Engineering (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            391 Ketjen St, Pretoria West · 078 540 6778
          </p>
        </div>
      </div>
    </footer>
  );
}
