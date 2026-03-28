"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "1. What is an Anti Smog Gun?",
      a: `An Anti Smog Gun is a dust suppression machine that sprays fine water mist into the air to control airborne dust, PM2.5, and PM10 particles at construction and industrial sites.`,
    },
    {
      q: "2. How does a Kapmix Anti Smog Gun work?",
      a: `Kapmix Anti Smog Guns use high-pressure pumps and powerful fans to atomize water into fine droplets. These droplets bind with dust particles, making them heavier and causing them to settle on the ground.`,
    },
    {
      q: "3. Where can Anti Smog Guns be used?",
      a: `Kapmix Anti Smog Guns are ideal for:
• Construction sites 
• Road and highway projects 
• Mining areas 
• Demolition sites 
• Industrial plants 
• Waste handling zones`,
    },
    {
      q: "4. What is the spray range of Kapmix Anti Smog Guns?",
      a: `Kapmix Anti Smog Guns typically offer a spray range of 30 meters to 50 meters or more, depending on the model and configuration.`,
    },
    {
      q: "5. What types of Anti Smog Guns does Kapmix Machinery offer?",
      a: `Kapmix provides multiple variants such as:
• Trolley Mounted Anti Smog Gun 
• Truck Mounted Smog Gun 
• Fixed Anti Smog Tower 
• Anti Pollution Fog Cannon`,
    },
    {
      q: "6. Is the machine easy to operate?",
      a: `Yes, Kapmix Anti Smog Guns are designed with user-friendly controls and require minimal training for operation.`,
    },
    {
      q: "7. What is the water consumption of an Anti Smog Gun?",
      a: `Water consumption varies by model, but Kapmix machines are designed for optimized water usage while maintaining effective dust suppression.`,
    },
    {
      q: "8. Can the Anti Smog Gun be customized?",
      a: `Yes, Kapmix Machinery offers customized solutions based on:
• Required spray range 
• Mounting type 
• Project size 
• Site conditions`,
    },
    {
      q: "9. What material is used in manufacturing?",
      a: `Kapmix Anti Smog Guns are built using high-quality mild steel and durable components, ensuring long life and resistance to harsh environments.`,
    },
    {
      q: "10. Does Kapmix provide after-sales support?",
      a: `Yes, Kapmix Machinery offers:
• Installation support 
• Spare parts availability 
• Maintenance assistance 
• Technical guidance`,
    },
    {
      q: "11. Is the Anti Smog Gun suitable for government projects?",
      a: `Yes, Kapmix machines meet the requirements of government tenders and environmental compliance standards, making them suitable for public and infrastructure projects.`,
    },
    {
      q: "12. What makes Kapmix Machinery different from other manufacturers?",
      a: `Kapmix stands out due to:
• Industry experience 
• Wide product range 
• Competitive pricing 
• Reliable performance 
• PAN India supply`,
    },
    {
      q: "13. How can I choose the right Anti Smog Gun?",
      a: `You should consider:
• Area size 
• Dust level 
• Required spray distance 
• Mobility needs (trolley/truck/fixed) 
Kapmix experts can guide you in selecting the best model.`,
    },
    {
      q: "14. Does Kapmix supply in bulk?",
      a: `Yes, Kapmix Machinery supports bulk orders and large project requirements with timely delivery.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-red-50 py-20 px-6 md:px-16">

      {/* HEADING */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-semibold text-black">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            {/* QUESTION */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
            >
              <span className="font-semibold text-black text-sm md:text-base">
                {item.q}
              </span>

              <ChevronDown
                className={`transition ${
                  openIndex === i ? "rotate-180 text-red-600" : ""
                }`}
              />
            </button>

            {/* ANSWER */}
            <div
              className={`px-5 transition-all duration-300 overflow-hidden ${
                openIndex === i ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p className="text-black text-sm leading-relaxed whitespace-pre-line">
                {item.a}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}