import Link from "next/link";
import { SITE } from "@/constants/site";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Contact", href: "#contact" },
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
    <footer className="relative bg-dark border-t border-metal-light/20 overflow-hidden">
      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col gap-[3px] w-8">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="grille-slot h-[2px] rounded-full" style={{ animationDelay: `${i * 0.12}s` }} />
                ))}
              </div>
              <div>
                <span className="font-orbitron text-sm font-900 text-white block leading-none">MJ AUTO</span>
                <span className="font-rajdhani text-[10px] text-neon/70 tracking-[0.2em] uppercase">Engineering</span>
              </div>
            </div>
            <p className="font-rajdhani text-white/50 text-sm leading-relaxed mb-5">
              Pretoria&apos;s premier off-road and Jeep engineering specialists. Built to go further.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "FB", href: SITE.social.facebook, icon: "f" },
                { label: "IG", href: SITE.social.instagram, icon: "in" },
                { label: "WA", href: SITE.social.whatsapp, icon: "wa" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-metal-light/40 hover:border-neon/50 flex items-center justify-center font-orbitron text-[9px] text-white/50 hover:text-neon transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-orbitron text-xs font-700 text-white tracking-[0.2em] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-rajdhani text-white/50 text-sm hover:text-neon transition-colors duration-300 tracking-wide flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-neon/30 rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron text-xs font-700 text-white tracking-[0.2em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <span className="font-rajdhani text-white/50 text-sm tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neon/30 rounded-full flex-shrink-0" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-orbitron text-xs font-700 text-white tracking-[0.2em] uppercase mb-5">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-rajdhani text-white/30 text-xs tracking-[0.15em] uppercase mb-1">Address</p>
                <p className="font-rajdhani text-white/70 text-sm leading-relaxed">{SITE.address}</p>
              </div>
              <div>
                <p className="font-rajdhani text-white/30 text-xs tracking-[0.15em] uppercase mb-1">Phone</p>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="font-rajdhani text-neon text-sm hover:text-neon/80 transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="font-rajdhani text-white/30 text-xs tracking-[0.15em] uppercase mb-1">Hours</p>
                <p className="font-rajdhani text-white/60 text-xs leading-relaxed">{SITE.hours.weekdays}</p>
                <p className="font-rajdhani text-white/60 text-xs leading-relaxed">{SITE.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-metal-light/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-rajdhani text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} MJ Auto Engineering (Pty) Ltd. All rights reserved.
          </p>
          <p className="font-rajdhani text-white/20 text-xs tracking-wider">
            391 Ketjen St, Pretoria West · 078 540 6778
          </p>
        </div>
      </div>
    </footer>
  );
}
