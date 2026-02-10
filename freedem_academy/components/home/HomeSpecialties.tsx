"use client";

import { motion } from "framer-motion";
import { Award, Building2, Layers, Users } from "lucide-react";

const specialties = [
  {
    title: "Expert Coaching",
    description: "Our seasoned coaches bring vast experience, guiding players to excellence.",
    icon: Award,
  },
  {
    title: "Top-notch Facilities",
    description: "Access state-of-the-art infrastructure, including cutting-edge training equipment and premium cricket grounds.",
    icon: Building2,
  },
  {
    title: "Comprehensive Programs",
    description: "From novice to elite, our tailored programs ensure holistic skill development and success in the cricketing arena.",
    icon: Layers,
  },
  {
    title: "Women Coaching",
    description: "Freedem Cricket Sport Academy is committed to fostering talent across genders, offering tailored coaching programs for aspiring female cricketers. Our women's coaching sessions provide a supportive and inclusive environment where every player is encouraged to explore their potential.",
    icon: Users,
  },
];

export default function HomeSpecialties() {
  return (
    <section className="py-24 bg-[#121214] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Specialties
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-[#0B0B0D] p-8 md:p-10 border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                
              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#1A1A1D] flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                        <item.icon className="w-8 h-8 text-primary" />
                    </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase mb-3 font-oswald tracking-wide group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
