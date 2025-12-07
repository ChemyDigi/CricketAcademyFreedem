
import { CheckCircle } from "lucide-react";

export function AboutIntro() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
           Who We Are
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">
           More Than Just A <span className="text-primary">Team</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
           Freedem Cricket Academy was founded with a singular vision: to bridge the gap between grassroots cricket and professional excellence. 
           We provide a nurturing environment where passion meets discipline, creating not just better cricketers, but better human beings.
        </p>
      </div>
    </section>
  );
}

export function AboutDetails() {
  return (
    <section className="py-20 bg-[#08080A]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
                <h3 className="text-3xl font-bold text-white uppercase mb-6">Our Philosophy</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                   We believe in a science-backed approach to coaching. Our methods combine traditional cricketing wisdom with modern technology 
                   and biomechanics. We focus on individual attention, ensuring that every player's unique strengths are honed.
                </p>
                <div className="space-y-4">
                   {["Player-Centric Approach", "State-of-the-Art Analysis", "Mental Conditioning", "Holistic Development"].map((item, i) => (
                      <div key={i} className="flex items-center text-white font-medium">
                         <CheckCircle className="text-primary w-5 h-5 mr-3" />
                         {item}
                      </div>
                   ))}
                </div>
             </div>
             <div className="relative h-[400px]">
                 <div className="absolute inset-0 bg-primary/10 -rotate-3 rounded-lg" />
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 bg-cover bg-center rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500" 
                      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")' }} />
             </div>
          </div>
       </div>
    </section>
  );
}
