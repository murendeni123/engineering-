"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Johan van der Berg",
    text: "Great service and fast turnaround! My Jeep has never run better.",
    rating: 5,
  },
  {
    name: "Sarah Mokoena",
    text: "Highly recommend MJ Motor Mechanics. Professional and reliable every time.",
    rating: 5,
  },
  {
    name: "Michael Pretorius",
    text: "Best Jeep specialists in Pretoria. They know these vehicles inside out.",
    rating: 5,
  },
  {
    name: "Linda Nkosi",
    text: "Honest pricing and excellent workmanship. Will definitely return.",
    rating: 5,
  },
  {
    name: "David Smith",
    text: "Fixed my transmission issue when others couldn't. True experts!",
    rating: 5,
  },
  {
    name: "Thandi Dlamini",
    text: "Friendly staff and they explain everything clearly. Trustworthy service.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section id="testimonials" className="section-padding bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-3"
          >
            What Our Clients Say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </motion.p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{ width: "fit-content" }}
        >
          {duplicatedReviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[320px] bg-white p-6 rounded-lg shadow-md flex-shrink-0"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-primary text-sm">
                {review.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
