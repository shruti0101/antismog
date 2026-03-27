"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

export default function ClienteleSlider() {
  const clients = [
    "/brand1.png",
    "/brand2.png",
    "/brand3.jpeg",
    "/brand4.jpeg",
    "/brand9.jpeg",
    "/brand6.jpeg",
     "/brand7.jpeg",
      "/brand8.jpeg",
  ];

  return (
    <section className="py-10 bg-white">

      <div className="w-full mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-black mb-10">
          Trusted by Leading Clients
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          speed={4000} 
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false} 
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[90px]  transition">

                <Image
                  src={logo}
                  alt="client"
                  width={300}
                  height={260}
                  className="object-cover"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}