"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/constants/site";

const INFO = [
  {
    label: "Address",
    value: "391 Ketjen St, Pretoria West, Pretoria, 0183",
    href: "https://maps.google.com/?q=391+Ketjen+St+Pretoria+West",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "078 540 6778",
    href: "tel:0785406778",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Hours (Mon–Fri)",
    value: "6:00 AM – 5:00 PM",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Hours (Sat–Sun)",
    value: "9:00 AM – 4:00 PM",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#080808" }}>

      <div className="glow-orb" style={{ width: 500, height: 500, right: "-5%", bottom: "10%", opacity: 0.35 }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="mb-14 reveal">
          <div className="label-tag mb-5">Get In Touch</div>
          <h2 className="heading-xl text-white">
            Let&apos;s Build<br /><span style={{ color: "#FF6200" }}>Something Epic</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Info */}
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <p className="text-sm sm:text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Visit our workshop in Pretoria West, give us a call, or send a message below. We&apos;ll get back to you fast to discuss your build.
            </p>

            <div className="space-y-4 mb-10">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="service-icon flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.32)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors duration-300" style={{ color: "rgba(255,255,255,0.75)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF6200")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                      >{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={SITE.social.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="btn-orange w-full justify-center"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.528 5.857L.057 23.986l6.304-1.648A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.858 0-3.6-.504-5.1-1.373l-.366-.218-3.742.979 1.002-3.638-.239-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden" style={{ height: 200, border: "1px solid rgba(255,255,255,0.06)" }}>
              <iframe
                src={SITE.mapEmbed}
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.85)" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MJ Auto Engineering location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "160ms" }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl" style={{ background: "rgba(255,98,0,0.04)", border: "1px solid rgba(255,98,0,0.15)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(255,98,0,0.12)", border: "1px solid rgba(255,98,0,0.25)" }}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#FF6200" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-7 rounded-2xl flex flex-col gap-5" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.42)" }}>Name</label>
                  <input
                    type="text" required placeholder="Your full name"
                    className="form-input"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.42)" }}>Phone</label>
                  <input
                    type="tel" required placeholder="e.g. 078 540 6778"
                    className="form-input"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.42)" }}>Service</label>
                  <select className="form-input" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                    <option value="">Select a service</option>
                    <option>Vehicle Diagnostics</option>
                    <option>Engine Repairs & Rebuilds</option>
                    <option>Suspension & Lift Kits</option>
                    <option>Off-Road Custom Builds</option>
                    <option>Electrical & ECU Work</option>
                    <option>Custom Quote</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.42)" }}>Message</label>
                  <textarea
                    rows={4} placeholder="Tell us about your build vision..."
                    className="form-input resize-none"
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
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
    </section>
  );
}
