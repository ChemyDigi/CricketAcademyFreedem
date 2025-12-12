"use client";

import { useEffect, useState } from "react";
import ServicesCard from "../shared/ServicesCard";
import { User, Users, Video, Activity, Target, Shield, Zap, Award } from "lucide-react";
import { getServices, Service } from "@/lib/firebaseService";

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
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
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
      <section className="py-10 bg-[#0B0B0D] pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-[#0B0B0D] pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServicesCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon] || User}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
