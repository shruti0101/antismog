"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/Data";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CheckCircle,
  Menu,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "../Enquiry";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phoneNavbar, setPhoneNavbar] = useState(false);

  const [enquiry, setEnquiry] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".products-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 z-50 font-semibold">
      {/* ===== TOP BAR (SLIM + CLEAN) ===== */}
      <div
        className={`bg-[#c8102e]/95 backdrop-blur-md text-white transition-all duration-500 hidden lg:flex lg:items-center  overflow-hidden ${
          showTopBar ? "h-[50px]" : "h-0"
        }`}
      >
  <div className="w-full max-w-[1400px] mx-auto flex items-center h-[55px] px-6 text-[16px]">

  {/* LEFT INFO */}
  <div className="flex flex-1 items-center gap-6">

    <span className="flex items-center gap-2">
      <Phone size={13} /> +91 9999926558
    </span>

    <a href="mailto:kapmixmachinery@gmail.com" className="flex items-center gap-2">
      <Mail size={13} /> kapmixmachinery@gmail.com
    </a>

    <span className="flex items-center gap-2">
      <MapPin size={13} /> New Delhi
    </span>

    <span className="flex items-center gap-2">
      <CheckCircle size={13} /> GST No. 09AAHCK4088Q1ZM
    </span>

  </div>

  {/* SOCIAL */}
  <div className="flex items-center gap-2 ml-auto">
    {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
      <div
        key={i}
        className="p-2 rounded-full hover:bg-white/20 transition cursor-pointer"
      >
        <Icon size={16} />
      </div>
    ))}
  </div>

</div>
      </div>

      {/* ===== MAIN NAV (GLASS FLOATING) ===== */}
      <div className="mx-auto w-full  bg-white backdrop-blur-lg border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-8 h-[85px] text-black">
          <Link href="/">
            {/* LOGO */}
            <Image
              src="/logo.png"
              alt="Vands"
              width={120}
              height={70}
              priority
              className="object-cover mt-2"
            />
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setPhoneNavbar((prev) => !prev)}
          >
            <Menu />
          </button>

          {/* phone navbar  */}

          {phoneNavbar && (
            <div className="absolute top-[85px] left-0 w-full bg-white flex flex-col p-6 gap-4 shadow-xl border-t lg:hidden">
              <Link
                href="/"
                onClick={() => setPhoneNavbar(false)}
                className="hover:text-red-600 transition"
              >
                HOME
              </Link>
              <Link
                href="/about"
                onClick={() => setPhoneNavbar(false)}
                className="hover:text-red-600 transition"
              >
                ABOUT US
              </Link>
              <Link
                href="/products"
                onClick={() => setPhoneNavbar(false)}
                className="hover:text-red-600 transition"
              >
                OUR PRODUCTS
              </Link>
              <Link
                href="/blogs"
                onClick={() => setPhoneNavbar(false)}
                className="hover:text-red-600 transition"
              >
                BLOGS
              </Link>
              <Link
                href="/contact"
                onClick={() => setPhoneNavbar(false)}
                className="hover:text-red-600 transition"
              >
                CONTACT US
              </Link>

              <div className="flex flex-col gap-3 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setPhoneNavbar(false)}
                  className="w-full py-3 text-center border border-red-500 text-black rounded-lg hover:bg-red-500 hover:text-white transition font-bold"
                >
                  Request a Quote
                </Link>
                <a
                  href="https://wa.me/918882057687"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-bold"
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* NAV LINKS */}
          <nav className="lg:flex items-center gap-8 text-[18px] uppercase tracking-wide hidden">
            {/* HOME */}
            <Link href="/" className="relative group">
              <span className="text-black group-hover:text-yellow-500 transition">
                HOME
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* ABOUT */}
            <Link href="/about" className="relative group">
              <span className="text-black group-hover:text-yellow-500 transition">
                ABOUT US
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/*PRODUCTS  */}

            {/* 🔥 PRODUCTS */}
            <div className="relative products-menu">
              {/* BUTTON */}
              <Link
                href="/products"
                onMouseEnter={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-1 text-black hover:text-yellow-500 transition"
              >
                OUR PRODUCTS
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* ===== MEGA MENU ===== */}
              <div
                onMouseLeave={() => setIsMenuOpen(false)}
                className={`absolute left-1/2 -translate-x-1/2 top-[120%] w-[900px] bg-white shadow-2xl rounded-xl transition-all duration-300 z-50 ${
                  isMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-4"
                }`}
              >
                <div className="grid grid-cols-4 gap-6 p-6">
                  {categories.map((cat, i) => (
                    <Link
                      href={`/categories/${cat.id}`}
                      key={i}
                      className="group/item"
                      onClick={() => setIsMenuOpen(false)} // ✅ CLOSE ON CLICK
                    >
                      {/* IMAGE */}
                      <div className="relative w-full h-[210px] bg-gray-50 rounded-lg overflow-hidden mb-3">
                        <Image
                          src={
                            cat.products?.[0]?.image?.[0]?.src ||
                            "/placeholder.png"
                          }
                          alt={cat.name}
                          fill
                          className="object-cover group-hover/item:scale-105 transition"
                        />
                      </div>

                      {/* NAME */}
                      <p className="block font-semibold text-center text-black hover:text-red-600 mb-2">
                        {cat.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* BLOGS */}
            <Link href="/blogs" className="relative group">
              <span className="text-black group-hover:text-yellow-500 transition">
                BLOGS
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* CONTACT */}
            <Link href="/contact" className="relative group">
              <span className="text-black group-hover:text-yellow-500 transition">
                CONTACT US
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          {/* RIGHT SIDE */}
          <div className=" items-center gap-5 hidden lg:flex">
            <button className="group relative px-6 py-2.5 rounded-full text-lg font-medium border border-red-500 text-black overflow-hidden transition">
              {/* animated bg fill */}
              <span className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition duration-300"></span>

              <span
                className="relative z-10 group-hover:text-white transition"
                onClick={() => setEnquiry(true)}
              >
                Request a Quote
              </span>
            </button>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919999926558"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition text-md"
            >
              <FaWhatsapp size={25} />
              Chat
            </a>
          </div>
        </div>
      </div>

      {/* ENQUIRY MODAL */}
      <EnquiryForm isOpen={enquiry} onClose={() => setEnquiry(false)} />
    </header>
  );
}
