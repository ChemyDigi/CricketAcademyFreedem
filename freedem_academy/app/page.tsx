

import HeroSection from "../components/shared/HeroSection";
import HomeIntroSection from "../components/home/HomeIntroSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomePackagesSection from "../components/home/HomePackagesSection";
import HomeEventsSection from "../components/home/HomeEventsSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import Footer from "../components/shared/Footer";

import { getEvents } from "../app/actions/events";

export default async function Home() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
        title="You are invited to change your game" 
        subtitle="Join the premier cricket academy dedicated to creating the legends of tomorrow."
        isHome={true}
        backgroundImage="/home/hero.png" 
      />
      <HomeIntroSection />
      <HomeServicesSection />
      <HomePackagesSection />
      <HomeEventsSection events={events} />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}
