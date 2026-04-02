"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

export default function ClienteleSlider() {
  const clients = [
    "/client-tails/96dd26_f89673d1381148efa518c05a02f8296e~mv2.png",
    "/client-tails/a76f999d268cf61fe3c941292f6826d2.jpg",
    "/client-tails/Ashiana-logo.jpg",
    "/client-tails/assotech_limited_logo.jpg",
    "/client-tails/Gaurs_Green_With_Black_(2)_(3).png",
    "/client-tails/Jaypee_Group_Logo.svg.png",
    "/client-tails/K_Raheja_Corp.svg.png",
    "/client-tails/kalyan-toll-infrastructure-limited-karegaon-nanded-construction-contractors-ypc4hbdpbp.avif",
    "/client-tails/Larsen-Toubro.jpg",
    "/client-tails/Marathon_Group.webp",
    "/client-tails/Opulent-Asthetics-Favicon.png",
    "/client-tails/Supertech-New-Logo.webp",
    "/client-tails/ultratech-super-cement.jpg"
  ];

  return (
    <section className="bg-white md:my-10">
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
              <div className="flex items-center justify-center h-[90px] transition">
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
