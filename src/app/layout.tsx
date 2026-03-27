import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import "@/styles/main.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Late Night Coffee — Crafted with Passion, Served with Love",
  description:
    "Experience the finest handcrafted coffee from ethically sourced beans across the Indonesian archipelago. Visit our cozy café in Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="w-screen overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
