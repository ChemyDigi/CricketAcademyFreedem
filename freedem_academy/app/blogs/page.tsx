
import NavBar from "../../components/NavBar";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
import BlogsGrid from "../../components/BlogsGrid";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      <HeroSection 
        title="Academy News" 
        subtitle="Latest updates, instructional articles, and cricketing insights."
        backgroundImage="https://images.unsplash.com/photo-1593341646782-e0b495cffd32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      />
      <BlogsGrid />
      <Footer />
    </main>
  );
}
