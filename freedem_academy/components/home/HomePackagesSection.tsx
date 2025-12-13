"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import packagesData from "@/data/packages.json";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function HomePackagesSection() {
  // Display only Dubai packages as a preview
  const previewPackages = packagesData["Dubai"];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/80 font-bold tracking-widest uppercase text-sm"
          >
            Training Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mt-3 mb-6"
          >
            Our Packages
          </motion.h2>
        </div>

        {/* Packages Grid - Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {previewPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group relative bg-[#121214] border transition-all duration-300
                ${index === 2 ? 'border-primary/50 ring-1 ring-primary/20' : 'border-primary/5'}
              `}
            >
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

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <span className="block text-gray-300 text-sm font-medium">Training Days</span>
                      <span className="text-gray-400 text-sm">{pkg.trainingDays}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <span className="block text-gray-300 text-sm font-medium">Sessions</span>
                      <span className="text-gray-400 text-sm">{pkg.sessions}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/services#packages">
            <motion.button
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer hover:bg-gray-50 hover:text-primary transition-colors"
            >
              View All Packages
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
