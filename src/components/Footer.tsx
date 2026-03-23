"use client";

import { FiCoffee, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/utils/dummyData";
import moment from "moment";

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <FiInstagram />,
  twitter: <FiTwitter />,
  facebook: <FiFacebook />,
  tiktok: <SiTiktok />,
};

export default function Footer() {
  return (
    <footer className="bg-[#4A3425] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 font-serif text-xl mb-4"
            >
              <FiCoffee className="text-[#C8A96E]" />
              Kopi Nusantara
            </a>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Crafting exceptional coffee from ethically sourced beans across
              the Indonesian archipelago since 2018.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#C8A96E] hover:bg-[#C8A96E] hover:text-white transition-all"
                  aria-label={link.label}
                >
                  {SOCIAL_ICON_MAP[link.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-base mb-5 text-[#C8A96E]">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.explore.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-[#C8A96E] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-base mb-5 text-[#C8A96E]">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.support.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-[#C8A96E] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-base mb-5 text-[#C8A96E]">Legal</h4>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 hover:text-[#C8A96E] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {moment().year()} Kopi Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
