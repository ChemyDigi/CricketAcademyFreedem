
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function ServicesCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="group relative p-8 bg-[#121214] border border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors duration-300">
          <Icon className="text-primary group-hover:text-white w-6 h-6 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all duration-300 cursor-pointer">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
