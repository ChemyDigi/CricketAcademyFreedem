
import NavBar from "../components/shared/NavBar";
import HeroSection from "../components/shared/HeroSection";
import HomeIntroSection from "../components/home/HomeIntroSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import HomeEventsSection from "../components/home/HomeEventsSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Unleash Your Potential" 
        subtitle="Join the premier cricket academy dedicated to creating the legends of tomorrow."
        isHome={true}
        backgroundImage="/home/hero.png" 
      />
      <HomeIntroSection />
      <HomeServicesSection />
      <HomeEventsSection />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}
