
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { ArrowLeft, Trophy, Star } from "lucide-react";
import Link from "next/link";
import coachesData from "../../../data/coaches.json";

// This would typically fetch data based on params.id
// For SSG/SSR you'd use generateStaticParams or standard fetch

export default async function CoachDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const coach = coachesData.find(c => c.id === id);

  if (!coach) {
    return (
       <main className="min-h-screen bg-[#0B0B0D] flex items-center justify-center text-white">
         <div>Coach not found</div>
       </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0B0B0D]">
      <NavBar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/profiles" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Coaches
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Side */}
          <div className="relative h-[600px] bg-[#121214] rounded-lg overflow-hidden border border-white/5">
             <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${coach.image})` }} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Info Side */}
          <div>
            <span className="block text-primary font-bold tracking-widest uppercase mb-2">
              {coach.role}
            </span>
            <h1 className="text-5xl font-black text-white uppercase mb-8">{coach.name}</h1>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Biography</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {coach.bio}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Specialty</h3>
                <p className="text-white font-medium">
                  {coach.specialty}
                </p>
              </div>
              
               <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Experience</h3>
                <div className="flex items-center gap-2 text-primary">
                   <Star className="w-5 h-5" />
                   <span className="text-white font-bold text-2xl">{coach.experience}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Achievements</h3>
                <ul className="space-y-3">
                  {coach.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <Trophy className="w-4 h-4 text-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
