"use client";

import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { MdNightsStay } from "react-icons/md";
import { useState } from "react";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";
import moment from "moment";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/utils/dummyData";

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <FiInstagram />,
  twitter: <FiTwitter />,
  facebook: <FiFacebook />,
  tiktok: <SiTiktok />,
};

export default function Footer() {
  const [currentYear] = useState(moment().year());

  return (
    <footer className="relative  bg-primary-dark text-white pt-16 pb-8 -mt-0.5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <Link
              href="#"
              className="flex items-center gap-2 font-serif text-xl mb-4"
            >
              <MdNightsStay className="w-5 h-5 text-gold" />
              Late Night Coffee
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Crafting exceptional coffee from ethically sourced beans across
              the Indonesian archipelago since 2018.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all"
                  aria-label={link.label}
                >
                  {SOCIAL_ICON_MAP[link.icon]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base mb-5 text-gold">Explore</h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base mb-5 text-gold">Support</h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.support.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base mb-5 text-gold">Legal</h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {currentYear} Late Night Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
