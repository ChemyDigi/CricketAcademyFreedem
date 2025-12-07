
import ServicesCard from "../shared/ServicesCard";
import servicesData from "../../data/services.json";
import { User, Users, Video, Activity } from "lucide-react";

// Map icon strings to components
const iconMap: { [key: string]: any } = {
  "User": User,
  "Users": Users,
  "Video": Video,
  "Activity": Activity
};

export default function HomeServicesSection() {
  return (
    <section className="py-24 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">Elite Training Programs</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <ServicesCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
