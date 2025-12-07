
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    name: "Indoor Nets",
    description: "Climate-controlled indoor nets with advanced bowling machines.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Main Ground",
    description: "International standard turf wickets and lush green outfield.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Gymnasium",
    description: "High-performance gym dedicated to cricket-specific conditioning.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export default function FacilitiesSection() {
  return (
    <section className="py-24 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Where We Train</span>
          <h2 className="text-4xl font-black text-white uppercase mt-2">World Class Facilities</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              name={facility.name}
              description={facility.description}
              image={facility.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
