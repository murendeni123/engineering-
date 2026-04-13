"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const BUILDS = [
  {
    id: 1, title: "The Predator", subtitle: "Full Off-Road Beast Build",
    desc: "6-inch lift, 37\" mud terrains, rock sliders, snorkel, and full underbody protection. Built to dominate any trail.",
    image: "/images/builds/build1.jpg",
    tags: ["Lift Kit", "Custom Wheels", "Snorkel", "Rock Sliders"],
    stats: [{ label: "Lift", value: '6"' }, { label: "Tyres", value: '37"' }, { label: "Power", value: "+45HP" }],
  },
  {
    id: 2, title: "The Overland King", subtitle: "Long-Range Expedition Build",
    desc: "Dual battery system, roof tent platform, long-range fuel tank, and full suspension overhaul for the ultimate overlanding rig.",
    image: "/images/builds/build2.jpg",
    tags: ["Dual Battery", "Roof Rack", "Aux Tank", "Recovery Gear"],
    stats: [{ label: "Lift", value: '4"' }, { label: "Tyres", value: '35"' }, { label: "Power", value: "+30HP" }],
  },
  {
    id: 3, title: "The Rock Crawler", subtitle: "Technical Trail Machine",
    desc: "Locking differentials, ultra-low transfer case, 40\" tires, and custom fabricated long-travel suspension for pure rock crawling performance.",
    image: "/images/builds/build3.jpg",
    tags: ["Lockers", "Long Travel", '40" Tyres', "Custom Fab"],
    stats: [{ label: "Lift", value: '8"' }, { label: "Tyres", value: '40"' }, { label: "Power", value: "+60HP" }],
  },
  {
    id: 4, title: "The Street Fighter", subtitle: "Performance Street & Track",
    desc: "Lowered stance, performance tune, upgraded brakes, and custom body styling. Where engineering meets urban aggression.",
    image: "/images/builds/build4.jpg",
    tags: ["Performance Tune", "Sport Suspension", "Brake Upgrade", "Custom Look"],
    stats: [{ label: "Lift", value: '-1"' }, { label: "Tyres", value: '33"' }, { label: "Power", value: "+80HP" }],
  },
];

export default function Builds() {
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
    <section id="builds" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0A0A0A" }}>

      <div className="glow-orb" style={{ width: 650, height: 650, left: "50%", top: "50%", transform: "translate(-50%,-50%)", opacity: 0.22 }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <div className="label-tag mb-5">Featured Work</div>
            <h2 className="heading-xl text-white">
              The <span style={{ color: "#FF6200" }}>Builds</span>
            </h2>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost self-start sm:self-auto"
          >
            Start Your Build
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {BUILDS.map((b, i) => (
            <div
              key={b.id}
              className="build-card reveal"
              style={{ height: 480, transitionDelay: `${i * 80}ms` }}
            >
              <Image
                src={b.image} alt={b.title} fill
                className="build-img" sizes="(max-width:640px) 100vw,50vw"
              />
              <div className="build-overlay" />
              <div className="build-card-border" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-7">

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {b.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <div className="mb-3">
                  <div className="text-xs font-medium mb-1 tracking-[0.12em] uppercase" style={{ color: "#FF6200" }}>{b.subtitle}</div>
                  <h3 className="heading-lg text-white">{b.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.52)" }}>{b.desc}</p>

                {/* Stats */}
                <div className="flex gap-2 flex-wrap">
                  {b.stats.map((s) => (
                    <span key={s.label} className="build-stats-pill">
                      <span style={{ color: "rgba(255,98,0,0.6)", fontSize: "0.65rem" }}>{s.label}</span>
                      {s.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
