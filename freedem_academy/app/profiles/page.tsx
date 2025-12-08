
import NavBar from "../../components/shared/NavBar";
import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import CoachesGrid from "../../components/about/CoachesGrid";

export default function ProfilesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Our Coaches" 
        subtitle="Meet the experts dedicated to shaping your future."
        backgroundImage="/coaches/hero_image.png"
      />
      <CoachesGrid />
      <Footer />
    </main>
  );
}
