
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CoachCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function CoachCard({ id, name, role, image }: CoachCardProps) {
  return (
    <div className="group relative bg-[#121214] border border-white/5 overflow-hidden transition-all duration-300 hover:border-primary">
       <div className="relative h-80 w-full overflow-hidden bg-gray-800">
          {/* In production use Next Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: `url(${image})` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h3 className="text-xl font-bold text-white uppercase mb-1">{name}</h3>
            <p className="text-primary text-sm font-medium tracking-wide uppercase">{role}</p>
          </div>
       </div>
       
       <div className="p-0">
          <Link href={`/profiles/${id}`} className="block bg-primary/10 text-primary uppercase text-xs font-bold tracking-widest text-center py-3 hover:bg-primary hover:text-white transition-colors duration-300">
             View Profile
          </Link>
       </div>
    </div>
  );
}
