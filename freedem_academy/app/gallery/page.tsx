
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
        backgroundImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <ImageGalleryGrid />
      <Footer />
    </main>
  );
}
