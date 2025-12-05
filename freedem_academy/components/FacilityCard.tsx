
import Image from "next/image";

interface FacilityCardProps {
  name: string;
  image: string;
  description: string;
}

export default function FacilityCard({ name, image, description }: FacilityCardProps) {
  return (
    <div className="relative group h-80 overflow-hidden cursor-pointer">
       {/* In production use Next Image properly */}
      <div className="absolute inset-0 bg-gray-800" />
      {/* Placeholder image logic */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="h-1 w-12 bg-primary mb-4" />
        <h3 className="text-2xl font-bold text-white uppercase mb-2">{name}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
      </div>
    </div>
  );
}
