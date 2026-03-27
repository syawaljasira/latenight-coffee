"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Image from "next/image";

import {
  MENU_ITEMS,
  MENU_CATEGORIES,
  type MenuCategory,
} from "@/utils/dummyData";

const Menu = () => {
  const [activeCategory, setActiveCategory] =
    useState<MenuCategory>("signature");
  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section id="menu" className="w-full py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Our Menu</p>
          <h2 className="section-title">Signature Creations</h2>
          <p className="section-desc mx-auto">
            Handpicked favorites crafted with premium ingredients and perfected
            over years of passion.
          </p>
        </motion.div>
        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-7 py-2.5 rounded-full text-sm font-medium transition-all border-[1.5px] ${
                activeCategory === cat.key
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 92vw, (min-width: 1025px) 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-primary-dark">
                      {item.name}
                    </h3>
                    <span className="font-bold text-secondary text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="inline-block px-3.5 py-1 bg-gold/15 text-gold text-xs font-semibold rounded-full">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
