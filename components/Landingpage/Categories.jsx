"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Productcategory = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalData, setModalData] = useState(null);

  // ✅ MOCK DATA (REALISTIC INDUSTRIAL SPECS)
  const categories = [
    {
      name: "Anti Smog Gun",
      products: 10,
      img: "/cat1.png",
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
      img: "/cat4.png",
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
      img: "/cat2.png",
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

  return (
    <>
      {/* ================= SECTION ================= */}
      <section className="bg-white">
        <div className="w-full mx-auto px-6 md:px-30 py-16">
          {/* HEADING */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
                <span className="bg-red-600 bg-clip-text text-transparent">
                  High-Performance Machines
                </span>
              </h2>

              <p className="text-black mt-3 max-w-3xl text-md md:text-xl">
                Advanced industrial solutions designed for performance,
                durability, and efficiency.
              </p>
            </div>

            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
            >
              Explore All Products
            </Link>
          </div>

          {/* ================= SLIDER ================= */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            navigation
            autoplay={{ delay: 2500 }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={cat.link}
                  onClick={() => setActiveIndex(i)}
                  className="group relative rounded-2xl bg-white border border-red-500 shadow-md hover:shadow-xl  flex flex-col items-center text-center overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden rounded-xl">
                    {/* MAIN IMAGE */}
                    <Image
                      src={cat.img}
                      alt={cat.name}
                      fill
                      className={`object-contain transition duration-500 ${
                        activeIndex === i
                          ? "opacity-0 scale-110"
                          : "opacity-100 group-hover:opacity-0 group-hover:scale-110"
                      }`}
                    />

                    {/* HOVER IMAGE */}
                    <Image
                      src={cat.hoverImg}
                      alt={cat.name}
                      fill
                      className={`object-contain transition duration-500 ${
                        activeIndex === i
                          ? "opacity-100 scale-105"
                          : "opacity-0 group-hover:opacity-100 group-hover:scale-105"
                      }`}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setModalData(cat);
                        }}
                        className="bg-red-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="mt-4">
                    <p className="font-semibold text-red-500 text-sm md:text-xl">
                      {cat.name}
                    </p>
                    <p className="text-sm mt-1 text-black font-medium">
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
          onClick={() => setModalData(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4"
        >
          <button className="absolute top-6 right-6 text-white z-50">
            <X size={30} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px] bg-gray-100">
              <Image
                src={modalData.hoverImg || modalData.img}
                alt={modalData.name}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {modalData.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {modalData.products} Products Available
                </p>

                {/* SPECS */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-lg font-semibold text-red-600">
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
              </div>

              {/* CTA */}
              <Link
                href="/contactse"
                className="mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-center font-semibold"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productcategory;
