
export function PastScoresTable() {
  const scores = [
    { match: "Freedem vs City Club", date: "May 10, 2025", result: "Won by 20 runs", mvp: "Arjun M." },
    { match: "Freedem vs Royals", date: "May 18, 2025", result: "Lost by 2 wickets", mvp: "Sarah J." },
    { match: "Freedem vs Strikers", date: "May 25, 2025", result: "Won by 50 runs", mvp: "Rohan D." },
  ];

  return (
    <div className="bg-[#121214] p-8 border border-white/5 rounded-lg h-full">
      <h3 className="text-xl font-bold text-white uppercase mb-6 border-l-4 border-primary pl-4">Match Results</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-white/5 text-white uppercase text-xs">
            <tr>
              <th className="p-3">Match</th>
              <th className="p-3">Date</th>
              <th className="p-3">Result</th>
              <th className="p-3">MVP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {scores.map((score, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-bold text-white">{score.match}</td>
                <td className="p-3">{score.date}</td>
                <td className="p-3 text-primary">{score.result}</td>
                <td className="p-3">{score.mvp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function WinnersHighlight() {
  return (
    <div className="bg-primary p-8 rounded-lg h-full relative overflow-hidden">
       <div className="absolute top-0 right-0 p-10 opacity-10">
          {/* Decorative Icon or Pattern */}
       </div>
       <h3 className="text-xl font-bold text-white uppercase mb-4 relative z-10">Player of the Month</h3>
       <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 bg-white rounded-full flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format")'}} />
          <div>
             <h4 className="text-2xl font-black text-white uppercase">Virat K.</h4>
             <p className="text-white/80 text-sm">Consistent performance in U-19 League.</p>
          </div>
       </div>
       <div className="mt-6 border-t border-white/20 pt-4 flex justify-between text-white/80 text-sm relative z-10">
          <div>
            <span className="block font-bold text-white text-lg">450</span> Runs
          </div>
          <div>
             <span className="block font-bold text-white text-lg">12</span> Wickets
          </div>
           <div>
             <span className="block font-bold text-white text-lg">5</span> MOM
          </div>
       </div>
    </div>
  );
}
