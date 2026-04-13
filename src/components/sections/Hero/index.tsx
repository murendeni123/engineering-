"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "#F4F3EE" }}
    >
      {/* ── Massive background word ── */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <span
          className="bg-word text-center leading-none"
          style={{
            fontSize: "clamp(6rem, 21vw, 17rem)",
            fontFamily: "'Bebas Neue', sans-serif",
            color: "#0A0A0A",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            whiteSpace: "nowrap",
          }}
        >
          BUILT.
        </span>
      </div>

      {/* ── Jeep image — floats over the word ── */}
      <div
        className={`absolute z-10 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-58%, -50%)",
          width: "clamp(420px, 60vw, 900px)",
          aspectRatio: "16/10",
        }}
      >
        <Image
          src="/images/hero/jeep-wrangler-4xe-2021.thumb_.jpeg"
          alt="MJ Auto Engineering — off-road build"
          fill
          priority
          className="object-cover object-center"
          sizes="60vw"
          style={{ filter: "contrast(1.08) saturate(0.92)", borderRadius: "6px" }}
        />
        {/* Subtle edge fade */}
        <div className="absolute inset-0 rounded-md" style={{ boxShadow: "inset 0 0 60px rgba(244,243,238,0.25)" }} />
      </div>

      {/* ── Right content panel ── */}
      <div
        className={`absolute z-20 transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ right: "clamp(20px,5vw,80px)", top: "50%", transform: "translateY(-50%)", maxWidth: 320 }}
      >
        <div className="label-tag mb-5">Pretoria&apos;s Off-Road Specialists</div>
        <h2 className="text-black font-bold mb-4 leading-tight" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.025em" }}>
          Precision-Engineered<br />for the Wild.
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#6B6B6B" }}>
          Pretoria&apos;s premier Jeep &amp; off-road engineering workshop. From engine
          rebuilds to full custom builds — built for any terrain.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-orange"
          >
            Book Your Build
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 transition-opacity duration-1000 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ borderTop: "1px solid rgba(10,10,10,0.10)" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#ABABAB" }}>
            078 540 6778
          </p>
          <p className="text-xs tracking-widest uppercase font-medium" style={{ color: "#ABABAB" }}>
            391 Ketjen St, Pretoria West
          </p>
          <p className="text-xs tracking-widest uppercase font-medium hidden sm:block" style={{ color: "#ABABAB" }}>
            Mon–Fri 6am–5pm &nbsp;·&nbsp; Sat–Sun 9am–4pm
          </p>
        </div>
      </div>

      {/* ── Mobile layout: stacked (visible only <md) ── */}
      <div className="relative z-30 flex flex-col min-h-screen md:hidden">
        {/* BG word visible behind */}
        <div className="flex-1 flex flex-col justify-center px-6 pt-28 pb-6">
          <div className="label-tag mb-4">Pretoria&apos;s Off-Road Specialists</div>
          <h2 className="text-black font-bold text-3xl leading-tight mb-3" style={{ letterSpacing: "-0.025em" }}>
            Precision-Engineered<br />for the Wild.
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6B6B", maxWidth: 320 }}>
            Pretoria&apos;s premier Jeep &amp; off-road engineering workshop — built for any terrain.
          </p>
          <div className="flex gap-3">
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-orange text-xs">Book a Build</button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="btn-outline text-xs">Our Work</button>
          </div>
        </div>

        {/* Jeep image below text on mobile */}
        <div className="relative w-full" style={{ height: 240 }}>
          <Image
            src="/images/hero/jeep-wrangler-4xe-2021.thumb_.jpeg"
            alt="MJ Auto Engineering"
            fill className="object-cover object-center"
            sizes="100vw"
            style={{ filter: "contrast(1.08) saturate(0.92)" }}
          />
        </div>
      </div>
    </section>
  );
}
