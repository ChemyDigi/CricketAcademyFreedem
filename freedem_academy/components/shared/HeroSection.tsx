
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  isHome?: boolean;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage = "/home/hero.png", 
  isHome = false 
}: HeroSectionProps) {
  return (
    <section className="relative h-[20vh] md:h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        {/* In production, use real images via next/image or a simple div with bg-image */}
         <div className="absolute inset-0 bg-[#0B0B0D]" />
         {/* Placeholder for BG image */}
         <div 
           className="absolute inset-0 opacity-12\00 bg-cover bg-center" 
           style={{ backgroundImage: `url(${backgroundImage})` }}
         />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
