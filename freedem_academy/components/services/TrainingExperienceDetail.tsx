"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingExperienceDetail() {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Image Side - Swapped for variety */}
          <motion.div
            className="relative h-[600px] w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <div className="absolute inset-0 bg-gray-300 overflow-hidden shadow-xl">
                 <Image
                  src="/academy/traninng_experience.jpg"
                  alt="Training Experience"
                  fill
                  className="object-cover"
                />
             </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-l-8 border-primary pl-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-white font-oswald text-right lg:text-left">
                TRAINING EXPERIENCE
                </h2>
            </div>
            
            <p className="text-lg leading-relaxed mb-8 text-gray-400">
              Embark on a transformative cricket journey with our training
              experience, blending intensive coaching, advanced techniques, and a
              passion for the sport. Unleash your potential on the field with us!
            </p>

            <div className="bg-[#121214] p-8 shadow-sm border-t-4 border-primary">
              <h3 className="text-2xl font-bold uppercase mb-4 text-white font-oswald">
                THIS INCLUDE
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Skill Enhancement",
                    text:
                      "Our training programs focus on refining specific cricketing skills, ensuring participants develop a strong foundation and advanced techniques.",
                  },
                  {
                    title: "Expert Coaching",
                    text:
                      "Benefit from the guidance of experienced coaches with a deep understanding of the game, providing personalized feedback and tailored training plans.",
                  },
                  {
                    title: "Competitive Edge",
                    text:
                      "Engage in drills and simulations that mimic match scenarios, allowing players to sharpen their abilities and gain a competitive edge in real-game situations.",
                  },
                  {
                    title: "Holistic Development",
                    text:
                      "Our training experience focuses not just on cricket skills but also on mental toughness, fitness, and overall character development.",
                  },
                  {
                    title: "Personalized Coaching",
                    text:
                      "Benefit from personalized attention and tailored coaching programs designed to enhance your strengths and address specific areas for improvement.",
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
        </div>
    </div>
  );
}
