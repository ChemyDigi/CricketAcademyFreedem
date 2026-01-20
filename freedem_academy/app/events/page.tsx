

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import EventsCalendarSection from "../../components/events/EventsCalendarSection";
import UpcomingEvents from "../../components/events/UpcomingEvents";
import SignatureEvents from "../../components/events/SignatureEvents";
import { PastScoresTable, WinnersHighlight } from "../../components/events/EventsWidgets";

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

      <SignatureEvents />

      <section className="py-20 bg-[#08080A]">
         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2">
                  <PastScoresTable />
               </div>
               <div className="lg:col-span-1">
                  <WinnersHighlight />
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
