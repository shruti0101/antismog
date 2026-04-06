"use client";

import CategoryProducts from "@/components/Enquiry-page-components/CategoryProducts";
import ClienteleSlider2 from "@/components/Enquiry-page-components/Clientele2";
import ContactForm from "@/components/Enquiry-page-components/ContactForm";
import ContactForm2 from "@/components/Enquiry-page-components/ContactForm2";
import Counter from "@/components/Enquiry-page-components/Counter";
import KeyFeature from "@/components/Enquiry-page-components/KeyFeature";
import WhyChooseUs from "@/components/Enquiry-page-components/WhyChooseUs";
import HighQualityCTA from "@/components/Landingpage/Countup";
import Hero from "@/components/Landingpage/Hero";
import TestimonialSlider from "@/components/Landingpage/Testimonials";

const Enquiry = () => {
  return (
    <div className="mt-22 md:mt-0">
      <Hero />
      <ClienteleSlider2 />
      <ContactForm />
      <CategoryProducts />
      <ContactForm2 />
      <HighQualityCTA />
      <KeyFeature />
      <WhyChooseUs />
      <Counter />
      <TestimonialSlider />
    </div>
  );
};

export default Enquiry;
