"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const STATS = [
  { num: "12+", label: "Years in Business" },
  { num: "500+", label: "Builds Completed" },
  { num: "50+", label: "Vehicle Models Serviced" },
  { num: "100%", label: "Passion for Off-Road" },
];

const VALUES = [
  {
    title: "Precision Engineering",
    desc: "Every bolt torqued, every weld inspected. We don't cut corners on your build.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Performance Focused",
    desc: "We build for real-world performance — trails, mud, rocks, and everything in between.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Trusted Expertise",
    desc: "Over a decade of specialized off-road experience in the heart of Pretoria.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0A0A0A" }}>

      {/* Glow accents */}
      <div className="glow-orb" style={{ width: 500, height: 500, left: "-8%", top: "20%", opacity: 0.45 }} />
      <div className="glow-orb" style={{ width: 350, height: 350, right: "5%", bottom: "10%", opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="mb-16 reveal">
          <div className="label-tag mb-5">Who We Are</div>
          <h2 className="heading-xl text-white">
            Built on Passion,<br />
            <span style={{ color: "#FF6200" }}>Driven by Precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Text */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed mb-5 reveal" style={{ color: "rgba(255,255,255,0.62)", transitionDelay: "80ms" }}>
              MJ Auto Engineering was founded on a simple belief: every off-road vehicle deserves to be built with the same care and precision as the toughest terrain it will face. Based in Pretoria West, we&apos;ve grown into one of South Africa&apos;s most trusted off-road engineering workshops.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-10 reveal" style={{ color: "rgba(255,255,255,0.45)", transitionDelay: "150ms" }}>
              From full custom off-road builds to precision engine rebuilds, our team brings decades of combined experience to every vehicle that enters our workshop. We specialise in 4x4 platforms with a deep passion for Jeep-style engineering.
            </p>

            {/* Values */}
            <div className="space-y-5 mb-10">
              {VALUES.map((v, i) => (
                <div key={v.title} className="reveal flex gap-4 items-start" style={{ transitionDelay: `${220 + i * 80}ms` }}>
                  <div className="service-icon mt-0.5">{v.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: "500ms" }}>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-orange"
              >
                Start Your Build
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-3 reveal" style={{ transitionDelay: "100ms" }}>
            <div className="col-span-2 relative overflow-hidden rounded-xl" style={{ height: 260 }}>
              <Image src="/images/about/main.png" alt="MJ Auto Engineering workshop" fill className="object-cover object-center transition-transform duration-700 hover:scale-105" sizes="(max-width:1024px) 100vw,50vw" style={{ filter: "brightness(0.8) contrast(1.1)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,8,0.55),transparent)" }} />
              <div className="absolute inset-0 rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.07)" }} />
            </div>
            {[
              { src: "/images/about/about1.jpg", alt: "Engine rebuild" },
              { src: "/images/about/about2.jpg.avif", alt: "Off-road mod" },
              { src: "/images/about/about3.jpg", alt: "Suspension work" },
            ].map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-lg" style={{ height: 148 }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center transition-transform duration-700 hover:scale-110" sizes="25vw" style={{ filter: "brightness(0.75) contrast(1.12)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,8,0.5),transparent)" }} />
                <div className="absolute inset-0 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.07)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 reveal" style={{ transitionDelay: "200ms" }}>
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center py-7 px-4 rounded-xl transition-all duration-400 group" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 60}ms` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,98,0,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2" style={{ letterSpacing: "-0.04em" }}>{s.num}</div>
              <div className="text-xs tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
