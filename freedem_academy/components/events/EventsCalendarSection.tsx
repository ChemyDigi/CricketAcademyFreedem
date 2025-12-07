
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function EventsCalendarSection() {
  // Static calendar UI for demo
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="py-16 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121214] p-8 border border-white/5 rounded-lg">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white uppercase flex items-center gap-4">
              <span className="text-primary">June 2025</span>
            </h2>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded"><ChevronLeft size={20} /></button>
              <button className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded"><ChevronRight size={20} /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-4 text-center mb-4">
            {days.map(d => <div key={d} className="text-gray-500 text-sm font-bold uppercase">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-4">
            {dates.map(date => (
              <div key={date} className={`h-24 p-2 border border-white/5 relative hover:bg-white/5 transition-colors cursor-pointer ${date === 15 ? 'bg-primary/20 border-primary/50' : ''}`}>
                 <span className={`text-sm ${date === 15 ? 'text-primary font-bold' : 'text-gray-400'}`}>{date}</span>
                 {date === 15 && (
                    <div className="mt-2 text-[10px] bg-primary text-white p-1 rounded truncate">
                      Summer Camp
                    </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
