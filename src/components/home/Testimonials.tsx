"use client";

import { FiStar } from "react-icons/fi";
import { motion } from "motion/react";

import { TESTIMONIALS } from "@/utils/dummyData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Reviews</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-desc mx-auto">
            Don&apos;i just take our word for it — hear from the people who make
            our day meaningful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TESTIMONIALS.map((i, index) => (
            <motion.div
              key={i.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.15,
                  duration: 0.5,
                },
              }}
              viewport={{ once: true }}
              className="bg-white p-9 rounded-2xl"
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-yellow-300/80 fill-yellow-300/80"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray text-[15px] leading-relaxed italic mb-6">
                &ldquo;{i.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center font-bold text-primary">
                  {i.initial}
                </div>
                <div>
                  <h4 className="font-serif text-sm text-primary-dark">
                    {i.name}
                  </h4>
                  <span className="text-xs text-gray">{i.source}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
