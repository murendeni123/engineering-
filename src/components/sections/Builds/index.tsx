"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BUILDS = [
  {
    id: 1, title: "The Predator",
    subtitle: "Full Off-Road Beast",
    desc: "6\" lift, 37\" mud terrains, rock sliders, snorkel & full underbody protection.",
    image: "/images/builds/build1.jpg",
    spec: ['6" Lift', '37" Tyres', '+45HP'],
  },
  {
    id: 2, title: "The Overland King",
    subtitle: "Long-Range Expedition",
    desc: "Dual battery, roof tent platform, long-range fuel tank & full suspension overhaul.",
    image: "/images/builds/build2.jpg",
    spec: ['4" Lift', '35" Tyres', '+30HP'],
  },
  {
    id: 3, title: "The Rock Crawler",
    subtitle: "Technical Trail Machine",
    desc: "Locking diffs, ultra-low transfer case, 40\" tires & custom long-travel suspension.",
    image: "/images/builds/build3.jpg",
    spec: ['8" Lift', '40" Tyres', '+60HP'],
  },
  {
    id: 4, title: "The Street Fighter",
    subtitle: "Performance & Urban",
    desc: "Lowered stance, performance tune, upgraded brakes & custom body styling.",
    image: "/images/builds/build4.jpg",
    spec: ['-1" Lift', '33" Tyres', '+80HP'],
  },
];

export default function Builds() {
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
    <section id="builds" ref={ref} className="relative" style={{ background: "#F4F3EE" }}>
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between py-10 reveal">
          <div>
            <span className="label-tag mb-4 block">Featured Work</span>
            <h2
              className="font-black text-black leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.02em" }}
            >
              The Builds
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline hidden sm:inline-flex"
          >
            Start Your Build
          </button>
        </div>
      </div>

      {/* Full-bleed grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "rgba(10,10,10,0.1)" }}>
        {BUILDS.map((b, i) => (
          <div
            key={b.id}
            className="build-card reveal group cursor-default"
            style={{ height: 440, transitionDelay: `${i * 70}ms`, background: "#EDECE6" }}
          >
            <Image
              src={b.image} alt={b.title} fill
              className="build-img" sizes="(max-width:640px) 100vw, 50vw"
            />
            <div className="build-overlay" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">

              {/* Spec pills */}
              <div className="flex gap-2 mb-4">
                {b.spec.map((s) => (
                  <span key={s} className="text-xs font-bold px-3 py-1 rounded-full tracking-wide" style={{ background: "rgba(255,98,0,0.9)", color: "#fff" }}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="text-xs font-semibold tracking-[0.12em] uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                {b.subtitle}
              </div>

              <h3
                className="text-white font-black leading-none mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.03em" }}
              >
                {b.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 320 }}>
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider mt-0" />
    </section>
  );
}
