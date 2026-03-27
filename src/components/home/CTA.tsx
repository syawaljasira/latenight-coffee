"use client";

import { motion } from "motion/react";
import { AnchorButton } from "../Button";

const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full relative py-24 lg:py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(74,52,37,.85), rgba(44,44,44,.9)), url('/assets/cta/img-1.png')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-4">
            Ready For Great Coffee?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-5 leading-tight">
            Visit Us Today
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you&apos;re looking for your morning brew or a cozy spot to
            unwind, we&apos;re here for you — every cup, every conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnchorButton
              theme="gold"
              href="#location"
              motionProps={{
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
              }}
              className="btn-gold"
            >
              Find Our Location
            </AnchorButton>
            <AnchorButton
              theme="outline-white"
              href="#menu"
              motionProps={{
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
              }}
            >
              View Menu
            </AnchorButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
