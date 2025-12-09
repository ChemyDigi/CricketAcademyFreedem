

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import ServicesIntro from "../../components/services/ServicesIntro";
import ServicesGrid from "../../components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
        title="Training Programs" 
        subtitle="Comprehensive coaching modules designed for every skill level."
        backgroundImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <ServicesIntro />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
