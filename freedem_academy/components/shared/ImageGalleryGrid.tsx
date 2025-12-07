
const images = [
  "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1593341646782-e0b495cffd32?ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1606342898013-ec8467da44f5?ixlib=rb-1.2.1"
];

export default function ImageGalleryGrid() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden cursor-pointer rounded-lg">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                 style={{ backgroundImage: `url(${src})` }}
               />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-bold uppercase tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-white transition-colors">
                    View
                  </span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
