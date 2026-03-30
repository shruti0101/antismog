"use client";
import React from "react";
import Link from "next/link";
import {
  Factory,
  Building2,
  Truck,
  Warehouse,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { useRef } from "react";
const About = () => {
 const videoRef = useRef(null);
 
const industries = [
  {
    title: "Construction & Real Estate Projects",
    icon: Building2, // buildings / construction
  },
  {
    title: "Mining & Quarrying Sites",
    icon: Truck, // heavy vehicles
  },
  {
    title: "Cement & Steel Industries",
    icon: Factory, // industrial factory
  },
  {
    title: "Municipal Corporations & Smart Cities",
    icon: ShieldCheck, // govt / authority
  },
  {
    title: "Highways & Infrastructure Projects",
    icon: Warehouse, // infra / large structures
  },
  {
    title: "Waste Management & Landfills",
    icon: Wind, // pollution / environment
  },
];

  return (
    <section className="relative bg-white py-18 px-4 sm:px-14 overflow-hidden">

      <div className="w-full mx-auto grid lg:grid-cols-2 gap-14 items-center">


        {/* ===== RIGHT VIDEO AREA ===== */}
        <div className="relative">

          {/* VIDEO PLACEHOLDER */}
          <div className="w-full h-[620px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-gray-400">

          <div className=" ">
            <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          

            {/* floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900">
                11+ Years Experience
              </h4>
            </div>
          </div>

          </div>

          {/* FLOAT INFO CARD */}
          <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md border border-white/10 shadow-lg rounded-xl px-5 py-3">
            <p className="text-sm font-semibold text-white">
              Covers Large Area • High Pressure Mist
            </p>
          </div>

        </div>



        {/* ===== LEFT CONTENT ===== */}

        <div>

          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-400 bg-red-500/10 rounded-full border border-red-500/20">
            AIR POLLUTION CONTROL SOLUTION
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-3">
            High Performance Anti Smog Gun 
            for Effective Dust Suppression
          </h1>

          <p className="text-lg text-black mb-5 max-w-xl">
          Founded in 2012, Kapmix Machinery Pvt. Ltd. is a trusted Anti Smog Gun Supplier . We deliver high-quality pollution control machinery designed for durability, precision, and efficiency. 
Kapmix Machinery Pvt. Ltd. – India’s Leading Anti Smog Gun Supplier is a trusted name in the field of dust suppression and pollution control equipment. With a strong commitment to quality, innovation, and environmental responsibility, the company delivers advanced solutions to control air pollution across construction and industrial sites.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-2">
            {industries.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>

                <p className="text-sm sm:text-lg font-medium text-black leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-5">

            <Link
              href="/contact"
              className="px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#c8102e] to-red-600 rounded-full shadow-lg hover:scale-105 transition"
            >
              Request a Quote →
            </Link>

            <Link
              href="/products"
              className="px-6 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              View Products
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;