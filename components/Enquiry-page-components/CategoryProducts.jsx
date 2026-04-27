"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryForm from "@/components/Enquiry";

const CategoryProducts = () => {
  const [enquiry, setEnquiry] = useState(false);

  const categories = [
    {
      src: "/nav/category-1-nav.webp",
      title: "Anti Smog Gun Machine",
    },
    {
      src: "/nav/category-2-nav.webp",
      title: "Roof Mounted Anti Smog Gun",
    },
    {
      src: "/nav/category-3-nav.webp",
      title: "Tractor Operated Anti Smog Gun",
    },
    {
      src: "/nav/category-4-nav.webp",
      title: "Truck Mounted Anti Smog Gun",
    },
  ];

  return (
    <section className="mx-auto lg:px-15 px-1 py-8 bg-gray-100 mt-5 md:px-14">
      <h2 className="text-center text-2xl md:text-[42px] font-bold mb-2 px-3">
        Types of Anti Smog Guns We Offer
      </h2>
      <p className="text-center text-black mb-4 text-lg">
        We supply multiple models based on your requirements:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 flex flex-col items-center"
          >
            <div className="w-full h-[350px] relative">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-center my-2 font-bold text-lg">
              {item.title}
            </h3>

            <button
              onClick={() => setEnquiry(true)}
              className="rounded-lg px-4 py-2 bg-red-600 text-white mx-auto text-xl my-5"
            >
              Enquiry Now
            </button>
          </div>
        ))}
      </div>

      <EnquiryForm isOpen={enquiry} onClose={() => setEnquiry(false)} />
    </section>
  );
};

export default CategoryProducts;