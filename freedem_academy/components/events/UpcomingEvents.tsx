// 'use client'; // No longer needs to be client if it's just rendering props, but framer-motion requires client
'use client';

import EventCard from "../shared/EventCard";
import { motion } from "framer-motion";
import type { Event } from "@/app/actions/events";

interface UpcomingEventsProps {
  events?: Event[];
}

export default function UpcomingEvents({ events = [] }: UpcomingEventsProps) {
  // const [events, setEvents] = useState<Event[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const data = await getEvents();
  //       setEvents(data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchEvents();
  // }, []);

  if (events.length === 0) {
    return null;
  }





  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
         <div className="mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">What's Next</span>
            <h2 className="text-4xl font-black text-white uppercase mt-2">Upcoming Fixtures</h2>
         </div>
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
      </div>
    </section>
  );
}
