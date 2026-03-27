"use client";

import { motion, AnimatePresence } from "motion/react";
import { MdNightsStay } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/utils/dummyData";
import { AnchorButton } from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavScroll = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-light/95 backdrop-blur-md shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="#"
          className={`flex items-center gap-2 font-serif text-2xl transition-colors ${
            scrolled ? "text-primary-dark" : "text-primary"
          }`}
        >
          <MdNightsStay className="text-gold" />
          Late Night Coffee
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-dark" : "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <AnchorButton
            theme="primary"
            href="#cta"
            className="text-sm px-6 py-2.5"
            motionProps={{}}
          >
            Order Now
          </AnchorButton>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden text-2xl transition-colors ${
            scrolled ? "text-primary" : "text-light"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light border-t border-beige overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavScroll(link.href);
                    setMobileOpen(false);
                  }}
                  className="text-dark font-medium py-2 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <AnchorButton
                theme="primary"
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="text-center mt-2"
                motionProps={{}}
              >
                Order Now
              </AnchorButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
