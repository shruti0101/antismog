"use client";

import CategoryProducts from "@/components/Enquiry-page-components/CategoryProducts";
import Counter from "@/components/Enquiry-page-components/Counter";
import HeroSection from "@/components/Enquiry-page-components/HeroSection";
import KeyFeature from "@/components/Enquiry-page-components/KeyFeature";
import WhyChooseUs from "@/components/Enquiry-page-components/WhyChooseUs";
import ClienteleSlider from "@/components/Landingpage/Clientele";
import HighQualityCTA from "@/components/Landingpage/Countup";
import Hero from "@/components/Landingpage/Hero";
import TestimonialSlider from "@/components/Landingpage/Testimonials";

const Enquiry = () => {
  return (
    <div className="mt-22 md:mt-0">
      <Hero />
      <ClienteleSlider />
      <CategoryProducts />
      <HighQualityCTA />
      <KeyFeature />
      <WhyChooseUs />
      <Counter />
      <TestimonialSlider />
    </div>
  );
};

export default Enquiry;
