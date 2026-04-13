"use client";

import { useEffect, useRef } from "react";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

          <div className="reveal">
            <div className="label-tag mb-6" style={{ color: "#FF6200" }}>
              Ready to Transform Your Ride?
            </div>
            <h2
              className="font-black text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "0.02em" }}
            >
              Engineering<br />at its Finest.<br /><span style={{ color: "#FF6200" }}>Built for You.</span>
            </h2>
          </div>

          <div className="reveal flex flex-col gap-4 min-w-[260px]" style={{ transitionDelay: "120ms" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 280 }}>
              Whether it&apos;s a diagnostic check or a full off-road transformation, our team is ready to engineer your vision.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-orange"
            >
              Book Your Build
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a
              href="https://wa.me/27785406778"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.color = "#0A0A0A";
                (e.currentTarget as HTMLElement).style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.857L.057 23.986l6.304-1.648A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.858 0-3.6-.504-5.1-1.373l-.366-.218-3.742.979 1.002-3.638-.239-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
