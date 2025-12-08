"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/11.jpg",
  "/gallery/12.jpg"
];

export default function ImageGalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-square group overflow-hidden cursor-pointer rounded-lg"
              onClick={() => openLightbox(index)}
            >
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
                 style={{ backgroundImage: `url(${src})` }}
               />
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-bold uppercase tracking-widest border border-primary px-4 py-2 hover:bg-primary hover:text-white transition-colors">
                    View
                  </span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 z-50"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[selectedIndex]} 
            alt={`Gallery image ${selectedIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain select-none"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          />

          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full z-50"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
