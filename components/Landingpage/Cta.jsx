"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const videos = [
  "OdoPdgHx83Y",
  "UaN-ZPn7Br4",
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-black py-12 md:py-14 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-10">
         <span className="inline-block px-4 py-1 text-sm tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-3">PRODUCT DEMO</span>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Anti Smog Gun in Action
          </h2>

          <p className="text-gray-300 my-6 max-w-2xl mx-auto">
            Watch how our high-performance anti smog gun effectively controls
            dust and improves air quality at construction sites and industrial
            zones.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((id, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden border border-white"
            >
              {/* 🔥 Lazy Load Thumbnail */}
              {activeVideo === i ? (
                <iframe
                  className="w-full h-[260px] md:h-[500px]"
                  src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                  title={`Video ${i}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setActiveVideo(i)}
                  className="cursor-pointer relative"
                >
                  <Image
                    width={100}
                    height={100}
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt="thumbnail"
                    loading="lazy"
                    className="w-full h-[221px] md:h-[330px] object-cover"
                  />

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 px-4 py-3 flex items-center justify-center rounded-full shadow-lg animate-pulse">
                      ▶
                    </div>
                  </div>
                </div>
              )}

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link href="https://www.youtube.com/@kapmixmart7796">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-semibold shadow-lg"
            >
              Explore More Videos
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}