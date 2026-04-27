"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";

export default function ClienteleSlider() {
  const clients = [
    "/client-tails/96dd26_f89673d1381148efa518c05a02f8296e~mv2.webp",
    "/client-tails/kalyan-toll-infrastructure-limited-karegaon-nanded-construction-contractors-ypc4hbdpbp.webp",
    "/client-tails/a76f999d268cf61fe3c941292f6826d2.webp",
    "/client-tails/Ashiana-logo.webp",
    "/client-tails/assotech_limited_logo.webp",
    "/client-tails/Gaurs_Green_With_Black_(2)_(3).webp",
    "/client-tails/Jaypee_Group_Logo.svg.webp",
    "/client-tails/WhatsApp Image 2026-04-03 at 12.28.28 PM.webp",
    "/client-tails/Larsen-Toubro.webp",
    "/client-tails/Marathon_Group.webp",
    "/client-tails/Opulent-Asthetics-Favicon.webp",
    "/client-tails/Supertech-New-Logo.webp",
    "/client-tails/ultratech-super-cement.webp"
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
          // spaceBetween={40}
          // slidesPerView={2}
          loop={true}
          speed={4000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
           breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40
            },
          }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-[120px] md:h-[160px] lg:h-[200px] transition">
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
