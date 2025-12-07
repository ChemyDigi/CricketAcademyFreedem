
import statsData from "../../data/stats.json";

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div>
              <span className="block text-5xl md:text-6xl font-black text-white mb-2">{statsData.totalPlayers}+</span>
              <span className="text-black/60 font-bold uppercase tracking-widest text-sm">Players Trained</span>
           </div>
           <div>
              <span className="block text-5xl md:text-6xl font-black text-white mb-2">{statsData.matchesWon}</span>
              <span className="text-black/60 font-bold uppercase tracking-widest text-sm">Matches Won</span>
           </div>
           <div>
              <span className="block text-5xl md:text-6xl font-black text-white mb-2">{statsData.trophies}</span>
              <span className="text-black/60 font-bold uppercase tracking-widest text-sm">Trophies</span>
           </div>
           <div>
              <span className="block text-5xl md:text-6xl font-black text-white mb-2">{statsData.professionalAlumni}</span>
              <span className="text-black/60 font-bold uppercase tracking-widest text-sm">Pro Players</span>
           </div>
        </div>
      </div>
    </section>
  );
}
