"use client";

import { useEffect, useState } from "react";
import CoachCard from "./CoachCard";
import { motion } from "framer-motion";
import { getCoaches, Coach } from "@/lib/firebaseService";

export default function CoachesGrid() {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const data = await getCoaches();
        setCoaches(data);
      } catch (error) {
        console.error("Error fetching coaches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoaches();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-96 bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

        {/* Grid animation wrapper */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <CoachCard
                id={coach.id}
                name={coach.name}
                role={coach.role}
                image={coach.image}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
