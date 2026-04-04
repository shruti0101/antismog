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
  Building2,
  Construction,
  Mountain,
  Droplets,
  RotateCcw,
  Maximize,
  Shield,
  Tags,
  Handshake,
  Phone,
  Mail,
} from "lucide-react";
import EnquiryForm from "@/components/Enquiry";

const Location = () => {
  const params = useParams();

  const city = params?.location?.includes("-in-")
    ? params.location
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";

  const [enquiry, setEnquiry] = useState(false);

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

      {/* Types of Anti Smog Guns We Offer  */}
      <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
        <h2 className="text-center text-2xl md:text-[42px] font-bold mb-2">
          Types of Anti Smog Guns We Offer
        </h2>
        <p className="text-center text-black mb-4 text-lg">
          We supply multiple models based on your requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-6">
          <div className="border rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 flex flex-col items-center">
            <div className="">
              <img src="/nav/category-1-nav.webp" alt="loading" className="" />
            </div>
            <h3 className="text-center my-2 font-bold text-lg">
              Anti Smog Gun
            </h3>
            <button
              onClick={() => setEnquiry(true)}
              className="rounded-lg px-4 py-2 bg-red-600 text-white mx-auto text-xl my-5"
            >
              Enquiry Now
            </button>
          </div>

          <div className="border rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 flex flex-col items-center">
            <div className="">
              <img src="/nav/category-2-nav.webp" alt="loading" className="" />
            </div>
            <h3 className="text-center my-2 font-bold text-lg">
              Roof Mounted Anti Smog Gun
            </h3>
            <button
              onClick={() => setEnquiry(true)}
              className="rounded-lg px-4 py-2 bg-red-600 text-white mx-auto text-xl my-5"
            >
              Enquiry Now
            </button>
          </div>

          <div className="border rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 flex flex-col items-center">
            <div className="">
              <img src="/nav/category-3-nav.webp" alt="loading" className="" />
            </div>
            <h3 className="text-center my-2 font-bold text-lg">
              Tractor Operated Anti Smog Gun
            </h3>
            <button
              onClick={() => setEnquiry(true)}
              className="rounded-lg px-4 py-2 bg-red-600 text-white mx-auto text-xl my-5"
            >
              Enquiry Now
            </button>
          </div>

          <div className="border rounded-xl overflow-hidden shadow hover:shadow-2xl duration-300 flex flex-col items-center">
            <div className="">
              <img src="/nav/category-4-nav.webp" alt="loading" className="" />
            </div>
            <h3 className="text-center my-2 font-bold text-lg">
              Truck Mounted Anti Smog Gun
            </h3>
            <button
              onClick={() => setEnquiry(true)}
              className="rounded-lg px-4 py-2 bg-red-600 text-white mx-auto text-xl my-5"
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl  mx-auto px-4 md:px-10  py-8">
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

      {/* third section  */}
      <section className="max-w-7xl mx-auto px-4 md:px-10  py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              src={"/cta-image.webp"}
              alt="loading"
              width={500}
              height={200}
              className="object-contain rounded-lg"
            />
          </motion.div>

          <div>
            <h2 className="text-2xl md:text-[42px] font-bold mb-4">
              What is an Anti Smog Gun?
            </h2>

            <p className="text-black mb-4 text-lg">
              An anti smog gun is a modern dust suppression system that sprays
              ultra-fine water droplets into the air. These droplets capture
              airborne dust and pollutants, forcing them to settle on the ground
              and significantly improving air quality.
            </p>

            <p className="text-black mb-4 text-lg">
              This system works like artificial rain and is highly effective in
              reducing dust pollution in large open areas.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="mx-auto lg:px-16 px-5 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Anti Smog Gun <span className="text-red-600">Features</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These features ensure efficient dust suppression across large
              areas with minimal operational cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High-Pressure Misting",
                desc: "Misting system producing ultra-fine droplets (10 micron) for maximum dust capture efficiency.",
                icon: Droplets,
              },
              {
                title: "Extended Spray Range",
                desc: "High-performance projection range spanning from 30 meters to over 100 meters.",
                icon: Maximize,
              },
              {
                title: "360° Dynamic Rotation",
                desc: "Full 360-degree rotation with adjustable vertical angles for total area coverage.",
                icon: RotateCcw,
              },
              {
                title: "Eco-Smart Engineering",
                desc: "Energy-efficient and water-saving design optimized for low-cost sustainable operations.",
                icon: Leaf,
              },
              {
                title: "Industrial Durability",
                desc: "Robust, heavy-duty construction built to perform reliably in the harshest environments.",
                icon: Shield,
              },
              {
                title: "Versatile Deployment",
                desc: "Flexible mobility options including tractor, truck, trolley, or fixed tower installations.",
                icon: Truck,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-red-500 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="mx-auto lg:px-16 px-5 py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Applications in <span className="text-red-600">{city}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our anti smog guns are widely used across various sectors to
              ensure environmental compliance and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Construction & Infrastructure",
                desc: "Essential for dust control in large-scale building and infrastructure projects.",
                icon: Building2,
              },
              {
                title: "Road & Highway Maintenance",
                desc: "Reducing airborne dust during road construction and regular maintenance cycles.",
                icon: Truck,
              },
              {
                title: "Demolition Activities",
                desc: "Suppressing heavy dust clouds generated during building and structure demolition.",
                icon: Construction,
              },
              {
                title: "Mining & Quarry Operations",
                desc: "Effective pollution control in harsh mining environments and stone crushing units.",
                icon: Mountain,
              },
              {
                title: "Industrial & Cement Plants",
                desc: "Managing industrial emissions and maintaining air quality in factory premises.",
                icon: Factory,
              },
              {
                title: "Municipal & Smart Cities",
                desc: "Supporting government initiatives for cleaner urban air and city-wide pollution management.",
                icon: BadgeCheck,
              },
            ].map((app, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <app.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-lg md:text-2xl font-semibold relative z-10">
              With increasing environmental regulations in{" "}
              {city === "Delhi" ? "Delhi NCR" : city}, anti smog guns have
              become essential for compliance and sustainability.
            </p>
          </div>
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

      {/* CTA Final Contact Section */}
      <section className="mx-auto lg:px-16 px-5 py-20 bg-gray-50 ">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Decorations */}

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-600 text-white mb-8 shadow-lg shadow-red-600/30">
                <Phone size={36} className="animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Get Best Price for Anti Smog Gun in{" "}
                <span className="text-red-500">{city}</span>
              </h2>

              <p className="text-black text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Looking to control dust and pollution effectively? Contact us
                today for the best price on anti smog guns in {city}. Our
                experts will guide you in selecting the right model for your
                project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919999926558"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-red-900/20"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  <Mail size={20} />
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm isOpen={enquiry} onClose={() => setEnquiry(false)} />
    </>
  );
};

export default Location;
