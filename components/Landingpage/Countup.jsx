"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";

export default function HighQualityCTA() {
  return (
    <section className="relative w-full mx-auto overflow-hidden rounded-xl bg-black">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] items-stretch">
          {/*  LEFT IMAGE  */}
          <div className="relative h-[260px] md:h-auto w-full">
            <Image
              src="/cta-image.webp"
              alt="Industrial Machines"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT CONTENT  */}
          <div className="relative flex items-center bg-gradient-to-br from-black via-[#0a0a0a] to-black">
            {/* SUBTLE GRID / DOT TEXTURE */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* RED LIGHT EFFECT */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-600/20 blur-[120px]" />

            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* TEXT  */}
              <div className="max-w-2xl">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
                  High Performance. <br />
                  <span className="text-red-500">Anti Smog Gun</span>
                </h2>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Advanced industrial machines engineered for durability,
                  efficiency, and precision. Designed to handle heavy-duty
                  operations with maximum reliability.
                </p>
              </div>

              {/*  BUTTON  */}
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-semibold overflow-hidden shadow-lg shadow-red-600/30"
                >
                  <span className="relative z-10">Explore Products</span>

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
          </div>
        </div>
      </Reveal>
    </section>
  );
}
