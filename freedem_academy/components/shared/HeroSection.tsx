"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  isHome?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage = "/home/hero.png",
  isHome = false,
}: HeroSectionProps) {
  return (
    <section className="relative h-[20vh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#0B0B0D]" />

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 opacity-120 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
