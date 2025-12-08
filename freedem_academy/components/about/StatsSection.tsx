"use client";

import statsData from "../../data/stats.json";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
}

function CountUp({ to, duration = 1.5 }: CountUpProps) {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toString()
  );

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}



export default function StatsSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {/* Players Trained */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="block text-5xl md:text-6xl font-black text-white mb-2">
              <CountUp to={statsData.totalPlayers} />+
            </span>
            <span className="text-black/60 font-bold uppercase tracking-widest text-sm">
              Players Trained
            </span>
          </motion.div>

          {/* Matches Won */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-5xl md:text-6xl font-black text-white mb-2">
              <CountUp to={statsData.matchesWon} />
            </span>
            <span className="text-black/60 font-bold uppercase tracking-widest text-sm">
              Matches Won
            </span>
          </motion.div>

          {/* Trophies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="block text-5xl md:text-6xl font-black text-white mb-2">
              <CountUp to={statsData.trophies} />
            </span>
            <span className="text-black/60 font-bold uppercase tracking-widest text-sm">
              Trophies
            </span>
          </motion.div>

          {/* Pro Players */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block text-5xl md:text-6xl font-black text-white mb-2">
              <CountUp to={statsData.professionalAlumni} />
            </span>
            <span className="text-black/60 font-bold uppercase tracking-widest text-sm">
              Pro Players
            </span>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
