"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (

  


    <header className="w-full fixed top-0 left-0 z-50 font-semibold">

      {/* ===== TOP BAR (SLIM + CLEAN) ===== */}
      <div
        className={`bg-[#c8102e]/95 backdrop-blur-md text-white transition-all duration-500 overflow-hidden ${
          showTopBar ? "h-[50px]" : "h-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[55px] px-6 text-[13px]">

          {/* LEFT INFO */}
          <div className="flex items-center gap-6 ">
            <span className="flex items-center gap-2 ">
              <Phone size={13}/> +91-88820-57687
            </span>
            <span className="flex items-center gap-2 ">
              <Mail size={13}/> vandsengg@gmail.com
            </span>
            <span className="flex items-center gap-2 ">
              <MapPin size={13}/> New Delhi
            </span>

                <span className="flex items-center gap-2 ">
              <CheckCircle size={13}/> GST No. 09AAHCK4088Q1ZM
            </span>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <div key={i} className="p-2 rounded-full hover:bg-white/20 transition cursor-pointer">
                <Icon size={14}/>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== MAIN NAV (GLASS FLOATING) ===== */}
      <div className="mx-auto w-full  bg-white backdrop-blur-lg border border-white/10 shadow-lg">
        <div className="flex items-center justify-between px-8 h-[80px] text-black">

          {/* LOGO */}
          <Image
            src="/logo.webp"
            alt="Vands"
            width={180}
            height={50}
            priority
          />

          {/* NAV LINKS */}
          <nav className="flex items-center gap-8 text-[18px] uppercase tracking-wide">

            {["HOME", "ABOUT US", "BLOGS", "CONTACT US"].map((item, i) => (
              <button key={i} className="relative group">
                <span className="text-black group-hover:text-yellow-500 transition">
                  {item}
                </span>

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-black group-hover:text-yellow-500 transition">
                OUR PRODUCTS <ChevronDown size={15}/>
              </button>

              <div className="absolute left-0 top-[120%] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-white text-black rounded-lg shadow-xl min-w-[230px] overflow-hidden">
                <ul className="flex flex-col text-[14px]">
                  {[
                    "Airless Spray Machine",
                    "Wall Putty Spray Machine",
                    "Airless Painting Machine",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

         <button className="group relative px-6 py-2.5 rounded-full text-lg font-medium border border-red-500 text-black overflow-hidden transition">

  {/* animated bg fill */}
  <span className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition duration-300"></span>

  <span className="relative z-10 group-hover:text-white transition">
    Request a Quote
  </span>
</button>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918882057687"
              target="_blank"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition text-md"
            >
              <FaWhatsapp size={25}/>
              Chat
            </a>

          </div>
        </div>
      </div>

    </header>
    
  );
}