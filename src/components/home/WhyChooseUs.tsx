"use client";

import { LuHandshake, LuSofa } from "react-icons/lu";
import { FiSun, FiWifi } from "react-icons/fi";
import { motion } from "motion/react";

import { USP_ITEMS } from "@/utils/dummyData";

const ICON_MAP: Record<string, React.ReactNode> = {
  sun: <FiSun className="text-2xl text-gold" />,
  handshake: <LuHandshake className="text-2xl text-gold" />,
  sofa: <LuSofa className="text-2xl text-gold" />,
  wifi: <FiWifi className="text-2xl text-gold" />,
};

const WhyChooseUs = () => {
  return (
    <section id="usp" className="w-full py-20 lg:py-28 bg-secondary text-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Why Choose Us</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            More Than Just Coffee
          </h2>
          <p className="text-white/65 text-base leading-relaxed max-w-xl mx-auto">
            We believe a great cup of coffee is only the beginning of a
            memorable experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
                background: "rgba(255,255,255,0.07)",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -6,
                background: "rgba(255,255,255,0.12)",
                transition: { duration: 0.3 },
              }}
              className="text-center p-10 rounded-2xl border border-white/10"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-gold/20 rounded-2xl flex items-center justify-center">
                {ICON_MAP[item.icon]}
              </div>
              <h3 className="font-serif text-lg mb-2.5">{item.title}</h3>
              <p className="text-sm text-light/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
