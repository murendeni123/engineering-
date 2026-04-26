"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SERVICES = [
  {
    title: "Diagnostics",
    desc: "State-of-the-art electronic diagnostics and fault code analysis for all vehicle systems.",
    img: "/images/services/service1.jpg",
  },
  {
    title: "Repairs",
    desc: "Complete mechanical repairs from minor fixes to major overhauls by certified technicians.",
    img: "/images/services/service2.jpg.avif",
  },
  {
    title: "Transmission",
    desc: "Expert transmission diagnostics, repairs, and rebuilds for automatic and manual systems.",
    img: "/images/services/service3.jpg",
  },
  {
    title: "Electrical",
    desc: "Advanced electrical system repairs, ECU diagnostics, and custom wiring solutions.",
    img: "/images/about/about1.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Professional automotive services tailored to keep your vehicle running at peak performance.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                rotateX: 3, 
                rotateY: 3,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-light rounded-lg overflow-hidden shadow-md cursor-pointer group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-secondary transition-colors"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
