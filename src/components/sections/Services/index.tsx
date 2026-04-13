"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    num: "01", title: "Vehicle Diagnostics",
    desc: "State-of-the-art electronic diagnostics and fault code analysis. We pinpoint issues fast.",
    features: ["ECU Scanning", "Fault Code Analysis", "Performance Testing"],
  },
  {
    num: "02", title: "Engine Repairs & Rebuilds",
    desc: "Full engine overhauls, rebuilds, and performance upgrades — engineered for power and longevity.",
    features: ["Full Rebuilds", "Performance Upgrades", "Head Gasket Repairs"],
  },
  {
    num: "03", title: "Suspension & Lift Kits",
    desc: "Custom suspension setups for maximum ground clearance. Lift kits and heavy-duty upgrades.",
    features: ["Lift Kits", "Coilover Installs", "Alignment & Geometry"],
  },
  {
    num: "04", title: "Off-Road Custom Builds",
    desc: "Full custom off-road transformations from concept to completion — rock crawlers to overlanders.",
    features: ["Rock Sliders", "Skid Plates", "Snorkel Installs"],
  },
  {
    num: "05", title: "Electrical & ECU Work",
    desc: "Advanced electrical systems, ECU tuning, and custom auxiliary electrical builds.",
    features: ["ECU Remapping", "Wiring Harness", "Auxiliary Systems"],
  },
  {
    num: "06", title: "Custom Quote",
    desc: "Have a unique vision? Bring us your idea — we engineer bespoke solutions for any platform.",
    features: ["Free Consultation", "Custom Fabrication", "Full Project Management"],
    cta: true,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative" style={{ background: "#EDECE6" }}>

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between py-10 reveal">
          <div>
            <span className="label-tag mb-4 block">What We Do</span>
            <h2
              className="font-black text-black leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.02em" }}
            >
              Our Services
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-black hidden sm:inline-flex"
          >
            Get a Quote
          </button>
        </div>

        <div className="divider" />

        {/* Service rows */}
        <div>
          {SERVICES.map((s, i) => (
            <div key={s.num}>
              <div
                className={`reveal grid sm:grid-cols-[80px_1fr_1fr] lg:grid-cols-[80px_1fr_1fr_auto] items-start gap-6 py-9 group transition-colors duration-300 cursor-default`}
                style={{ transitionDelay: `${i * 50}ms` }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,98,0,0.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                {/* Number */}
                <div className="text-xs font-bold tracking-widest pt-1" style={{ color: "#ABABAB" }}>{s.num}</div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-black text-lg mb-1 tracking-tight group-hover:text-orange transition-colors duration-300"
                    style={{ letterSpacing: "-0.01em" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF6200")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#0A0A0A")}
                  >
                    {s.title}
                    {s.cta && <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full align-middle" style={{ background: "#FF6200", color: "#fff", letterSpacing: "0.06em" }}>Popular</span>}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B", maxWidth: 360 }}>{s.desc}</p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(10,10,10,0.07)", color: "#6B6B6B" }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Arrow CTA */}
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="hidden lg:flex w-10 h-10 rounded-full items-center justify-center border transition-all duration-300 self-center flex-shrink-0"
                  style={{ borderColor: "rgba(10,10,10,0.15)", color: "#0A0A0A" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FF6200";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF6200";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#0A0A0A";
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              {i < SERVICES.length - 1 && <div className="divider" />}
            </div>
          ))}
        </div>

        <div className="divider mt-0" />
      </div>
    </section>
  );
}
