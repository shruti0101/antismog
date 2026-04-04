"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  LayoutGrid,
  Zap,
  HardHat,
  Settings,
  Award,
  Boxes,
  Factory,
  HandCoins,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Proven Industry Experience",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Wide Range of Solutions",
      icon: <LayoutGrid className="w-6 h-6" />,
    },
    { title: "High Performance Control", icon: <Zap className="w-6 h-6" /> },
    { title: "Heavy-Duty Construction", icon: <HardHat className="w-6 h-6" /> },
    {
      title: "Flexible Mounting Options",
      icon: <Settings className="w-6 h-6" />,
    },
    { title: "Made in India Quality", icon: <Award className="w-6 h-6" /> },
    { title: "Customization & Bulk", icon: <Boxes className="w-6 h-6" /> },
    { title: "Strong Supply Capacity", icon: <Factory className="w-6 h-6" /> },
    { title: "Competitive Pricing", icon: <HandCoins className="w-6 h-6" /> },
    { title: "Trusted Industrial Sector", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Why Choose <span className="text-red-600">Us</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          Engineered for performance, durability, and reliability. We are
          committed to providing the best dust suppression solutions in the
          industry.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-red-200 transition-all duration-300 flex flex-col items-center group"
            >
              <div className="mb-5 p-4 bg-red-50 text-red-600 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="text-gray-800 font-bold text-sm md:text-base leading-tight">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
