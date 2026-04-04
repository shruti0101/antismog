"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Kapmix Anti Smog Guns have significantly improved air quality at our construction sites. The dust suppression is highly effective, even in high-density areas, helping us comply with pollution control norms without any hassle.",
    name: "RAJEEV SHARMA",
    designation: "Project Manager, InfraBuild Pvt Ltd",
  },
  {
    text: "We have been using Kapmix smog guns at our mining site, and the performance is outstanding. The mist technology efficiently controls dust, improving visibility and ensuring a safer working environment for our team.",
    name: "AMIT VERMA",
    designation: "Operations Head, Rock Mining Co.",
  },
  {
    text: "Kapmix has delivered reliable and durable pollution control solutions for our industrial plant. Their anti smog guns help us maintain environmental standards and reduce airborne particles effectively.",
    name: "NEHA GUPTA",
    designation: "Plant Manager, SteelTech Industries",
  },
  {
    text: "As a municipal contractor, we rely on Kapmix Anti Smog Guns for urban dust control. The machines are easy to operate and cover large areas efficiently, making them ideal for city pollution management projects.",
    name: "VIKAS SINGH",
    designation: "Municipal Contractor, Smart City Project",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (

    <>
    
    <section style={{backgroundImage:"url(/testimonial-bg.webp)"}} className="relative h-full w-full  bg-cover   bg-center py-25 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08372C]/30"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">Our Testimonials</span>
        
        </h2>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="italic text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
              {current.text}
            </p>

            {/* Profile */}
            <div className="flex flex-col items-center">
           
              <h4 className="text-lg font-semibold">{current.name}</h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-red-500" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-red-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#176BB0]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>


    </>
  );
}
