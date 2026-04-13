"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    id: 1, title: "Vehicle Diagnostics",
    desc: "State-of-the-art electronic diagnostics and fault code analysis. We pinpoint issues fast with precision tools, ensuring your vehicle performs at peak efficiency.",
    features: ["ECU Scanning", "Fault Code Analysis", "Performance Testing"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: 2, title: "Engine Repairs & Rebuilds",
    desc: "Full engine overhauls, rebuilds, and performance upgrades. From top-end refreshes to complete bottom-end rebuilds — engineered for power and longevity.",
    features: ["Full Rebuilds", "Performance Upgrades", "Head Gasket Repairs"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 3, title: "Suspension & Lift Kits",
    desc: "Custom suspension setups for maximum ground clearance and off-road capability. Lift kits, coilovers, and heavy-duty upgrades tailored to your terrain.",
    features: ["Lift Kits", "Coilover Installs", "Alignment & Geometry"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 4, title: "Off-Road Custom Builds",
    desc: "Full custom off-road transformations from concept to completion. Rock crawlers, overlanders, and trail machines built to conquer any terrain.",
    features: ["Rock Sliders", "Skid Plates", "Snorkel Installs"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: 5, title: "Electrical & ECU Work",
    desc: "Advanced electrical systems, wiring harness repairs, and ECU tuning. Custom electrical builds for winches, lighting rigs, and auxiliary systems.",
    features: ["ECU Remapping", "Wiring Harness", "Auxiliary Systems"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 6, title: "Custom Quote",
    desc: "Have a unique vision? Bring us your idea — from concept to build, we engineer bespoke solutions for any platform, budget, and terrain.",
    features: ["Free Consultation", "Custom Fabrication", "Full Project Management"],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    cta: true,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#080808" }}>

      <div className="glow-orb" style={{ width: 600, height: 600, right: "-5%", top: "30%", opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 reveal">
          <div className="label-tag mb-5">What We Do</div>
          <h2 className="heading-xl text-white mb-4">
            Built for Every<br /><span style={{ color: "#FF6200" }}>Challenge</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            From precision diagnostics to full bespoke builds — six specialist services, one workshop, zero compromises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`premium-card reveal p-7 flex flex-col ${s.cta ? "relative overflow-hidden" : ""}`}
              style={{
                transitionDelay: `${i * 65}ms`,
                ...(s.cta ? { background: "linear-gradient(135deg,rgba(255,98,0,0.08) 0%,rgba(255,98,0,0.03) 100%)", borderColor: "rgba(255,98,0,0.18)" } : {}),
              }}
            >
              {s.cta && (
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: "radial-gradient(circle at top right,rgba(255,98,0,0.15),transparent 70%)" }} />
              )}

              <div className="service-icon mb-5">{s.icon}</div>

              <h3 className="text-white font-semibold text-base mb-2" style={{ letterSpacing: "-0.01em" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                {s.desc}
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <span key={f} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
                    {f}
                  </span>
                ))}
              </div>

              {s.cta ? (
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-orange w-full justify-center text-sm"
                >
                  Get a Quote
                </button>
              ) : (
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF6200")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)")}
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
