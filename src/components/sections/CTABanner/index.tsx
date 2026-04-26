"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Your Vehicle Serviced?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether it&apos;s routine maintenance or a complex repair, our expert team is ready to help. 
            Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded font-semibold text-base transition-colors"
            >
              Book a Service
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:0785406778"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded font-semibold text-base transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
