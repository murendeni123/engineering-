"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Particle = { left: string; top: string; w: string; h: string; dur: string; del: string };

const STATS = [
  { num: "12+", label: "Years Experience" },
  { num: "500+", label: "Builds Completed" },
  { num: "50+", label: "Vehicle Models" },
  { num: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setLoaded(true);
    setParticles(
      Array.from({ length: 18 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        w: `${Math.random() * 3 + 1}px`,
        h: `${Math.random() * 3 + 1}px`,
        dur: `${Math.random() * 5 + 4}s`,
        del: `${Math.random() * 4}s`,
      }))
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#080808" }}>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/jeep-wrangler-4xe-2021.thumb_.jpeg"
          alt="MJ Auto Engineering — cinematic off-road Jeep"
          fill priority className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "brightness(0.52) contrast(1.18) saturate(1.25)" }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to right, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.72) 50%, rgba(8,8,8,0.22) 100%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(8,8,8,1) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, transparent 25%)" }} />

      {/* Orange ambient glow */}
      <div className="glow-orb z-10" style={{ width: 720, height: 720, right: "8%", top: "50%", transform: "translateY(-50%)", opacity: 0.55 }} />

      {/* Grid */}
      <div className="absolute inset-0 z-10" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div key={i} className="particle" style={{ left: p.left, top: p.top, width: p.w, height: p.h, "--duration": p.dur, "--delay": p.del } as React.CSSProperties} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-28 pb-24">
        <div className="max-w-[680px]">

          <div className={`label-tag mb-7 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Pretoria&apos;s Off-Road Specialists
          </div>

          <h1 className={`heading-display text-white mb-7 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "100ms" }}>
            Engineering<br />Power. Built<br />for the <span className="text-orange-glow">Wild.</span>
          </h1>

          <p className={`text-base sm:text-lg max-w-xl leading-relaxed mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "rgba(255,255,255,0.55)", transitionDelay: "200ms" }}>
            Pretoria&apos;s premier Jeep &amp; off-road engineering workshop. From engine
            rebuilds to full custom builds — precision-engineered for any terrain.
          </p>

          <div className={`flex flex-col xs:flex-row gap-3 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: "300ms" }}>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-orange">
              Book Your Build
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="btn-ghost">
              Explore Our Work
            </button>
          </div>

          {/* Stats */}
          <div className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "500ms" }}>
            {STATS.map((s) => (
              <div key={s.label} className="stat-pill flex-col items-start gap-1">
                <span className="text-2xl font-extrabold text-white" style={{ letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</span>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.42)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "900ms" }}>
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.28)" }}>Scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom,rgba(255,98,0,0.55),transparent)" }} />
      </div>
    </section>
  );
}
