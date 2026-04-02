"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export default function WhyChooseKapmix() {
  const points = [
    {
      title: "1. Proven Industry Experience",
      desc: `Kapmix Machinery has been a trusted name in construction and pollution control equipment since its establishment in 2012, delivering reliable machinery across India. 
With years of expertise, the company understands the real challenges of dust suppression in construction, mining, and industrial environments.`,
    },
    {
      title: "2. Wide Range of Anti Smog Solutions",
      desc: `Kapmix offers a complete portfolio of dust suppression systems, including:
• Anti Smog Guns 
• Truck Mounted Smog Guns 
• Anti Pollution Guns 
• Anti Smog Towers & Air Filter Cubes 
• Air Quality Monitoring Systems 
This ensures you get all solutions under one roof.`,
    },
    {
      title: "3. High Performance & Effective Dust Control",
      desc: `Kapmix Anti Smog Guns are designed with:
• Long throw range (30m to 50m+) 
• Powerful motors & high-pressure pumps 
• Fine mist technology for capturing dust particles 
These systems effectively reduce airborne pollution and improve air quality on-site.`,
    },
    {
      title: "4. Durable & Heavy-Duty Construction",
      desc: `Manufactured using mild steel and robust components, Kapmix machines are built for:
• Tough construction sites 
• Mining & industrial operations 
• Long operational life with minimal maintenance`,
    },
    {
      title: "5. Multiple Mounting Options for Flexibility",
      desc: `Kapmix provides versatile configurations such as:
• Trolley mounted 
• Truck mounted 
• Fixed tower systems 
This allows easy deployment based on project requirements.`,
    },
    {
      title: "6. Made in India with Quality Assurance",
      desc: `All machines are manufactured in India, ensuring:
• Better pricing 
• Faster delivery 
• Easy availability of spare parts 
• Compliance with local standards`,
    },
    {
      title: "7. Customization & Bulk Supply Capability",
      desc: `Kapmix supports:
• Custom-built solutions 
• Bulk orders for large projects 
• PAN India supply and delivery 
This makes them ideal for contractors, government projects, and industrial buyers.`,
    },
    {
      title: "8. Strong Production & Supply Capacity",
      desc: `With consistent production capability and ready stock availability, Kapmix ensures:
• Quick delivery timelines 
• Reliable supply for urgent requirements`,
    },
    {
      title: "9. Competitive Pricing",
      desc: `Kapmix offers cost-effective Anti Smog Guns without compromising quality, making them suitable for both small and large-scale projects.`,
    },
    {
      title: "10. Trusted by Construction & Industrial Sector",
      desc: `Kapmix products are widely used in:
• Construction sites 
• Road projects 
• Mining operations 
• Industrial plants 
Their machines help maintain environmental compliance and worker safety.`,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      {/* HEADING */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
          Why Choose <span className="text-red-600">Kapmix Machinery</span> as
          Your Anti Smog Gun Manufacturer?
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-h-[700px] overflow-y-auto pr-2">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-red-100 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {item.title}
              </h3>

              <p className="text-black text-md leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="sticky top-5 lg:top-24">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            loop
            className="rounded-xl overflow-hidden shadow-lg"
          >
            {[
              "/cat1_1.webp",
              "/cat2_2.avif",
              "/cta.webp",
              "/cat4_4.avif",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-[300px] md:h-[500px]">
                  <Image
                    src={img}
                    alt="machine"
                    fill
                    className="object-contain bg-white md:p-6"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
