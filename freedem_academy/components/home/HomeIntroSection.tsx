"use client";

import Link from "next/link";
import { ArrowRight, Trophy, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
}

function CountUp({ from = 0, to, duration = 1 }: CounterProps) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{value}</span>;
}

export default function HomeIntroSection() {
  return (
    <section className="py-20 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              About Freedem Academy
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
              Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Champions</span> of Tomorrow
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don’t just teach cricket; we cultivate character, discipline, and excellence. 
              With world-class facilities and expert coaching, Freedem Academy is the ultimate 
              launchpad for your cricketing career.
            </p>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              {/* Stat 1 */}
              <motion.div
                className="flex items-center gap-2 pr-6 border-r border-white/10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Trophy className="text-primary w-6 h-6" />
                <div>
                  <span className="block text-2xl font-bold text-white">
                    <CountUp to={25} duration={1.2} />+
                  </span>
                  <span className="text-xs text-gray-500 uppercase">Trophies Won</span>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="flex items-center gap-2 pr-6 border-r border-white/10"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Users className="text-primary w-6 h-6" />
                <div>
                  <span className="block text-2xl font-bold text-white">
                    <CountUp to={500} duration={1.5} />+
                  </span>
                  <span className="text-xs text-gray-500 uppercase">Students</span>
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="flex items-center gap-2"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Star className="text-primary w-6 h-6" />
                <div>
                  <span className="block text-2xl font-bold text-white">
                    <CountUp to={15} duration={1.2} />+
                  </span>
                  <span className="text-xs text-gray-500 uppercase">Years Exp.</span>
                </div>
              </motion.div>
            </motion.div>

            <Link
              href="/about"
              className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 inline-flex items-center gap-2"
            >
              Discover More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          {/* Image / Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20" />

            <motion.div
              className="relative h-[500px] w-full bg-[#121214] border border-white/10 p-2 rounded-lg"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("/home/HomeIntro.jpg")',
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
