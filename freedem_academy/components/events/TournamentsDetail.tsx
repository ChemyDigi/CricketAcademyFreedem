"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tournaments = [
  {
    title: "GULF CRICKET CHAMPIONSHIP",
    logo: "/logo/gulf.png",
  },
  {
    title: "UAE INTER SCHOOL CRICKET TOURNAMENT",
    logo: "/logo/uae.png",
  },
  {
    title: "JUNIOR LEAGUE",
    logo: "/logo/junior.png",
  },
];

export default function TournamentsDetail() {
  return (
    <section id="tournaments" className="py-20 bg-[#0B0B0D] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#B32E2E] transform skew-y-2 origin-bottom-right z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-black/20 transform skew-y-3 origin-bottom-left z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-white font-oswald leading-tight">
              LOCAL AND INTERNATIONAL <br/><span className="text-primary">TOURNAMENTS</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
              <p className="text-lg leading-relaxed text-gray-400 text-right">
              Experience the thrill of local tournaments and elevate your game with
              our international competitions, offering a platform for growth,
              competition, and global exposure in the world of cricket.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              className="bg-[#121214] p-8 rounded-none shadow-lg flex flex-col items-center justify-between text-center h-80 hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-primary group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold uppercase mb-6 text-white font-oswald leading-tight h-16 flex items-center justify-center">
                {tournament.title}
              </h3>
              
              {/* Logo Area */}
              <div className="flex-grow flex items-center justify-center w-full">
                 <div className="relative w-40 h-40 flex items-center justify-center bg-white rounded-full p-4 shadow-inner">
                    <div className="relative w-full h-full">
                        <Image
                            src={tournament.logo}
                            alt={tournament.title}
                            fill
                            className="object-contain"
                        />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
