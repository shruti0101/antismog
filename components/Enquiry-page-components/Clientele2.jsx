"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

// ✅ outside
const clients = [
  "/client-tails/96dd26_f89673d1381148efa518c05a02f8296e~mv2.webp",
  "/client-tails/kalyan-toll-infrastructure-limited-karegaon-nanded-construction-contractors-ypc4hbdpbp.webp",
  "/client-tails/a76f999d268cf61fe3c941292f6826d2.webp",
  "/client-tails/Ashiana-logo.webp",
  "/client-tails/assotech_limited_logo.webp",
  "/client-tails/Jaypee_Group_Logo.svg.webp",
  "/client-tails/Larsen-Toubro.webp",
  "/client-tails/Opulent-Asthetics-Favicon.webp",
  "/client-tails/ultratech-super-cement.webp",
];

export default function ClienteleSlider2() {
  return (
    <section className="bg-gray-100 pb-3  md:py-8">
      <div className="w-full mx-auto   px-4">
        <h2 className="text-center text-[28px] md:text-4xl mb-6 font-semibold text-black">
          Trusted by Leading Clients
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000} // ✅ smoother
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 2.5, spaceBetween: 15 },
            640: { slidesPerView: 3.5, spaceBetween: 20 },
            768: { slidesPerView: 4.5, spaceBetween: 25 },
            1024: { slidesPerView: 5.5, spaceBetween: 30 },
          }}
          className="py-8"
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[110px] md:h-[150px] lg:h-[180px] 
                              bg-white rounded-xl shadow-sm hover:shadow-md 
                              transition duration-300 p-4">
                
                <Image
                  src={logo}
                  alt="client"
                  width={180}
                  height={100}
                  loading="lazy"
            
                  className="object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}