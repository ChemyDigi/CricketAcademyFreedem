'use client';

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const signatureEvents = [
  {
    id: 1,
    title: "Gulf Cup",
    year: "2024/2025",
    description: "A prestigious tournament bringing together the best talent from across the region.",
  },
  {
    id: 2,
    title: "Nexus Future Cup",
    year: "2024/2025",
    description: "Showcasing the next generation of cricket stars in a competitive environment.",
  }
];

export default function SignatureEvents() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2">
            Signature Events
          </span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">Major Tournaments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {signatureEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full bg-[#121214] border-l-4 border-primary p-8 hover:bg-[#1a1a1c] transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
                    Signature Series
                  </span>
                  <div className="flex items-center text-gray-400 text-sm font-bold">
                     <Calendar className="w-4 h-4 mr-2 text-primary" />
                     {event.year}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white uppercase mb-2">
                    {event.title}
                  </h3>
                  <div className="h-1 w-12 bg-primary rounded group-hover:bg-primary/50 transition-colors" />
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
