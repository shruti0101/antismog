"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Truck, Globe, CheckCircle } from "lucide-react";

const Counter = () => {
  const stats = [
    {
      label: "Happy Clients",
      value: "500+",
      icon: <Users className="w-8 h-8" />,
      description: "Trusted by top construction firms nationwide.",
    },
    {
      label: "Units Installed",
      value: "1,200+",
      icon: <Truck className="w-8 h-8" />,
      description: "Anti-smog guns deployed in critical sectors.",
    },
    {
      label: "Years of Excellence",
      value: "10+",
      icon: <Trophy className="w-8 h-8" />,
      description: "A decade of engineering and innovation.",
    },
    {
      label: "Pan-India Reach",
      value: "25+",
      icon: <Globe className="w-8 h-8" />,
      description: "Service centers across all major Indian states.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-gray-100 text-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-red-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in <span className="text-red-500">Numbers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From infrastructure giants to small-scale industrial sites, we have
            been the preferred partner for dust suppression for over a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-8 rounded-2xl bg-white text-black border border-slate-700 hover:border-red-500/50 transition-colors group"
            >
              <div className="mb-4 text-red-500 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2 text-black">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-red-500 mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-gray-400 text-center leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
