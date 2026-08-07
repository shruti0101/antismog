"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

// ✅ Clean paths (removed escape \)
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
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Trusted by Leading Clients
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000} // smoother continuous flow
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // UX improvement
          }}
          allowTouchMove={false} // makes it feel like marquee
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 12 },
            640: { slidesPerView: 3.2, spaceBetween: 16 },
            768: { slidesPerView: 4.2, spaceBetween: 20 },
            1024: { slidesPerView: 5.2, spaceBetween: 24 },
          }}
          className="py-6"
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[100px] md:h-[130px] lg:h-[150px] 
                              bg-white rounded-xl shadow-sm hover:shadow-md 
                              transition duration-300 p-4">
                
                <Image
                  src={logo}
                  alt={`client-${index}`}
                  width={160}
                  height={80}
                  sizes="(max-width: 768px) 120px, 160px"
                  loading="lazy"
                  quality={70} // optimized
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}