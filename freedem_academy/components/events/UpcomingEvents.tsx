
import EventCard from "../shared/EventCard";
import eventsData from "../../data/events.json";

export default function UpcomingEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {eventsData.map((event) => (
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
  );
}
