"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { ABOUT_FEATURES } from "@/utils/dummyData";
import { AnchorButton } from "../Button";

// const iconList: Record<string, React.ReactNode> = {
//   leaf: <LuLeaf className="text-xl text-secondary" />,
//   fire: <LuFlame className="text-xl text-gold" />,
//   heart: <FiHeart className="text-xl text-primary" />,
// };

const About = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/about/img-1.png"
              alt="Coffee brewing process"
              width={1024}
              height={684}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 rounded-xl overflow-hidden border-4 border-light shadow-lg">
            <Image
              src="/assets/about/img-2.png"
              alt="Process making coffee"
              width={661}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Our Story</p>
          <h2 className="section-title">From Bean to Cup, With Heart</h2>
          <p className="section-desc mb-8">
            Born from a love of great coffee and meaningful conversations. Since
            2018, we&apos;ve been dedicated to bringing you the finest
            handcrafted beverages made from ethically sourced beans across the
            Indonesian archipelago.
          </p>
          <div className="flex flex-col gap-5 mb-9">
            {ABOUT_FEATURES.map((item) => (
              <div key={item.title} className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-cream rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={item.img}
                    alt={item?.description}
                    className="object-cover object-center w-auto h-full"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <AnchorButton
            theme="primary"
            href="#menu"
            motionProps={{
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.97 },
            }}
          >
            Discover Our Menu
          </AnchorButton>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
