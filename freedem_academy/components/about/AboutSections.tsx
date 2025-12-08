"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function AboutIntro() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Who We Are
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-black text-white uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          More Than Just A <span className="text-primary">Team</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Freedem Cricket Academy was founded with a singular vision: to bridge the gap between grassroots cricket and professional excellence.
          We provide a nurturing environment where passion meets discipline, creating not just better cricketers, but better human beings.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function AboutDetails() {
  return (
    <section className="py-20 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-white uppercase mb-6">
              Our Philosophy
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We believe in a science-backed approach to coaching. Our methods combine traditional cricketing wisdom with modern technology
              and biomechanics. We focus on individual attention, ensuring that every player's unique strengths are honed.
            </p>

            {/* Bullet Points with Stagger */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {[
                "Player-Centric Approach",
                "State-of-the-Art Analysis",
                "Mental Conditioning",
                "Holistic Development",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center text-white font-medium"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="text-primary w-5 h-5 mr-3" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE BLOCK */}
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-primary/10 -rotate-3 rounded-lg" />

            <motion.div
              className="absolute inset-0 bg-cover bg-center rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
              }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
