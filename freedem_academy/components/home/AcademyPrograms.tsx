"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "TRAINING CAMP",
    description:
      "Elevate your cricket game at our intensive training camp, where experienced coaches and state of the art facilities converge to hone your skills and elevate your performance. Join us on the journey to cricket excellence!",
    image: "/academy/training_camp.jpg",
    link: "/services#training-camp",
  },
  {
    title: "TRAINING EXPERIENCE",
    description:
      "Embark on a transformative cricketing journey with our unparalleled training experience, blending expert coaching and cutting-edge facilities for a holistic development in the sport.",
    image: "/academy/traninng_experience.jpg",
    link: "/services#training-experience",
  },
  {
    title: "LOCAL AND INTERNATIONAL TOURNAMENTS",
    description:
      "Participate in thrilling local and international tournaments, where the spirit of competition meets the joy of the game, showcasing your skills on a global stage.",
    image: "/academy/tournaments.jpg",
    link: "/events#tournaments",
  },
];

export default function AcademyPrograms() {
  return (
    <section className="relative py-24 bg-[#0B0B0D] overflow-hidden">
        {/* Background Pattern Overlay - approaching the look in the image */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">
            Pathways to Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Academy Programs
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col h-full bg-[#121214] border border-white/5 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 z-10" />

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase font-oswald leading-tight tracking-wide">
                  {program.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow text-justify">
                  {program.description}
                </p>
                
                <div>
                    <Link 
                        href={program.link}
                        className="inline-block px-6 py-3 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-[#922020] transition-colors duration-300"
                    >
                        Learn More
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
