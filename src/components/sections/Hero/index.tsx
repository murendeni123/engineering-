"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Particle = { left: string; top: string; width: string; height: string; duration: string; delay: string };

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const grilleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setLoaded(true);
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        duration: `${Math.random() * 4 + 3}s`,
        delay: `${Math.random() * 3}s`,
      }))
    );
  }, []);

  useEffect(() => {
    if (!loaded) return;

    let gsapInstance: typeof import("gsap").gsap;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    const initGSAP = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      gsapInstance = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsapInstance.registerPlugin(ScrollTrigger);

      const tl = gsapInstance.timeline({ defaults: { ease: "power3.out" } });

      if (grilleRef.current) {
        tl.fromTo(
          grilleRef.current,
          { opacity: 0, scale: 0.7, rotateX: -20 },
          { opacity: 1, scale: 1, rotateX: 0, duration: 1.2 }
        );
      }
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { opacity: 0, y: 60, skewX: -5 },
          { opacity: 1, y: 0, skewX: 0, duration: 0.8, stagger: 0.12 },
          "-=0.6"
        );
      }
      if (subRef.current) {
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
      }
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
      }

      if (sectionRef.current && overlayRef.current) {
        gsapInstance.to(overlayRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          opacity: 0.95,
        });
      }
    };

    initGSAP();

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [loaded]);

  const handleBookBuild = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const headline = "Engineering Power. Built for the Wild.";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/jeep-wrangler-4xe-2021.thumb_.jpeg"
          alt="MJ Auto Engineering off-road vehicle"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/95" />
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-r from-dark/70 via-transparent to-dark/30"
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Particles — client-only to avoid hydration mismatch */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              "--duration": p.duration,
              "--delay": p.delay,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-4xl">

          {/* Animated Grille Logo */}
          <div
            ref={grilleRef}
            className="mb-8 opacity-0"
            style={{ perspective: "800px" }}
          >
            <div className="relative flex flex-col gap-[6px] w-24 sm:w-32 lg:w-40 group cursor-default">
              {/* Outer frame */}
              <div className="absolute -inset-3 border border-neon/20 rounded-sm" />
              <div className="absolute -inset-5 border border-neon/10 rounded-sm" />

              {/* 7 grille slots */}
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[2px]"
                  style={{ height: "6px" }}
                >
                  <div
                    className="grille-slot absolute inset-0 rounded-[2px]"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      animationDuration: "2.5s",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-[2px]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.15) 50%, transparent 100%)",
                    }}
                  />
                </div>
              ))}

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-orbitron text-[7px] sm:text-[8px] font-900 text-neon tracking-[0.3em] uppercase"
                  style={{ textShadow: "0 0 10px rgba(57,255,20,0.8)" }}
                >
                  MJ
                </span>
              </div>
            </div>
          </div>

          {/* Pre-headline badge */}
          <div
            className={`mb-6 flex items-center gap-3 transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="h-[1px] w-10 bg-neon" />
            <span className="font-rajdhani text-neon text-xs sm:text-sm tracking-[0.3em] uppercase font-600">
              Pretoria&apos;s Off-Road Specialists
            </span>
            <div className="h-[1px] w-10 bg-neon" />
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-900 leading-[1.05] tracking-tight mb-6 overflow-hidden"
          >
            {words.map((word, i) => (
              <span key={i} className="word inline-block mr-3 sm:mr-4">
                <span
                  className={
                    word === "Power." || word === "Wild."
                      ? "text-neon neon-glow"
                      : "text-white"
                  }
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="font-rajdhani text-base sm:text-lg lg:text-xl text-white/70 max-w-xl lg:max-w-2xl leading-relaxed mb-10 tracking-wide"
          >
            Pretoria&apos;s premier Jeep & off-road engineering workshop. From engine
            rebuilds to full custom builds — precision-engineered for any terrain.
          </p>

          {/* CTA buttons */}
          <div ref={ctaRef} className="flex flex-col xs:flex-row gap-4 items-center lg:items-start">
            <button
              onClick={handleBookBuild}
              className="btn-primary text-sm w-full xs:w-auto"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Book Your Build
            </button>
            <button
              onClick={handleLearnMore}
              className="font-rajdhani text-sm font-600 text-white/70 hover:text-neon transition-colors duration-300 tracking-widest uppercase flex items-center gap-2 w-full xs:w-auto justify-center"
            >
              <span>Explore Our Work</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`mt-16 flex flex-col xs:flex-row gap-6 xs:gap-10 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { num: "12+", label: "Years Experience" },
              { num: "500+", label: "Builds Completed" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="stat-number text-2xl sm:text-3xl font-orbitron font-900">
                  {stat.num}
                </div>
                <div className="font-rajdhani text-white/50 text-sm tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-rajdhani text-white/40 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-neon to-transparent animate-pulse" />
      </div>
    </section>
  );
}
