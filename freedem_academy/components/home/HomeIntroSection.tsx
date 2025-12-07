
import Link from "next/link";
import { ArrowRight, Trophy, Users, Star } from "lucide-react";

export default function HomeIntroSection() {
  return (
    <section className="py-20 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              About Freedem Academy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
              Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Champions</span> of Tomorrow
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don’t just teach cricket; we cultivate character, discipline, and excellence. 
              With world-class facilities and expert coaching, Freedem Academy is the ultimate 
              launchpad for your cricketing career.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 pr-6 border-r border-white/10">
                <Trophy className="text-primary w-6 h-6" />
                <div>
                   <span className="block text-2xl font-bold text-white">25+</span>
                   <span className="text-xs text-gray-500 uppercase">Trophies Won</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pr-6 border-r border-white/10">
                <Users className="text-primary w-6 h-6" />
                <div>
                   <span className="block text-2xl font-bold text-white">500+</span>
                   <span className="text-xs text-gray-500 uppercase">Students</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-primary w-6 h-6" />
                <div>
                   <span className="block text-2xl font-bold text-white">15+</span>
                   <span className="text-xs text-gray-500 uppercase">Years Exp.</span>
                </div>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-300 clip-path-slant">
              Discover More <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
             <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20" />
             <div className="relative h-[500px] w-full bg-[#121214] border border-white/10 p-2 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for About Image */}
                <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" 
                     style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }} />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
