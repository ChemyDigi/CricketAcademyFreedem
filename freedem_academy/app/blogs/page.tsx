

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import BlogsGrid from "../../components/blogs/BlogsGrid";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
        title="Academy News" 
        subtitle="Latest updates, instructional articles, and cricketing insights."
        backgroundImage="/blogs/hero_image.png"
      />
      <BlogsGrid />
      <Footer />
    </main>
  );
}
