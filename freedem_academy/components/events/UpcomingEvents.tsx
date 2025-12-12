"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import EventCard from "../shared/EventCard";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: string;
};

export default function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(
          collection(db, "events"),
          orderBy("createdAt", "asc")
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Event[];

        // ONLY UPCOMING EVENTS
        const upcomingEvents = data.filter(
          (event) => event.status === "upcoming"
        );

        setEvents(upcomingEvents);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <div className="text-gray-400 text-center py-12">
        Loading upcoming events...
      </div>
    );
  }

  /* ---------------- EMPTY STATE ---------------- */
  if (events.length === 0) {
    return (
      <div className="text-gray-500 text-center py-12 border border-white/10 rounded-lg">
        No upcoming events scheduled.
      </div>
    );
  }

  /* ---------------- EVENTS GRID ---------------- */
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
