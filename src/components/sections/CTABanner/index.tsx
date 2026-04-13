"use client";

import { useEffect, useRef } from "react";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "#080808" }}>

      {/* Orange gradient fill */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(255,98,0,0.12) 0%,rgba(255,98,0,0.04) 50%,rgba(8,8,8,0) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(255,98,0,0.10) 0%,transparent 70%)" }} />

      {/* Border top/bottom */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(255,98,0,0.25),transparent)" }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(to right,transparent,rgba(255,98,0,0.18),transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <div className="label-tag justify-center mb-7 reveal">
          Ready to Transform Your Ride?
        </div>
        <h2 className="heading-xl text-white mb-6 reveal" style={{ transitionDelay: "80ms" }}>
          Engineering at its<br />
          <span style={{ color: "#FF6200" }}>Finest. Built for You.</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto reveal" style={{ color: "rgba(255,255,255,0.5)", transitionDelay: "160ms" }}>
          Whether it&apos;s a diagnostic check or a full off-road transformation, our team is ready to engineer your vision into reality.
        </p>

        <div className="flex flex-col xs:flex-row gap-4 justify-center reveal" style={{ transitionDelay: "240ms" }}>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn-orange">
            Book Your Build
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a href="https://wa.me/27785406778" target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.857L.057 23.986l6.304-1.648A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.858 0-3.6-.504-5.1-1.373l-.366-.218-3.742.979 1.002-3.638-.239-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
