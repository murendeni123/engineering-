"use client";

import Link from "next/link";
import { SITE } from "@/constants/site";

export default function Footer() {
  return (
    <footer style={{ background: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-14">

          {/* Brand */}
          <div>
            <div
              className="font-black text-black mb-4"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.15em" }}
            >
              MJ AUTO<br />Engineering
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#9B9B9B", maxWidth: 220 }}>
              Pretoria&apos;s premier off-road and Jeep engineering specialists.
            </p>
            <div className="flex gap-2">
              {[
                { label: "FB", href: SITE.social.facebook },
                { label: "IG", href: SITE.social.instagram },
                { label: "WA", href: SITE.social.whatsapp },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold tracking-widest transition-all duration-200"
                  style={{ border: "1.5px solid rgba(10,10,10,0.15)", color: "#9B9B9B" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#FF6200"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#FF6200"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#9B9B9B"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.15)"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "#ABABAB" }}>Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#builds", label: "Builds" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-medium transition-colors duration-200" style={{ color: "#6B6B6B" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF6200")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6B6B6B")}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "#ABABAB" }}>Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#ABABAB" }}>Address</p>
                <p className="text-sm" style={{ color: "#6B6B6B" }}>{SITE.address}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#ABABAB" }}>Phone</p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-sm font-semibold" style={{ color: "#FF6200" }}>{SITE.phone}</a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#ABABAB" }}>Hours</p>
                <p className="text-xs" style={{ color: "#9B9B9B" }}>{SITE.hours.weekdays}</p>
                <p className="text-xs" style={{ color: "#9B9B9B" }}>{SITE.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-5">
          <p className="text-xs" style={{ color: "#ABABAB" }}>
            © {new Date().getFullYear()} MJ Auto Engineering (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#C8C8C4" }}>
            Built for the wild.
          </p>
        </div>
      </div>
    </footer>
  );
}
