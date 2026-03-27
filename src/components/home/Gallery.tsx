"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GALLERY_IMAGES } from "@/utils/dummyData";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Gallery</p>
          <h2 className="section-title">A Glimpse Inside</h2>
          <p className="section-desc mx-auto">
            Step into our world of warmth, aroma, and carefully curated spaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[260px]"
        >
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.url}
              whileHover={{ scale: 0.98 }}
              className={`rounded-xl overflow-hidden relative group ${index == 2 || index == 3 ? "max-lg:h-[42vw]" : "max-lg:h-64"} ${
                img.space ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={img.url}
                alt={img.description}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, (min-width: 1025px) 25vw"
                loading="eager"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
