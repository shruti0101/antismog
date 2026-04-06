"use client";

import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Enquiry from "@/components/Enquiry";
import { Shield, Droplet, Dumbbell, Recycle } from "lucide-react";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(
    product?.image?.[0]
      ? {
          ...product.image[0],
          isVideo: false,
        }
      : null,
  );
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  const category = categories.find((cat) =>
    cat.products.some((p) => p.id === productId),
  );
  const relatedProducts =
    category?.products.filter((p) => p.id !== productId).slice(0, 4) || [];

  const features = [
    {
      icon: <Shield size={38} />,
      title: "HEAVY DUTY BUILD",
      desc: "Robust mild steel construction designed to withstand harsh construction and industrial environments.",
    },
    {
      icon: <Droplet size={38} />,
      title: "HIGH PRESSURE MIST",
      desc: "Advanced nozzle system creates ultra-fine mist to effectively capture dust particles in the air.",
    },
    {
      icon: <Dumbbell size={38} />,
      title: "LONG SPRAY RANGE",
      desc: "Powerful motor and fan ensure spray distance up to 30–50 meters for wide area coverage.",
    },
    {
      icon: <Recycle size={38} />,
      title: "ECO FRIENDLY SOLUTION",
      desc: "Reduces PM2.5 and PM10 levels, improving air quality and ensuring environmental compliance.",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        style={{ backgroundImage: "url(/bg-product.webp)" }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[90vh] relative mt-10 "
      >
        <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-emerald-700 bg-white p-3 text-2xl md:text-6xl font-bold z-10">
            {product.name}
          </h2>
        </div>
      </section>

      {/* ================= PRODUCT ================= */}
      <section className="px-6 md:px-16 lg:py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ================= IMAGE ================= */}
          <div className="lg:sticky top-24">
            <div className="bg-white rounded-3xl p-2 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border mt-4">
              <div
                className="relative w-full h-[300px] md:h-[550px] lg:h-[500px] rounded-2xl overflow-hidden bg-gray-50"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                {activeImage?.isVideo ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={activeImage.src}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  activeImage && (
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt || "product"}
                      fill
                      className="object-contain transition duration-300"
                      style={{
                        transformOrigin: origin,
                        transform: isZoomed ? "scale(1.3)" : "scale(1)",
                      }}
                    />
                  )
                )}
              </div>

              {/* 🔥 THUMBNAILS */}
              <div className="flex gap-3 mt-5 flex-wrap">
                {product.image?.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border transition ${
                      activeImage?.src === img.src
                        ? "border-red-500 scale-105 shadow-md"
                        : "border-gray-200 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}

                {product.videoUrl && (
                  <button
                    onClick={() => {
                      let videoSrc = product.videoUrl;

                      // convert to embed format
                      if (videoSrc.includes("youtu.be/")) {
                        videoSrc = `https://www.youtube.com/embed/${
                          videoSrc.split("youtu.be/")[1].split("?")[0]
                        }`;
                      } else if (videoSrc.includes("watch?v=")) {
                        videoSrc = videoSrc
                          .replace("watch?v=", "embed/")
                          .split("&")[0];
                      }

                      setActiveImage({
                        src: videoSrc,
                        alt: `${product.name} Video`,
                        isVideo: true,
                      });
                    }}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border ${
                      activeImage?.isVideo
                        ? "border-red-500 scale-105"
                        : "border-gray-200"
                    }`}
                  >
                    {/* YouTube Thumbnail */}
                    <Image
                      src={`https://img.youtube.com/vi/${
                        product.videoUrl.includes("youtu.be/")
                          ? product.videoUrl.split("youtu.be/")[1].split("?")[0]
                          : product.videoUrl.split("v=")[1]?.split("&")[0] || ""
                      }/hqdefault.jpg`}
                      alt="video thumbnail"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />

                    {/* Play Icon */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl">
                      ▶
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
              {product.name}
            </h2>

            {product.metaDescription && (
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {product.metaDescription}
              </p>
            )}

            {/* ================= SPECS ================= */}
            <div className="bg-white border rounded-3xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-red-600 mb-5">
                Technical Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs?.map((spec, i) => (
                  <div
                    key={i}
                    className="bg-red-50 p-4 rounded-xl border hover:shadow-sm transition"
                  >
                    <p className="text-sm text-gray-500">{spec.label}</p>
                    <p className="font-semibold text-gray-900 mt-1">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="flex-1 py-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow-lg hover:-translate-y-1"
              >
                Request Quote
              </button>
              <a
                href={`https://wa.me/919999926558?text=Hello I am interested in ${product.name}`}
                target="_blank"
                className="flex-1 py-4 text-center rounded-xl border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition font-semibold"
              >
                WhatsApp
              </a>

              <a
                href="/Anti Smog Gun .pdf"
                download
                className="flex-1 py-4 text-center rounded-xl border border-gray-300 hover:bg-black hover:text-white transition font-semibold"
              >
                Brochure
              </a>
            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <div className="max-w-7xl mx-auto mt-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-gray-900">
            Product Overview
          </h2>

          <div className="space-y-6 text-gray-700">
            {Array.isArray(product.description) ? (
              product.description.map((block, i) => {
                if (block.type === "h3")
                  return (
                    <h3
                      key={i}
                      className="text-2xl font-semibold text-red-600"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );

                if (block.type === "p")
                  return (
                    <p
                      key={i}
                      className="text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    ></p>
                  );

                if (block.type === "ul")
                  return (
                    <ul key={i} className="space-y-3">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-lg leading-relaxed"
                        >
                          <span className="w-2 h-2 mt-2 bg-red-600 rounded-full"></span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                  );
              })
            ) : (
              <p className="text-lg">{product.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 gap-5">
            <div className="space-y-6 text-gray-70 px-4 py-5 border rounded-lg shadow hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-semibold text-red-600">
                Key Features
              </h3>

              <ul className="font-semibold">
                {product?.features.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-gray-700  px-4 py-5 border rounded-lg shadow hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-semibold text-red-600">
                Applications
              </h3>

              <ul className="font-semibold">
                {product?.applications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-gray-700  px-4 py-5 border rounded-lg shadow hover:shadow-2xl duration-200">
              <h3 className="text-2xl font-semibold text-red-600">
                Why Choose Us
              </h3>

              <ul className="font-semibold">
                {product?.whyChoose.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 lg:w-1/2 mb-5">
            <h3 className="text-2xl font-semibold text-red-600 mb-6">
              Detailed Technical Specifications
            </h3>
            <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-separate border-spacing-0">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-900 border-b border-r">
                      Parameter
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-900 border-b">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs?.map((spec, i) => (
                    <tr key={i} className="group">
                      <td className="px-6 py-4 text-sm font-medium text-gray-600 border-b group-last:border-b-0 border-r bg-gray-50/30 w-1/2 md:w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-b group-last:border-b-0">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ENQUIRY */}
        {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}
      </section>

      <section className="relative w-full overflow-hidden bg-[#712a09] py-5 md:py-18 px-6">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,200,0,0.08)_1px,transparent_1px)] [background-size:30px_30px] opacity-20"></div>

        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,0,0.08),transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-16 text-center">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon Circle */}
              <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-yellow-500/40 text-yellow-400 bg-yellow-500/5 shadow-[0_0_25px_rgba(255,200,0,0.1)]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg md:text-xl tracking-[2px] font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className=" mt-1 md:mt-4 text-sm md:text-md text-white max-w-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}

      <div className="w-full mx-auto px-6 md:px-22 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <a
              key={item.id}
              href={`/products/${item.id}`}
              className="group block bg-white border rounded-2xl shadow hover:shadow-xl transition p-4 text-center"
            >
              <div className="w-full h-40 md:h-60 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image?.[0]?.src}
                  alt={item.name}
                  width={260}
                  height={150}
                  className="object-contain max-h-full group-hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
