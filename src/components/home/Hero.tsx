"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { HERO_STATS } from "@/utils/dummyData";
import { AnchorButton } from "../Button";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen inline-flex bg-light pt-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-6">
        <div className="w-full mx-auto rounded-3xl flex flex-col gap-6 sm:flex-row items-center p-6 sm:p-10 bg-cream">
          <div className="w-full sm:w-6/12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full block-flex flex-col space-y-6"
            >
              <h1 className="font-serif text-primary text-4xl sm:text-5xl lg:text-7xl leading-tight">
                Crafted with Passion,
                <br />
                Served with Love
              </h1>

              <p className="text-primary/75 text-lg leading-relaxed max-w-lg pb-2">
                We source the finest beans from local farmers across Nusantara
                and roast them to perfection — creating an experience in every
                sip.
              </p>
            </motion.div>
          </div>

          <div className="w-full sm:w-6/12 h-full">
            <Image
              src="/assets/hero/bg5.png"
              alt="Late Night Coffee"
              width={1024}
              height={682}
              className="w-full h-auto object-cover object-center rounded-2xl"
              loading="eager"
            />
          </div>
        </div>

        <div className="w-full inline-flex flex-col sm:flex-row sm:justify-between items-center gap-10">
          <div className="flex items-center gap-4 shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-12"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="max-sm:text-center">
                  <div className="font-serif text-3xl sm:text-4xl text-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary/75 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-auto lg:w-full flex justify-end gap-4">
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
              theme="outline"
              href="#about"
              motionProps={{
                whileHover: { scale: 1.03 },
                whileTap: { scale: 0.97 },
              }}
            >
              Our Story
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
