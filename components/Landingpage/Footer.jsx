"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/bg-product.webp"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* RED GLOW */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-red-600/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600/10 blur-[120px]" />

      {/* ================= MAIN ================= */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* ===== ABOUT ===== */}
        <div>
          <div className="bg-white rounded-xl h-50 w-50 mb-5 md:w-60 md:h-auto lg:w-50 lg:h-auto">
            <Image src="/logoo.png" alt="logo" width={1000} height={1000} />
          </div>

          <h3 className="text-lg font-semibold mb-4">About Company</h3>

          <p className="text-white text-sm leading-relaxed">
            High-performance Anti Smog Gun manufacturer delivering efficient
            dust suppression solutions for industrial and construction
            environments.
          </p>
        </div>

        {/* ===== PRODUCTS ===== */}
        <div>
          <h3 className="text-lg font-semibold cursor-pointer mb-5">
            Product Range
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              {
                name: "Anti Smog Gun 30 Meter",
                link: "/products/anti-smog-gun-30-100",
              },
              {
                name: "Terrace Anti Smog Gun",
                link: "/products/terrace-anti-smog-gun",
              },
              {
                name: "Tractor Operated Anti Smog Gun",
                link: "/products/tractor-operated-anti-smog-gun",
              },
              {
                name: "Truck Mounted Anti Smog Gun",
                link: "/products/truck-mounted-anti-smog-gun",
              },
            ].map((item, i) => (
              <Link
                href={item?.link}
                key={i}
                className="group flex items-center gap-2 text-white hover:text-white transition"
              >
                <span className="text-red-500 group-hover:translate-x-1 transition">
                  →
                </span>
                {item?.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* ===== LINKS ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Products", link: "/products" },
              { name: "Blogs", link: "/" },
              { name: "Contact", link: "/contact" },
              { name: "Sitemap", link: "/sitemap" },
              { name: "Enquiry", link: "/enquiry" },
            ].map((item, i) => (
              <Link
                href={item?.link}
                key={i}
                className="group flex cursor-pointer items-center gap-2 text-white hover:text-white transition "
              >
                <span className="text-red-500 group-hover:translate-x-1 transition">
                  →
                </span>
                {item?.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

          <div className="space-y-4 text-sm text-white">
            <a href="tel:+919999926558" className="flex items-center gap-3">
              <Phone size={16} />
              +91-9999926558
            </a>

            <a
              href="mailto:kapmixmachinery@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail size={16} />
              kapmixmachinery@gmail.com
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 h-20 w-20" />
              Kapmix Machinery Private Limited Khasra Number: 1132, opp.
              DPS, Saraswati Vihar, Harbans Nagar, Ghukna, Ghaziabad, Uttar Pradesh 201003 <br />
            </div>
          </div>
        </div>

        {/* ===== 🔥 TRUST CERTIFICATE ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-red-500">
            Trust Certificate
          </h3>

          {/* IMAGE */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer group"
          >
            <Image
              src="/TRUST-ELITE.webp"
              alt="Trust Elite"
              width={110}
              height={110}
              className="rounded-lg border border-white/10 group-hover:scale-105 transition"
            />
          </div>

          <p className="text-white text-sm mt-4 leading-relaxed">
            We are proud to present the TrustElite Certificate of Excellence to
            Kapmix Machinery. recognizing their commitment to exceptional
            customer service, outstanding business practices, and a dedication
            to building trust with their customers.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="relative border-t border-white/10" />

      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 py-6 text-white text-sm">
        <p>© 2026 Kapmix Machinery. All Rights Reserved</p>
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-black/60 border border-white/10 rounded-xl p-4"
          >
            {/* CLOSE */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white"
            >
              <X size={24} />
            </button>

            {/* IMAGE */}
            <Image
              src="/trust Elite certificate (20).png"
              alt="Certificate"
              width={800}
              height={500}
              className="rounded-lg max-w-[90vw] max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </footer>
  );
}
