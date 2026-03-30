"use client";
import React from "react";
import {
  Wind,
  CloudFog,
  Building2,
  Factory,
} from "lucide-react";

const IndustryClassification = () => {
  const data = [
    {
      title: "Environmental Pollution Control Industry",
      desc: "Anti smog guns are primarily used to reduce air pollution (PM10, PM2.5) by spraying ultra-fine water mist that captures dust and pollutants and brings them to the ground.",
      icon: Wind,
    },
    {
      title: "Dust Suppression Equipment Industry",
      desc: "They are a type of fog cannon / dust suppression system, widely used to control airborne dust at the source in various environments.",
      icon: CloudFog,
    },
    {
      title: "Construction & Infrastructure Industry",
      desc: "These machines are heavily used at construction sites to maintain air quality and comply with pollution control norms.",
      icon: Building2,
    },
    {
      title: "Industrial Air Quality Management",
      desc: "Industries like cement plants, steel plants, and factories use anti smog guns to control dust emissions and improve workplace safety.",
      icon: Factory,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-14">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 px-4 py-1 text-xs tracking-wider text-red-600 bg-red-100 border border-red-200 rounded-full">
            INDUSTRY OVERVIEW
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Industry Classification of Anti Smog Gun
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Anti smog guns play a crucial role across multiple industries by
            controlling dust, improving air quality, and ensuring environmental compliance.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 border border-red-200 mb-5">
                <item.icon className="w-6 h-6 text-red-600" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryClassification;