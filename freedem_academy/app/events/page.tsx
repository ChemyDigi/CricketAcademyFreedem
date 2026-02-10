

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import EventsCalendarSection from "../../components/events/EventsCalendarSection";
import UpcomingEvents from "../../components/events/UpcomingEvents";
import SignatureEvents from "../../components/events/SignatureEvents";
import TournamentsDetail from "../../components/events/TournamentsDetail";
import { PastScoresTable, WinnersHighlight } from "../../components/events/EventsWidgets";
import VictoryTitles from "../../components/events/VictoryTitles";

import { getEvents } from "../../app/actions/events";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
        title="Events & Tournaments"
        subtitle="Stay updated with our latest matches, camps, and academy events."
        backgroundImage="/events/hero_image.png"

      />
      
      <EventsCalendarSection events={events} />

      <UpcomingEvents events={events} />

      
      <VictoryTitles />
      
      <TournamentsDetail />

      <Footer />
    </main>
  );
}
