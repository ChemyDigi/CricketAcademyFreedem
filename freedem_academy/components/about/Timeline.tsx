"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2014 - 2017",
    description:
      "In this period, our head coach and a dedicated group of mentors came together to impart cricket coaching. Achieving several national victories in a short span, our journey is a testament to the coaching prowess that shapes aspiring talents.",
  },
  {
    year: "2017 - 2022",
    description:
      "Drawing from our collective experience, we established our academy in 2017, achieving significant milestones within a span of 5 years. From securing victories like the Nelson Mendis Trophy to nurturing over 300 students, our journey is marked by success and commitment to cricket excellence.",
  },
  {
    year: "2022 - PRESENT",
    description:
      "Transitioning from Sri Lanka to the UAE in 2022, we extended our operations, forming a partnership with esteemed UAE coaches. Currently, we are in the process of establishing a renowned cricket academy in the UAE, dedicated to fostering talent and promoting the sport's growth.",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Our History
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
            Milestones
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="absolute -left-[9px] top-2 w-5 h-5 rounded-full border-4 border-[#0B0B0D] bg-primary" />
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase font-oswald">
                {item.year}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
