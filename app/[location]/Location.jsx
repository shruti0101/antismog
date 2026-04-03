"use client";
import { BadgeCheck, ChevronDown, Hospital } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Store,
  Hotel,
  Home,
  Leaf,
  Warehouse,
  Truck,
  Tags,
  Handshake,
} from "lucide-react";

const Location = () => {
  const params = useParams();

  const city = params?.location?.includes("-in-")
    ? params.location
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";

  const data = [
    {
      title: "High-Quality Waste Disposal Bags",
      desc: "Our garbage bags are manufactured using premium-grade plastic materials that offer high strength, durability, and resistance to leakage and tearing.",
      icon: Warehouse,
      img: "/bag/product/10L Biohazard Garbage Bag.webp",
    },
    {
      title: "Multiple Size Options",
      desc: "We provide garbage bags in a variety of sizes, thicknesses, and colors to meet the needs of households, offices, hospitals, hotels, and industrial facilities.",
      icon: Leaf,
      img: "/bag/product/20 x 24 inch Disposable Garbage Bags.webp",
    },
    {
      title: "Manufacturer Direct Supply",
      desc: `As a direct Garbage Bag Manufacturer in ${city}, Sangam Plastic Industries offers competitive pricing and consistent supply for bulk orders and distributors.`,
      icon: Truck,
      img: "/bag/pro1.png",
    },
    {
      title: "Strong & Leak-Proof Design",
      desc: "Our garbage bags are designed to handle wet and dry waste efficiently while preventing spills, leaks, and unpleasant odors.",
      icon: Tags,
      img: "/bag/pro2.png",
    },
    {
      title: "Trusted by Multiple Industries",
      desc: `Our garbage bags are widely used by municipal corporations, hospitals, offices, hotels, restaurants, and waste management companies across ${city}.`,
      icon: Handshake,
      img: "/bag/pro3.png",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="mt-24">
        <section
          style={{
            backgroundImage: "url('/cta-image.webp')",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
          className="py-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
            Anti Smog Gun Supplier in {city}
          </h1>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-4 md:px-0  py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-[42px] font-bold mb-4">
              Anti Smog Gun Supplier in {city}
            </h2>

            <p className="text-black mb-4 text-lg">
              Looking for a reliable Anti Smog Gun Supplier in{" "}
              <strong>{city}?</strong> Kapmix Machinery Pvt. Ltd.is Provide
              advanced dust suppression and pollution control solutions designed
              to combat rising air pollution levels in urban and industrial
              areas. Our high-performance anti smog guns are widely used across
              construction sites, road projects, mining zones, and municipal
              applications.
            </p>

            <p className="text-black mb-4 text-lg">
              <strong>{city}</strong> faces severe air pollution challenges due
              to rapid urbanization, heavy traffic, and construction activities.
              Our anti smog guns are specially engineered to tackle PM2.5 and
              PM10 particles, helping industries and government bodies maintain
              cleaner and safer environments.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <Image
              src={"/cat1.png"}
              alt="loading"
              width={500}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* why us */}
      <section className="mx-auto lg:px-16 px-5 py-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose Us in <span className="text-red-600">{city}</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Trusted supplier with industry expertise",
            "High-quality and durable machines",
            "Customized solutions for projects",
            "Competitive pricing",
            `Quick delivery across ${city === "Delhi" ? "Delhi NCR" : city}`,
            "After-sales support and maintenance",
          ].map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="bg-red-50 p-2 rounded-lg">
                <BadgeCheck className="w-6 h-6 text-red-600" />
              </div>
              <span className="font-semibold text-gray-800">{point}</span>
            </div>
          ))}
        </div>
      </section>

    

      {/* Workstation  */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-[42px] font-bold mb-2">
          Types of Anti Smog Guns We Offer
        </h2>
        <p className="text-center text-black mb-4 text-lg">
          We supply multiple models based on your requirements:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="bg-white  rounded-xl shadow-md hover:shadow-xl transition group">
            <div className="w-full h-40 flex items-center justify-center mb-3 overflow-hidden rounded-lg">
              <img
                src="/nav/category-1-nav.webp"
                alt="loading"
                className="h-40 w-40 object-contain group-hover:scale-105 transition-transform duration-500 rounded-2xl"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-center">Anti Smog Gun</h3>
            <p className="text-black text-sm leading-relaxed">
              Long range anti smog gun machine for large-scale dust suppression
              with up to 100 meter spray.
            </p>
          </div>

        
        </div>
      </section>

      {/* Key features  */}
      {/* <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/bag/try2.webp"
              alt="Key Features"
              className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "50% 70%" }}
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-[42px] font-bold mb-6">
              Key Features of{" "}
              <span className="text-green-600">
                Sangam Plastic Garbage Bags
              </span>
            </h3>

            <ul className="space-y-4 text-black text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>High-quality durable plastic material</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Strong and tear-resistant structure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Leak-proof design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Flexible and easy to handle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Available in multiple sizes and thicknesses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Suitable for wet and dry waste</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                <span>Hygienic and efficient waste disposal solution</span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Industries */}
      {/* <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-[42px] font-bold mb-5">
          Industries & Applications We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 transition">
                <Store className="w-7 h-7 text-blue-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Residential Use
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Daily waste collection for homes, apartments, and housing
              societies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                <Hotel className="w-7 h-7 text-green-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Hotels & Restaurants
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Efficient waste management for food waste and kitchen waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-600 transition">
                <Factory className="w-7 h-7 text-orange-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Offices & Commercial Buildings
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Routine waste collection in offices, malls, and commercial spaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-600 transition">
                <Hospital className="w-7 h-7 text-purple-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Hospitals & Healthcare Facilities
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Safe disposal of medical waste and general healthcare waste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center group">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Home className="w-7 h-7 text-indigo-600 group-hover:text-white transition" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">
              Municipal Waste Management
            </h3>
            <p className="text-black text-sm leading-relaxed">
              Reliable garbage bags for city sanitation and public waste
              collection systems.
            </p>
          </div>
        </div>
      </section> */}

      {/* Case Study Card */}
      {/* <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-[42px] font-bold">
            Case Study: Garbage Bag Supply for Commercial Facility in {city}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Client
                </span>
                <p className="text-lg font-semibold">
                  Commercial Office Complex
                </p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Location
                </span>
                <p className="text-lg font-semibold">{city}</p>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Project
                </span>
                <p className="text-lg font-semibold">
                  Waste Management & Sanitation System
                </p>
              </div>
              <div className="">
                <p className="text-black leading-relaxed">
                  This project highlights{" "}
                  <strong>
                    Sangam Plastic Industries’ reliability as a Garbage Bag
                    Manufacturer in {city}.
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Scope
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Bulk supply of heavy-duty garbage bags</li>
                  <li>Waste segregation support using color-coded bags</li>
                  <li>Reliable daily waste disposal solution</li>
                </ul>
              </div>
              <div>
                <span className="text-sm uppercase tracking-wide text-gray-500">
                  Results
                </span>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>Improved hygiene and cleanliness across the facility</li>
                  <li>Efficient waste collection and disposal system</li>
                  <li>Reduced leakage and waste spillage</li>
                  <li>Better compliance with sanitation standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="w-full bg-green-600 text-white py-5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:text-left text-center">
            <Link href={"/"} className="text-2xl font-semibold">
              Garbage Bag Manufacturer in {city}
            </Link>
            <p className="text-2xl md:text-[42px] font-semibold">
              +91 9810057441
            </p>
            <p className="text-lg text-white">
              For More Details Contact Us Now!
            </p>
          </div>

          <div>
            <a
              href="tel:+919810057441"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Connect Now
            </a>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      {/* <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-[42px] font-bold mb-5">
          Garbage Bags in {city} – FAQs
        </h2>

        <div className="space-y-4">
          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              What are garbage bags used for?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Garbage bags are used for the safe collection, storage, and
              disposal of waste in homes, offices, hospitals, and commercial
              facilities.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you supply garbage bags in bulk?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, Sangam Plastic Industries provides bulk supply for
              distributors, businesses, hospitals, and municipal waste
              management companies.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Are your garbage bags leak-proof?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, our garbage bags are designed with strong and leak-resistant
              materials to prevent spills.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              What sizes of garbage bags do you provide?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We offer garbage bags in multiple sizes, thickness levels, and
              colors depending on customer requirements.
            </p>
          </details>

          <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
            <summary className="flex justify-between items-center font-semibold text-lg">
              Do you supply across Delhi NCR?
              <span className="transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Yes, we supply garbage bags across Delhi, Noida, Gurgaon,
              Faridabad, and other NCR regions.
            </p>
          </details>
        </div>
      </section> */}

      {/* about */}
      {/* <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/bag/bg-other.webp"
              alt="Premium Dates Supplier in Delhi NCR"
              className="w-full h-102 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-[42px] font-bold mb-5">
              Looking for the Best Garbage Bag Manufacturer in {city}?
            </h2>

            <p className="text-black mb-6 leading-relaxed text-lg">
              Contact <strong>Sangam Plastic Industries</strong> today for
              pricing, product details, or bulk supply inquiries. Our team will
              help you choose the right garbage bags for residential,
              commercial, and industrial waste management, ensuring reliable and
              hygienic waste disposal solutions across {city}.
            </p>

            <Link
              href={"/contact"}
              className="mx-auto px-4 py-3 text-lg text-white rounded-md bg-green-500 hover:bg-green-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Location;
