"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// ✅ FIX: PascalCase (important)
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

// ✅ Move outside (no re-creation)
const desktopImages = ["/banner2.webp", "/banner1.webp"];
const mobileImages = ["/banner2.webp", "/banner1.webp"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(slideNext, 5000);
    return () => clearInterval(interval);
  }, [slideNext]);

  return (
    <section>
      {/* Desktop Hero */}
      <section className="relative mt-30 md:mt-36 md:h-[70vh] hidden md:flex justify-end w-full h-[100vh] xl:mt-30 xl:h-[90vh] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <MotionDiv
            key={`desktop-${currentIndex}`}
            className="absolute inset-0 w-full h-full"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={desktopImages[currentIndex]}
              alt={`Desktop banner ${currentIndex + 1}`}
              fill
              priority
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
          </MotionDiv>
        </AnimatePresence>
      </section>

      {/* Mobile Hero */}
      <section className="relative block md:hidden lg:hidden w-full mt-20 h-[193px] bg-gray-100 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <MotionDiv
            key={`mobile-${currentIndex}`}
            className="absolute inset-0 w-full h-[194px]"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={mobileImages[currentIndex]}
              alt={`Mobile banner ${currentIndex + 1}`}
              width={600}
              height={1500}
              priority
              sizes="100vw"
              quality={70}
              className="object-cover"
            />
          </MotionDiv>
        </AnimatePresence>
      </section>
    </section>
  );
};

export default Hero;