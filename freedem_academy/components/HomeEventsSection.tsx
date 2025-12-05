
import EventCard from "./EventCard";
import eventsData from "../data/events.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeEventsSection() {
  const upcomingEvents = eventsData.filter(e => e.status === "upcoming").slice(0, 3);

  return (
    <section className="py-24 bg-[#0B0B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Mark Your Calendar</span>
            <h2 className="text-4xl font-black text-white uppercase mt-2">Upcoming Events</h2>
          </div>
          <Link href="/events" className="hidden md:flex items-center text-white font-bold uppercase tracking-wider hover:text-primary transition-colors mt-4 md:mt-0">
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              category={event.category}
            />
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
            <Link href="/events" className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-primary transition-colors">
            View All Events <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
