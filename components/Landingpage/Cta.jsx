"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VideoSection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="w-full px-4 md:px-10">
        {/* HEADING */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-3">
            PRODUCT DEMO
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            Anti Smog Gun in Action
          </h2>

          <p className="text-gray-300 my-6 max-w-2xl mx-auto">
            Watch how our high-performance anti smog gun effectively controls
            dust and improves air quality at construction sites and industrial
            zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VIDEO 1 */}
          <div className="relative  group rounded-xl overflow-hidden border border-white">
            {/* FIXED OVERLAY */}
            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500 z-10 pointer-events-none" />

            <iframe
              className="w-full h-[260px] md:h-[500px]"
              src="https://www.youtube.com/embed/OdoPdgHx83Y"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* VIDEO 2 */}
          <div className="relative group rounded-xl overflow-hidden border border-white">
            {/* GLOW */}
            <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition duration-500 z-10" />

            <iframe
              className="w-full h-[260px] md:h-[500px]"
              src="https://www.youtube.com/embed/UaN-ZPn7Br4"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <Link href="https://www.youtube.com/@kapmixmart7796">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-semibold overflow-hidden shadow-lg shadow-red-600/30"
          >
            <span className="relative z-10">Explore More Videos</span>

            <ArrowRight size={18} className="relative z-10" />

            {/* SHINE */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12"
            />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
