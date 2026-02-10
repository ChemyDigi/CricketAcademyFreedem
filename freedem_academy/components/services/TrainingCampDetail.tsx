"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingCampDetail() {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-l-8 border-primary pl-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-0 text-white font-oswald">
                TRAINING CAMP
                </h2>
            </div>
            <p className="text-lg leading-relaxed mb-8 text-gray-400">
              Immerse yourself in an intensive training camp, where every session
              is meticulously designed to elevate your cricketing skills and
              enhance your overall performance, guided by experienced coaches and
              state-of-the-art facilities.
            </p>

            <div className="bg-[#121214] p-8 shadow-sm border-l-4 border-primary">
              <h3 className="text-2xl font-bold uppercase mb-4 text-white font-oswald">
                THIS INCLUDE
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Holistic Development",
                    text:
                      "Our cricket training camp offers a well-rounded program covering batting, bowling, and fielding techniques. Water & Consumption",
                  },
                  {
                    title: "Personalized Coaching",
                    text:
                      "Benefit from individualized coaching sessions to enhance your specific skills and address areas for improvement.",
                  },
                  {
                    title: "Strategic Gameplay",
                    text:
                      "Learn tactical approaches to the game, refining your understanding of match scenarios for better on-field performance.",
                  },
                  {
                    title: "Fitness Regimes",
                    text:
                      "Engage in fitness routines designed to boost endurance, strength, and agility, crucial for optimal cricketing performance.",
                  },
                  {
                    title: "Mental Conditioning",
                    text:
                      "Develop a resilient mindset and strategic thinking, equipping you with mental skills essential for success on the cricket field.",
                  },
                  {
                    title: "Simulated Match Scenarios",
                    text:
                      "Apply your skills in realistic match simulations, providing a platform to showcase your talent and refine your gameplay strategies.",
                  },
                ].map((item, index) => (
                  <li key={index} className="text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">{item.title}:</span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative h-[600px] w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             {/* Using a placeholder for now, ideally this should be the image from the user's prompt if available in public folder */}
             <div className="absolute inset-0 bg-gray-300 overflow-hidden shadow-xl">
                 <Image
                  src="/academy/training_camp.jpg" 
                  alt="Training Camp"
                  fill
                  className="object-cover"
                />
                 {/* Overlay to match the design curve if possible, but basic layout first */}
             </div>
          </motion.div>
        </div>
    </div>
  );
}
