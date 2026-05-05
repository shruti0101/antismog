"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      {/* ✅ Desktop Image */}
      <div className="relative mt-30 md:mt-36 hidden md:block w-full h-[70vh] xl:h-[90vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777962166/banner1_ru6znh.webp" // your desktop image
          alt="Desktop Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ✅ Mobile Image */}
      <div className="relative block md:hidden w-full mt-20 h-[48vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777962149/kapmix_mobile_banner_lbc7kv.webp" // your mobile image
          alt="Mobile Banner"
          width={600}
          height={1200}
          priority
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;