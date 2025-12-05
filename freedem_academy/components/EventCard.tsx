
import { Calendar, MapPin, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export default function EventCard({ title, date, time, location, category }: EventCardProps) {
  return (
    <div className="flex flex-col bg-[#121214] border-l-4 border-primary p-6 hover:bg-[#1a1a1c] transition-colors duration-300">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">
          {category}
        </span>
        <div className="flex items-center text-gray-400 text-xs">
           <Calendar className="w-3 h-3 mr-1" />
           {new Date(date).toLocaleDateString()}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white uppercase mb-2 line-clamp-2">{title}</h3>
      
      <div className="mt-auto space-y-2">
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          {time}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </div>
      </div>
      
      <button className="mt-6 w-full py-2 border border-white/20 text-white text-xs font-bold uppercase hover:bg-white hover:text-black transition-all duration-300">
        Register Now
      </button>
    </div>
  );
}
