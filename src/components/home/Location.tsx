"use client";

import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";
import { motion } from "motion/react";

import { STORE_INFO } from "@/utils/dummyData";

const Location = () => {
  return (
    <section id="location" className="w-full py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Visit Us</p>
          <h2 className="section-title">Find Our Café</h2>
          <p className="section-desc mx-auto">
            Come visit us and experience the warmth of Late Night Coffee in
            person.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 lg:h-full min-h-86 rounded-2xl overflow-hidden"
          >
            <iframe
              src={STORE_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-white p-5 rounded-2xl flex gap-4 items-center">
              <div className="relative w-12 h-12 bg-cream rounded-xl flex items-center justify-center shrink-0">
                <FiMapPin className="w-6 h-6 text-primary" />

                <FiMapPin
                  fill="#6f4e37"
                  fillOpacity={0.2}
                  className="absolute bottom-2 right-2 w-6 h-6 text-primary/40"
                />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary-dark mb-1">
                  Address
                </h4>
                <p className="text-xs text-gray leading-snug">
                  {STORE_INFO.address}
                  <br />
                  {STORE_INFO.city}
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl flex gap-4 items-center">
              <div className="relative w-12 h-12 bg-cream rounded-xl flex items-center justify-center shrink-0">
                <FiClock className="w-6 h-6 text-primary" />

                <FiClock
                  fill="#6f4e37"
                  fillOpacity={0.2}
                  className="absolute bottom-2 right-2 w-6 h-6 text-primary/40"
                />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary-dark mb-1">
                  Opening Hours
                </h4>
                <p className="text-xs text-gray leading-snug">
                  {STORE_INFO.hours.weekday.label}:{" "}
                  {STORE_INFO.hours.weekday.open} —{" "}
                  {STORE_INFO.hours.weekday.close}
                  <br />
                  {STORE_INFO.hours.weekend.label}:{" "}
                  {STORE_INFO.hours.weekend.open} —{" "}
                  {STORE_INFO.hours.weekend.close}
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-2xl flex gap-4 items-center">
              <div className="relative w-12 h-12 bg-cream rounded-xl flex items-center justify-center shrink-0">
                <FiPhone className="w-6 h-6 text-primary" />

                <FiPhone
                  fill="#6f4e37"
                  fillOpacity={0.3}
                  className="absolute bottom-2 right-2 w-6 h-6 text-primary/40"
                />
              </div>
              <div>
                <h4 className="font-serif text-base text-primary-dark mb-1">
                  Contact
                </h4>
                <p className="text-xs text-gray leading-snug">
                  {STORE_INFO.phone}
                  <br />
                  {STORE_INFO.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
