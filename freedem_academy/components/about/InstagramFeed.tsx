"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg"
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-[#0B0B0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">
              Our Network
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Follow us on Instagram
            </h2>
            <p className="text-gray-400 text-lg">
              Stay connected with our latest updates, training moments, and
              academy highlights. Follow us on Instagram for more.
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/freedemuae"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Instagram size={20} />
            <span>@FreedemAcademy</span>
          </a>
        </div>

        {/* Masonry-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[400px]">
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden h-[400px] md:h-full">
             <Image
              src={images[0]}
              alt="Highlight moment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
               <Instagram className="text-white w-12 h-12 drop-shadow-lg" />
            </div>
          </div>

          {/* Secondary Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4 h-full">
            <div className="relative group rounded-2xl overflow-hidden flex-1 min-h-[200px]">
              <Image
                src={images[1]}
                alt="Training session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden flex-1 min-h-[200px]">
               <Image
                src={images[2]}
                alt="Team spirit"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4 h-full">
             <div className="relative group rounded-2xl overflow-hidden flex-1 min-h-[200px]">
              <Image
                src={images[3]}
                alt="Academy life"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
             <div className="relative group rounded-2xl overflow-hidden flex-1 min-h-[200px]">
              <Image
                src={images[4]}
                alt="Victory moment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
