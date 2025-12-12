"use client";

import { useEffect, useState } from "react";
import ServicesCard from "../shared/ServicesCard";
import { Crosshair, Wind, RotateCw, Dumbbell, Swords, MonitorPlay, Brain, MapPin } from "lucide-react";
import { getServices, Service } from "@/lib/firebaseService";

// Extended icon map
const iconMap: { [key: string]: any } = {
  // New icons
  "Crosshair": Crosshair,
  "Wind": Wind,
  "RotateCw": RotateCw,
  "Dumbbell": Dumbbell,
  "Swords": Swords,
  "MonitorPlay": MonitorPlay,
  "Brain": Brain,
  "MapPin": MapPin,
  // Legacy icons (mapping to new visuals)
  "Target": Crosshair,
  "Zap": Wind,
  "User": RotateCw,
  "Activity": Dumbbell,
  "Users": Swords,
  "Video": MonitorPlay,
  "Shield": Brain,
  "Award": MapPin
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
              icon={iconMap[service.icon] || Crosshair}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
