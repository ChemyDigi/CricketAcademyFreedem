'use client';

import { useEffect, useState } from "react";
import EventCard from "../shared/EventCard";
import { motion } from "framer-motion";
import { getEvents, Event } from "@/lib/firebaseService";

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

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
      {events.map((event) => (
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
