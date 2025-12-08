'use client';

import EventCard from "../shared/EventCard";
import eventsData from "../../data/events.json";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      {eventsData.map((event) => (
        <motion.div
          key={event.id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
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
  );
}
