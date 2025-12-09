
import NavBar from "../../../components/shared/NavBar";
import Footer from "../../../components/shared/Footer";
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
    <main className="min-h-screen bg-gradient-to-br from-black via-[#0a0000] to-[#220000]">
      <NavBar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <Link href="/profiles" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Coaches
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Image Side */}
          <div className="relative h-[600px] bg-[#121214] rounded-lg overflow-hidden border border-white/5">
             <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${coach.readmoreimage})` }} 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          
          {/* Info Side */}
          {/* Info Side */}
          <div>
            <span className="block text-primary font-bold tracking-widest uppercase mb-2">
              {coach.role}
            </span>
            <h1 className="text-5xl font-black text-white uppercase mb-8">{coach.name}</h1>
            
            <div className="space-y-10">
              {/* Biography */}
              <div>
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Biography</h3>
                <p className="text-gray-400 leading-relaxed">
                  {coach.bio}
                </p>
              </div>

              {/* Qualifications */}
              {(coach.qualifications || coach.qualificationDescription) && (
                <div>
                   <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Qualifications</h3>
                   {coach.qualificationDescription && (
                     <p className="text-gray-400 mb-4">{coach.qualificationDescription}</p>
                   )}
                   {coach.qualifications && (
                     <ul className="space-y-2">
                       {coach.qualifications.map((qual, idx) => (
                         <li key={idx} className="flex items-start text-white font-medium">
                           <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                           {qual}
                         </li>
                       ))}
                     </ul>
                   )}
                </div>
              )}
            </div>
            
          </div>
        </div>

        {/* Specialization - Full Width */}
        {(coach.specialization || coach.specializationDescription) && (
          <div className="w-full mb-12">
            <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Specialization</h3>
            {coach.specializationDescription && (
              <p className="text-gray-400 mb-4">{coach.specializationDescription}</p>
            )}
            {coach.specialization && Array.isArray(coach.specialization) && (
              <div className="flex flex-wrap gap-2">
                {coach.specialization.map((spec, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {spec}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Experience - Full Width */}
        {(coach.experience || coach.experienceDescription) && (
          <div className="w-full mb-12">
            <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Experience</h3>
            {coach.experienceDescription && (
              <p className="text-gray-400 mb-4">{coach.experienceDescription}</p>
            )}
            {coach.experience && Array.isArray(coach.experience) && (
              <ul className="space-y-3">
                {coach.experience.map((exp, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Star className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Achievements - Full Width */}
        {(coach.achievements || coach.achievementDescription) && (
          <div className="w-full">
            <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/10 pb-2">Achievements</h3>
            {coach.achievementDescription && (
              <p className="text-gray-400 mb-4">{coach.achievementDescription}</p>
            )}
            {coach.achievements && coach.achievements.length > 0 && (
              <ul className="space-y-3">
                {coach.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-400">
                    <Trophy className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}
