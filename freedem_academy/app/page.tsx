
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HomeIntroSection from "../components/HomeIntroSection";
import HomeServicesSection from "../components/HomeServicesSection";
import HomeEventsSection from "../components/HomeEventsSection";
import FacilitiesSection from "../components/FacilitiesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Unleash Your Potential" 
        subtitle="Join the premier cricket academy dedicated to creating the legends of tomorrow."
        isHome={true}
        backgroundImage="https://images.unsplash.com/photo-1593341646782-e0b495cffd32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      />
      <HomeIntroSection />
      <HomeServicesSection />
      <HomeEventsSection />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}
