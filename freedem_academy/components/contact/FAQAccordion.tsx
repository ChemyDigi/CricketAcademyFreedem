
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the age limit for enrollment?",
    answer: "We accept students from age 6 upwards. There is no upper age limit for our adult fitness and advanced coaching programs."
  },
  {
    question: "Do you provide cricket gear?",
    answer: "We provide basic training equipment like stumps, balls, and cones. Students are expected to bring their own kits for personal hygiene and comfort. However, we can assist in procuring high-quality fear at discounted rates."
  },
  {
    question: "Are there trial sessions available?",
    answer: "Yes, we offer one free trial session for new joiners to experience our coaching methodology and facilities."
  },
  {
    question: "What are the timings?",
    answer: "The academy is open from 6:00 AM to 8:00 PM, seven days a week. Specific batch timings vary based on age group and skill level."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white uppercase mb-6">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div key={index} className="border border-white/5 rounded-lg overflow-hidden bg-[#121214]">
          <button 
             onClick={() => setOpenIndex(index === openIndex ? null : index)}
             className="w-full flex justify-between items-center p-4 text-left font-bold text-white uppercase hover:text-primary transition-colors"
          >
             {faq.question}
             {index === openIndex ? <Minus className="text-primary" /> : <Plus className="text-gray-500" />}
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${index === openIndex ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
             <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                {faq.answer}
             </div>
          </div>
        </div>
      ))}
    </div>
  );
}
