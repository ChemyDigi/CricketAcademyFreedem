"use client";

import EventCard from "../shared/EventCard";
import eventsData from "../../data/events.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeEventsSection() {
  const upcomingEvents = eventsData
    .filter((e) => e.status === "upcoming")
    .slice(0, 3);

  return (
    <section className="py-24 bg-[#0B0B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              Mark Your Calendar
            </span>
            <h2 className="text-4xl font-black text-white uppercase mt-2">
              Upcoming Events
            </h2>
          </div>

          <Link
            href="/events"
            className="hidden md:flex items-center text-white font-bold uppercase tracking-wider hover:text-primary transition-colors mt-4 md:mt-0"
          >
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <EventCard
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                category={event.category}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View Button */}
        <motion.div
          className="md:hidden mt-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Link
            href="/events"
            className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-primary transition-colors"
          >
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
