

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import StatsSection from "../../components/about/StatsSection";
import { AboutIntro, AboutDetails } from "../../components/about/AboutSections";
import CoachesGrid from "../../components/about/CoachesGrid"; // Reusing CoachesGrid
import InstagramFeed from "../../components/about/InstagramFeed";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
         title="Our Legacy" 
         subtitle="Building character and champions since 2010."
         backgroundImage="/about/hero_image.jpg"
      />
      <AboutIntro />
      <StatsSection />
      <AboutDetails />
      <div className="py-10 bg-[#0B0B0D]">
         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white uppercase">Meet Our Mentors</h2>
         </div>
         <CoachesGrid />
      </div>
      <InstagramFeed />
      <Footer />
    </main>
  );
}
