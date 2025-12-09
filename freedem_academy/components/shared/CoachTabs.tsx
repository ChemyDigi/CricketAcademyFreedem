"use client";

import { useState } from "react";
import { Star, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Actually, I'll avoid @/lib/utils dependency if I can, or check if it exists.
// The package.json has "clsx" and "tailwind-merge".

interface CoachTabsProps {
  specialization?: string[];
  specializationDescription?: string;
  experience?: string[];
  experienceDescription?: string;
  achievements?: string[];
  achievementDescription?: string;
}

export default function CoachTabs({
  specialization,
  specializationDescription,
  experience,
  experienceDescription,
  achievements,
  achievementDescription,
}: CoachTabsProps) {
  const [activeTab, setActiveTab] = useState<"specialization" | "achievements" | "experience">("specialization");

  const tabs = [
    { id: "specialization", label: "Specialization" },
    { id: "achievements", label: "Achievements" },
    { id: "experience", label: "Experience" },
  ] as const;

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex flex-wrap mb-8 gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              text-xl font-bold font-oswald tracking-wider uppercase mb-4 border-b pb-2 transition-colors
              ${activeTab === tab.id 
                ? "text-white border-white/10" 
                : "text-gray-500 border-transparent hover:text-gray-300"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === "specialization" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {(specialization || specializationDescription) ? (
                <div>
                  {specializationDescription && (
                    <p className="text-gray-400 mb-6 leading-relaxed">{specializationDescription}</p>
                  )}
                  {specialization && Array.isArray(specialization) && (
                    <div className="flex flex-wrap gap-3">
                      {specialization.map((spec, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary/50 transition-colors">
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic">No specialization information available.</p>
              )}
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
               {(achievements || achievementDescription) ? (
                <div>
                   {achievementDescription && (
                    <p className="text-gray-400 mb-6 leading-relaxed">{achievementDescription}</p>
                  )}
                  {achievements && achievements.length > 0 && (
                    <ul className="space-y-4">
                      {achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Trophy className="w-5 h-5 text-primary mr-4 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
               ) : (
                 <p className="text-gray-500 italic">No achievements listed.</p>
               )}
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {(experience || experienceDescription) ? (
                <div>
                   {experienceDescription && (
                    <p className="text-gray-400 mb-6 leading-relaxed">{experienceDescription}</p>
                  )}
                  {experience && Array.isArray(experience) && (
                    <ul className="space-y-4">
                      {experience.map((exp, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Star className="w-5 h-5 text-primary mr-4 flex-shrink-0 mt-1" />
                          <span className="leading-relaxed">{exp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 italic">No experience information available.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
