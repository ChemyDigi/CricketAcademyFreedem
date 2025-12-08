"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EventsCalendarSection() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="py-16 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Calendar Container Animation */}
        <motion.div
          className="bg-[#121214] p-8 border border-white/5 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Header */}
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-white uppercase flex items-center gap-4">
              <span className="text-primary">June 2025</span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded">
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Weekday Labels */}
          <motion.div
            className="grid grid-cols-7 gap-4 text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {days.map((d) => (
              <motion.div
                key={d}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="text-gray-500 text-sm font-bold uppercase"
              >
                {d}
              </motion.div>
            ))}
          </motion.div>

          {/* Dates Grid */}
          <motion.div
            className="grid grid-cols-7 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.03 } },
            }}
          >
            {dates.map((date) => (
              <motion.div
                key={date}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`h-24 p-2 border border-white/5 relative hover:bg-white/5 transition-colors cursor-pointer ${
                  date === 15 ? "bg-primary/20 border-primary/50" : ""
                }`}
              >
                <span
                  className={`text-sm ${
                    date === 15 ? "text-primary font-bold" : "text-gray-400"
                  }`}
                >
                  {date}
                </span>

                {date === 15 && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-2 text-[10px] bg-primary text-white p-1 rounded truncate"
                  >
                    Summer Camp
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
