"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/constants/site";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", message: "" });
  };

  const INFO_ITEMS = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: SITE.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: SITE.phone,
      href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Weekdays",
      value: SITE.hours.weekdays,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Weekend",
      value: SITE.hours.weekend,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-charcoal overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-neon" />
            <span className="font-rajdhani text-neon text-sm tracking-[0.3em] uppercase font-600">Find Us</span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-900 text-white leading-tight">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info + form */}
          <div>
            {/* Info items */}
            <div className="space-y-5 mb-10">
              {INFO_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className="reveal flex items-start gap-4 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-neon/20 group-hover:border-neon/50 flex items-center justify-center text-neon transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-rajdhani text-white/40 text-xs tracking-[0.2em] uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-rajdhani text-white text-base hover:text-neon transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-rajdhani text-white text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="mb-10 reveal" style={{ transitionDelay: "320ms" }}>
              <a
                href={SITE.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/60 px-5 py-3 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-rajdhani text-white text-sm tracking-wider font-600">
                  Chat on WhatsApp
                </span>
                <svg className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Quick contact form */}
            <div className="reveal" style={{ transitionDelay: "400ms" }}>
              <h3 className="font-orbitron text-sm font-700 text-white mb-5 tracking-wide">
                Send a Quick Message
              </h3>
              {submitted ? (
                <div className="border border-neon/30 bg-neon/5 p-6 text-center">
                  <div className="font-orbitron text-neon text-sm mb-2">Message Sent!</div>
                  <p className="font-rajdhani text-white/60 text-sm">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-dark/60 border border-metal-light/30 focus:border-neon/50 text-white placeholder-white/30 font-rajdhani text-sm px-4 py-3 outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                        className="w-full bg-dark/60 border border-metal-light/30 focus:border-neon/50 text-white placeholder-white/30 font-rajdhani text-sm px-4 py-3 outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <textarea
                    placeholder="Tell us about your vehicle and what you need..."
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full bg-dark/60 border border-metal-light/30 focus:border-neon/50 text-white placeholder-white/30 font-rajdhani text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
                  />
                  <button type="submit" className="btn-primary text-sm w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right — Map */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px] border border-neon/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.9!2d28.1500!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561c3b8e7a3d7%3A0x0!2z391+Ketjen+St,+Pretoria+West,+Pretoria,+0183!5e0!3m2!1sen!2sza!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) invert(90%) contrast(85%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MJ Auto Engineering Location"
              />
              {/* Map overlay badge */}
              <div className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm border border-neon/20 px-4 py-3">
                <p className="font-orbitron text-white text-xs font-700 mb-0.5">MJ Auto Engineering</p>
                <p className="font-rajdhani text-neon text-xs">391 Ketjen St, Pretoria West</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
