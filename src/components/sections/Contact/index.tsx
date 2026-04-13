"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/constants/site";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    section.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative" style={{ background: "#EDECE6" }}>
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="py-10 reveal">
          <span className="label-tag mb-4 block">Get In Touch</span>
          <h2
            className="font-black text-black leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "0.02em" }}
          >
            Let&apos;s Build Something Epic
          </h2>
        </div>

        <div className="divider" />

        <div className="grid lg:grid-cols-2 gap-0">

          {/* Info column */}
          <div className="py-12 lg:pr-16 reveal" style={{ transitionDelay: "60ms" }}>

            <div className="space-y-8 mb-10">
              {[
                { label: "Address", value: "391 Ketjen St, Pretoria West, Pretoria, 0183", href: "https://maps.google.com/?q=391+Ketjen+St+Pretoria+West" },
                { label: "Phone", value: "078 540 6778", href: "tel:0785406778" },
                { label: "Hours", value: "Mon–Fri 6:00 AM – 5:00 PM · Sat–Sun 9:00 AM – 4:00 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: "#ABABAB" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-base font-semibold text-black transition-colors duration-200"
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#FF6200")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#0A0A0A")}
                    >{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: "#6B6B6B" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href={SITE.social.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="btn-black inline-flex mb-8"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.857L.057 23.986l6.304-1.648A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.858 0-3.6-.504-5.1-1.373l-.366-.218-3.742.979 1.002-3.638-.239-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="overflow-hidden rounded-sm" style={{ height: 200, border: "1px solid rgba(10,10,10,0.1)" }}>
              <iframe
                src={SITE.mapEmbed} width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(1) contrast(1.05)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="MJ Auto Engineering location"
              />
            </div>
          </div>

          {/* Form column */}
          <div className="py-12 lg:pl-16 lg:border-l reveal" style={{ borderColor: "rgba(10,10,10,0.08)", transitionDelay: "120ms" }}>
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border-2" style={{ borderColor: "#FF6200" }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FF6200" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-black text-xl mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "#9B9B9B" }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "#ABABAB" }}>Full Name</label>
                  <input type="text" required placeholder="Your name" className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "#ABABAB" }}>Phone</label>
                  <input type="tel" required placeholder="078 540 6778" className="form-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "#ABABAB" }}>Service</label>
                  <select className="form-input" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service…</option>
                    <option>Vehicle Diagnostics</option>
                    <option>Engine Repairs & Rebuilds</option>
                    <option>Suspension & Lift Kits</option>
                    <option>Off-Road Custom Builds</option>
                    <option>Electrical & ECU Work</option>
                    <option>Custom Quote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "#ABABAB" }}>Message</label>
                  <textarea rows={4} placeholder="Tell us about your vision…" className="form-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-orange justify-center mt-1">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="divider" />
    </section>
  );
}
