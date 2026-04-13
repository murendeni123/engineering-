"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden" style={{ background: "#F4F3EE" }}>

      {/* ── Top divider ── */}
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* ── Section label row ── */}
        <div className="flex items-center justify-between py-6 reveal">
          <span className="label-tag">Who We Are</span>
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "#ABABAB" }}>
            Est. Pretoria West
          </span>
        </div>

        <div className="divider" />

        {/* ── Main content ── */}
        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left — large editorial headline + text */}
          <div className="py-14 lg:py-20 lg:pr-16 reveal" style={{ transitionDelay: "60ms" }}>
            <h2
              className="font-black text-black mb-8 leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                letterSpacing: "0.02em",
              }}
            >
              Built on<br />Passion.<br /><span style={{ color: "#FF6200" }}>Driven by<br />Precision.</span>
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#6B6B6B", maxWidth: 480 }}>
              MJ Auto Engineering was founded on a simple belief: every off-road vehicle deserves to be built with the same care and precision as the toughest terrain it will face. Based in Pretoria West, we&apos;ve grown into one of South Africa&apos;s most trusted off-road engineering workshops.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "#9B9B9B", maxWidth: 460 }}>
              From full custom off-road builds to precision engine rebuilds, our team brings decades of combined experience to every vehicle that enters our workshop. We specialise in 4x4 platforms with a deep passion for Jeep-style engineering.
            </p>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-black"
            >
              Start Your Build
            </button>
          </div>

          {/* Right — image grid */}
          <div className="lg:border-l py-14 lg:py-20 lg:pl-16 reveal" style={{ borderColor: "rgba(10,10,10,0.08)", transitionDelay: "120ms" }}>
            <div className="grid grid-cols-2 gap-3 h-full" style={{ maxHeight: 460 }}>

              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden" style={{ height: 240, borderRadius: "4px" }}>
                <Image
                  src="/images/about/main.png"
                  alt="MJ Auto Engineering workshop"
                  fill className="object-cover object-center img-editorial transition-transform duration-700 hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
              </div>

              {/* Three smaller images */}
              {[
                { src: "/images/about/about1.jpg", alt: "Engine work" },
                { src: "/images/about/about2.jpg.avif", alt: "4x4 modification" },
                { src: "/images/about/about3.jpg", alt: "Suspension install" },
              ].map((img) => (
                <div key={img.src} className="relative overflow-hidden" style={{ height: 110, borderRadius: "4px" }}>
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="object-cover object-center img-editorial transition-transform duration-700 hover:scale-110"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── Values row ── */}
        <div className="grid sm:grid-cols-3 gap-0 reveal" style={{ transitionDelay: "180ms" }}>
          {[
            { title: "Precision Engineering", desc: "Every bolt torqued, every weld inspected." },
            { title: "Performance Focused", desc: "Trails, mud, rocks — real-world proven builds." },
            { title: "Trusted Expertise", desc: "Over a decade of specialist off-road experience." },
          ].map((v, i) => (
            <div
              key={v.title}
              className={`py-10 ${i < 2 ? "sm:border-r" : ""} ${i > 0 ? "sm:pl-10" : ""} ${i < 2 ? "sm:pr-10" : ""}`}
              style={{ borderColor: "rgba(10,10,10,0.08)" }}
            >
              <div className="w-6 h-px mb-5" style={{ background: "#FF6200" }} />
              <h4 className="font-bold text-black text-sm mb-2 tracking-tight">{v.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#9B9B9B" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />
    </section>
  );
}
