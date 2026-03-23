"use client";

import { motion } from "motion/react";
import { HERO_STATS } from "@/utils/dummyData";
import { PiStarFourFill } from "react-icons/pi";
import { AnchorButton } from "../Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#2C2C2C] pt-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url('/images/hero-bg.jpg')",
        // }}
      />

      <div className="relative max-w-7xl w-full flex z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#C8A96E]/40 bg-[#C8A96E]/20 text-[#C8A96E] text-xs uppercase tracking-widest font-semibold mb-6"
          >
            <PiStarFourFill className="w-3 h-3" />
            <p>Est. 2020 · Jakarta</p>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-5">
            Crafted with Passion, Served with Love
          </h1>

          {/* Sub-headline */}
          <p className="text-white/75 text-lg leading-relaxed mb-9 max-w-lg">
            We source the finest beans from local farmers across Nusantara and
            roast them to perfection — creating an experience in every sip.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <AnchorButton
              theme="primary"
              href="#menu"
              motionProps={{
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
              }}
            >
              Explore Our Menu
            </AnchorButton>
            <AnchorButton
              theme=""
              href="#about"
              className="border-2 border-white/40 text-white hover:bg-white/10"
              motionProps={{
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
              }}
            >
              Our Story
            </AnchorButton>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 sm:gap-12 mt-14"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl sm:text-4xl text-[#C8A96E]">
                  {stat.value}
                </div>
                <div className="text-xs text-white/55 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
