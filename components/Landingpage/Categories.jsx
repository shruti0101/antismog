"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// ✅ FIXED PATHS (removed \)
const categories = [
  {
    name: "Anti Smog Gun",
    products: 10,
    img: "/cat11.webp",
    hoverImg: "/cat1_1.webp",
    link: "/categories/anti-smog-gun",
    specs: [
      "Tank Capacity: 2000 Litres",
      "Spray Range: 40–50 meters",
      "Pump Type: High Pressure Triplex Pump",
      "Mounting: Tractor PTO",
      "Application: Dust Suppression",
    ],
  },
  {
    name: "Roof Mounted Anti Smog Gun",
    products: 5,
    img: "/cat44.webp",
    hoverImg: "/cat4_4.avif",
    link: "/categories/roof-mounted-anti-smog-gun",
    specs: [
      "Installation: Rooftop",
      "Spray Range: 50 meters",
      "Wind Resistance: High Stability",
      "Auto Oscillation",
      "Application: Factories",
    ],
  },
  {
    name: "Truck Mounted Anti Smog Gun",
    products: 4,
    img: "/cat22.webp",
    hoverImg: "/cat2_2.avif",
    link: "/categories/truck-mounted-anti-smog-gun",
    specs: [
      "Tank Capacity: 5000 Litres",
      "Spray Range: 60 meters",
      "Control: Remote Operated",
      "Rotation: 340° Auto Rotation",
      "Application: Urban Dust Control",
    ],
  },
  {
    name: "Tractor Operated Anti Smog Gun",
    products: 5,
    img: "/category-image.webp",
    hoverImg: "/nav/category-3-nav.webp",
    link: "/categories/tractor-operated-anti-smog-gun",
    specs: [
      "Compact Design",
      "Spray Range: 20–30 meters",
      "Power: Electric Motor",
      "Mobility: Wheel Mounted",
      "Application: Small Sites",
    ],
  },
];

export default function Productcategory() {
  const [modalData, setModalData] = useState(null);

  // ✅ prevent re-render
  const openModal = useCallback((cat, e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalData(cat);
  }, []);

  const closeModal = useCallback(() => setModalData(null), []);

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                High-Performance Machines
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Advanced industrial solutions designed for performance,
                durability, and efficiency.
              </p>
            </div>

            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
            >
              Explore All Products
            </Link>
          </div>

          {/* ================= SLIDER ================= */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={cat.link}
                  className="group block rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-[320px] overflow-hidden">
                    
                    {/* MAIN IMAGE */}
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      quality={70}
                      className="object-contain transition duration-500 group-hover:opacity-0 group-hover:scale-110"
                    />

                    {/* HOVER IMAGE */}
                    <Image
                      src={cat.hoverImg}
                      alt={cat.name}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      quality={70}
                      className="object-contain opacity-0 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        onClick={(e) => openModal(cat, e)}
                        className="bg-red-600 p-3 rounded-full shadow-lg hover:scale-110 transition"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="p-4 text-center">
                    <p className="font-semibold text-red-600 text-lg">
                      {cat.name}
                    </p>
                    <p className="text-sm text-black mt-1">
                      {cat.products} Products
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalData && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] bg-gray-100">
              <Image
                src={modalData.hoverImg || modalData.img}
                alt={modalData.name}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain p-6"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-6 md:p-10">
              <h3 className="text-2xl font-bold text-gray-800">
                {modalData.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {modalData.products} Products Available
              </p>

              {/* SPECS */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-red-600 mb-3">
                  Specifications
                </h4>

                <ul className="space-y-2">
                  {modalData.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-gray-700 flex gap-2">
                      <span className="w-2 h-2 mt-2 bg-red-500 rounded-full"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/contactse"
                className="mt-6 inline-block w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-center font-semibold"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}