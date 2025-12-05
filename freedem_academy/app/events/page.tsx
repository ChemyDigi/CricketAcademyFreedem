
import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import EventsCalendarSection from "../../components/EventsCalendarSection";
import UpcomingEvents from "../../components/UpcomingEvents";
import { PastScoresTable, WinnersHighlight } from "../../components/EventsWidgets";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Events & Tournaments"
        subtitle="Stay updated with our latest matches, camps, and academy events."
        backgroundImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      
      <EventsCalendarSection />

      <section className="py-20 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">What's Next</span>
              <h2 className="text-4xl font-black text-white uppercase mt-2">Upcoming Fixtures</h2>
           </div>
           <UpcomingEvents />
        </div>
      </section>

      <section className="py-20 bg-[#08080A]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
