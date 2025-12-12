"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import packagesData from "@/data/packages.json";
import { MapPin, Calendar, Clock, CheckCircle2 } from "lucide-react";

type Location = "Dubai" | "Ajman" | "Sharjah";
type Package = {
  name: string;
  trainingDays: string;
  sessions: string;
  fee: string;
};

const locations: Location[] = ["Dubai", "Ajman", "Sharjah"];

export default function TrainingPackagesSection() {
  const [activeLocation, setActiveLocation] = useState<Location>("Dubai");

  return (
    <section id="packages" className="py-24 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Join The Academy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mt-3 mb-6"
          >
            Training Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Choose the package that fits your commitment level and goals. 
            Structured programs designed to elevate your game.
          </motion.p>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1A1A1C] p-1.5 border border-white/5 inline-flex">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setActiveLocation(location)}
                className={`
                  relative px-8 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300
                  ${activeLocation === location ? "text-white" : "text-gray-400 hover:text-white"}
                `}
              >
                {activeLocation === location && (
                  <motion.div
                    layoutId="activeLocation"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData[activeLocation].map((pkg: Package, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative bg-[#121214] border transition-all duration-300
                ${index === 2 ? 'border-primary/50 ring-1 ring-primary/20' : 'border-white/5'}
              `}
            >
              {/* Highlight for "Best Value" or similar if needed, using index 2 as "Elite/Pro" usually */}
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Pro Choice
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-white uppercase mb-2">{pkg.name}</h3>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-primary">{pkg.fee.split('/')[0]}</span>
                  <span className="text-gray-500 text-sm font-medium">/{pkg.fee.split('/')[1]}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5 group-hover:text-primary transition-colors" />
                    <div>
                      <span className="block text-gray-300 text-sm font-medium">Training Days</span>
                      <span className="text-gray-400 text-sm">{pkg.trainingDays}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 mt-0.5 group-hover:text-primary transition-colors" />
                    <div>
                      <span className="block text-gray-300 text-sm font-medium">Sessions</span>
                      <span className="text-gray-400 text-sm">{pkg.sessions}</span>
                    </div>
                  </div>
                </div>


              </div>

              <div className="px-8 pb-8">
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
