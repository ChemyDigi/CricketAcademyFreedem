"use client";

import FacilityCard from "./FacilityCard";
import { motion } from "framer-motion";

const facilities = [
  {
    name: "Grounds",
    description: "Natural grass and AstroTurf grounds for versatile training experiences.",
    image: "/facilities/grounds.jpg",
  },
  {
    name: "Practice Nets",
    description: "Floodlit practice nets allowing for extended training sessions.",
    image: "/facilities/practice_net.png",
  },
  {
    name: "Bowling Machines",
    description: "Advanced bowling machines for consistent and varied delivery practice.",
    image: "/facilities/bowling_machines.png",
  },
  {
    name: "Fielding Equipment",
    description: "Specialized fielding drill equipment to sharpen reflexes and agility.",
    image: "/facilities/feilding_equpments.png",
  },
  {
    name: "Pavilion & Auditorium",
    description: "Pavilion and analysis auditorium for team meetings and strategy sessions.",
    image: "/facilities/pavillion.jpg",
  },
  {
    name: "Performance Analysis",
    description: "High-speed video performance analysis to fine-tune techniques.",
    image: "/facilities/performance_analysis.png",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-24 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Where We Train
          </span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">
            World Class Facilities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        {/* Facility Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <FacilityCard
                name={facility.name}
                description={facility.description}
                image={facility.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
