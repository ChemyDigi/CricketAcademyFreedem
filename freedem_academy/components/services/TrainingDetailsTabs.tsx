"use client";

import { useState, useEffect } from "react";
import TrainingCampDetail from "./TrainingCampDetail";
import TrainingExperienceDetail from "./TrainingExperienceDetail";
import { motion, AnimatePresence } from "framer-motion";

export default function TrainingDetailsTabs() {
  const [activeTab, setActiveTab] = useState<"camp" | "experience">("camp");

  useEffect(() => {
    const handleHashChange = () => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash;
            if (hash === "#training-experience") {
                setActiveTab("experience");
                scrollToSection();
            } else if (hash === "#training-camp") {
                setActiveTab("camp");
                scrollToSection();
            }
        }
    };

    const scrollToSection = () => {
        setTimeout(() => {
            const element = document.getElementById("training-details-section");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="training-details-section" className="py-20 bg-[#0B0B0D] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Tabs Header */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 space-y-4 md:space-y-0 md:space-x-8">
          <button
            onClick={() => setActiveTab("camp")}
            className={`px-8 py-4 text-xl font-bold uppercase tracking-wider transition-all duration-300 border-b-4 ${
              activeTab === "camp"
                ? "border-primary text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            Training Camp
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-8 py-4 text-xl font-bold uppercase tracking-wider transition-all duration-300 border-b-4 ${
              activeTab === "experience"
                ? "border-primary text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            Training Experience
          </button>
        </div>

        {/* Content Area */}
        <div className="relative">
             <AnimatePresence mode="wait">
                {activeTab === "camp" ? (
                    <motion.div
                        key="camp"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TrainingCampDetail />
                    </motion.div>
                ) : (
                    <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TrainingExperienceDetail />
                    </motion.div>
                )}
             </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
