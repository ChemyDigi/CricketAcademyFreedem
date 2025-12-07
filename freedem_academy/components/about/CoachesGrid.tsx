
import CoachCard from "./CoachCard";
import coachesData from "../../data/coaches.json";

export default function CoachesGrid() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coachesData.map((coach) => (
            <CoachCard
              key={coach.id}
              id={coach.id}
              name={coach.name}
              role={coach.role}
              image={coach.image} // In real app, make sure images exist or use placeholders
            />
          ))}
        </div>
      </div>
    </section>
  );
}
