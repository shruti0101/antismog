"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import CitesKeyword from "./Landingpage/CitiesComponent";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout = pathname.startsWith("/studio", "/login", "/enquiry");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {hideLayout && <CitesKeyword />}
      {!hideLayout && <Footer />}
    </>
  );
}
