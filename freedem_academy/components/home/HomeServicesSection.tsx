'use client';

import { useEffect, useState } from "react";
import ServicesCard from "../shared/ServicesCard";
import { User, Users, Video, Activity } from "lucide-react";
import { getServices, Service } from "@/lib/firebaseService";

// Map icon strings to components
const iconMap: { [key: string]: any } = {
  "User": User,
  "Users": Users,
  "Video": Video,
  "Activity": Activity
};

export default function HomeServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">Elite Training Programs</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
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
