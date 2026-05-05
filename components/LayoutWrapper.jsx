"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import SplashCursor from "./SplashCursor";
// import CitesKeyword from "./Landingpage/CitiesComponent";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout = pathname.startsWith("/studio", "/login", "/inquiry");
  const hideCursor = ["/studio", "/login", "/inquiry"];
  const hidecursor = hideCursor.some((route) => pathname.startsWith(route));
  
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {/* {!hideLayout && <CitesKeyword />} */}
      {!hidecursor && <SplashCursor />}
      {!hideLayout && <Footer />}
    </>
  );
}
