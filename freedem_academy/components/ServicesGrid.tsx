
import ServicesCard from "./ServicesCard";
import servicesData from "../data/services.json";
import { User, Users, Video, Activity, Target, Shield, Zap, Award } from "lucide-react";

// Extended icon map
const iconMap: { [key: string]: any } = {
  "User": User,
  "Users": Users,
  "Video": Video,
  "Activity": Activity,
  "Target": Target,
  "Shield": Shield,
  "Zap": Zap,
  "Award": Award
};

export default function ServicesGrid() {
  return (
    <section className="py-10 bg-[#0B0B0D] pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServicesCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon] || User}
            />
          ))}
          {/* Static additions for demo if json is short */}
          <ServicesCard 
            title="Mental Conditioning" 
            description="Psychological training to build mental toughness for high-pressure games."
            icon={Zap}
          />
           <ServicesCard 
            title="Nutritional Guidance" 
            description="Diet plans tailored for cricketers to maintain peak physical condition."
            icon={Activity}
          />
        </div>
      </div>
    </section>
  );
}
