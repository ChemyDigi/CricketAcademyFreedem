"use client";

import { motion } from "framer-motion";

export function PastScoresTable() {
  const scores = [
    { match: "Freedem vs City Club", date: "May 10, 2025", result: "Won by 20 runs", mvp: "Arjun M." },
    { match: "Freedem vs Royals", date: "May 18, 2025", result: "Lost by 2 wickets", mvp: "Sarah J." },
    { match: "Freedem vs Strikers", date: "May 25, 2025", result: "Won by 50 runs", mvp: "Rohan D." },
  ];

  return (
    <motion.div
      className="bg-[#121214] p-8 border border-white/5 rounded-lg h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-xl font-bold text-white uppercase mb-6 border-l-4 border-primary pl-4">
        Match Results
      </h3>

      <div className="overflow-x-auto">
        <motion.table
          className="w-full text-left text-sm text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <thead className="bg-white/5 text-white uppercase text-xs">
            <tr>
              <th className="p-3">Match</th>
              <th className="p-3">Date</th>
              <th className="p-3">Result</th>
              <th className="p-3">MVP</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5">
            {scores.map((score, i) => (
              <motion.tr
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hover:bg-white/5 transition-colors"
              >
                <td className="p-3 font-bold text-white">{score.match}</td>
                <td className="p-3">{score.date}</td>
                <td className="p-3 text-primary">{score.result}</td>
                <td className="p-3">{score.mvp}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}

export function WinnersHighlight() {
  return (
    <motion.div
      className="bg-primary p-8 rounded-lg h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="absolute top-0 right-0 p-10 opacity-10"></div>

      <h3 className="text-xl font-bold text-white uppercase mb-4 relative z-10">
        Player of the Month
      </h3>

      <motion.div
        className="flex items-center gap-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div
          className="w-20 h-20 bg-white rounded-full flex-shrink-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format")',
          }}
        />
        <div>
          <h4 className="text-2xl font-black text-white uppercase">Virat K.</h4>
          <p className="text-white/80 text-sm">Consistent performance in U-19 League.</p>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 border-t border-white/20 pt-4 flex justify-between text-white/80 text-sm relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div>
          <span className="block font-bold text-white text-lg">450</span> Runs
        </div>
        <div>
          <span className="block font-bold text-white text-lg">12</span> Wickets
        </div>
        <div>
          <span className="block font-bold text-white text-lg">5</span> MOM
        </div>
      </motion.div>
    </motion.div>
  );
}
