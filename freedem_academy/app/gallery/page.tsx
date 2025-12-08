
import NavBar from "../../components/shared/NavBar";
import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import ImageGalleryGrid from "../../components/shared/ImageGalleryGrid";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Gallery"
        subtitle="Moments of glory, training sessions, and academy life."
        backgroundImage="/gallery/hero_image.png"
      />
      <ImageGalleryGrid />
      <Footer />
    </main>
  );
}
