import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";

import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";

// import Popup from "@/components/Popup";
// import CityPage from "../components/City";

import Otherproduct from "@/components/Landingpage/Otherpro";

import Loactions from "@/components/Locations";
import ClienteleSlider from "@/components/Landingpage/Clientele";

export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero />
      <ClienteleSlider></ClienteleSlider>
      <About />
      <Process></Process>
      <Categories />
      <Cta></Cta>

      <Whychoose />

      <Countup />

      <Otherproduct></Otherproduct>

      {/* <Loactions />  */}

      {/* <CityPage /> */}

      <TestimonialSlider></TestimonialSlider>
      <Faq></Faq>
    </>
  );
}
