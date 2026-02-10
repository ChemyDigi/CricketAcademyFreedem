"use client";

import { motion } from "framer-motion";

const victories = [
  {
    count: 3,
    title: "BORCELLE PREMIER LEAGUE",
    color: "text-amber-400", // Gold
  },
  {
    count: 1,
    title: "LICERIA SUPER CUP",
    color: "text-amber-400",
  },
  {
    count: 1,
    title: "LARANA CHAMPIONS LEAGUE",
    color: "text-amber-400",
  },
];

export default function VictoryTitles() {
  return (
    <section className="relative w-full flex flex-col">
      {/* Split Background */}
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0B0B0D]">
         {/* decorative dots or pattern could go here */}
         <div className="absolute right-0 bottom-0 opacity-10">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
                <circle cx="90" cy="90" r="40" />
            </svg>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 py-10 flex-grow flex flex-col">
        {/* Header Section (Top Light Part) */}
        <div className="text-center mb-8 sm:mb-12 flex flex-col items-center">
            <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-bold tracking-[0.2em] uppercase mb-2 text-sm md:text-base"
          >
            VICTORY TITLES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            VICTORY IS IN THE DNA
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        {/* Trophies Section (Spanning both parts) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">
          {victories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              {/* Trophy Icon Area - Positioned to bridge the gap if needed, or just centered */}
            {/* Count and Title (Bottom Dark Part) */}
              <div className="flex flex-col items-center mt-4 space-y-2">
                <span className="text-6xl md:text-7xl font-bold text-primary font-oswald">
                  {item.count}
                </span>
                <span className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider max-w-[200px]">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
