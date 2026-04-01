"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/Anti-smog-gun-copy.jpg"
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
          <div className="bg-white rounded-xl inline-block  mb-6">
            <Image src="/logoo.png" alt="logo" width={120} height={50} />
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
              "Anti Smog Gun 30 Meter",
              "Anti Smog Gun 50 Meter",
              "Dust Suppression System",
              "Industrial Mist Cannon",
              "Trailer Mounted",
            ].map((item, i) => (
              <li
                key={i}
                className="group flex items-center gap-2 text-white hover:text-white transition"
              >
                <span className="text-red-500 group-hover:translate-x-1 transition">
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== LINKS ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {["Home", "About", "Products", "Blogs", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="group flex cursor-pointer items-center gap-2 text-white hover:text-white transition "
                >
                  <span className="text-red-500 group-hover:translate-x-1 transition">
                    →
                  </span>
                  {item}
                </li>
              ),
            )}
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
              <MapPin size={16} className="mt-1" />
              New Delhi, India
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
            Certified for excellence in customer service, reliability, and
            trusted industrial solutions.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="relative border-t border-white/10" />

      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 py-6 text-white text-sm">
        <p>© 2026 Anti Smog Gun. All Rights Reserved</p>
        <p className="mt-2 md:mt-0">
          Developed by <span className="text-red-500">Promozione Branding</span>
        </p>
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
