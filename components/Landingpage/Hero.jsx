"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = ["/banner2.webp", "/banner1.webp"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(slideNext, 5000);
    return () => clearInterval(interval);
  }, [slideNext]);

  return (
    <>
      {/* Desktop */}
      <section className="relative hidden mt-26 md:block w-full h-[100vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={images[currentIndex]}
              alt="Hero Banner"
              height={2000}
              width={2000}
              priority={currentIndex === 0} 
              quality={70}
              placeholder="blur"
              blurDataURL="/banner2.webp"
              className="w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Mobile */}
      <section className="relative block md:hidden w-full h-[190px] overflow-hidden mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex]}
              alt="Mobile Banner"
              fill
              sizes="100vw"
              priority={currentIndex === 0}
              quality={60}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Hero;