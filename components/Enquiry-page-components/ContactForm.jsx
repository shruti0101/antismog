"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/Enquiry";
import ClienteleSlider from "../Landingpage/Clientele";

const ContactForm = () => {
  const [enquiry, setEnquiry] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formDataPayload = {
        platform: "Kapmix Machinery Contact Form",
        platformEmail: "kapmixmachinery@gmail.com",
        name,
        phone,
        email,
        product: requirement,
        place: "Na",
        message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formDataPayload,
      );

      if (res?.data?.success) {
        setStatus("success");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
City: ${city}
Message: ${message}
Contact: ${phone}`;

        window.open(
          `https://wa.me/919810057441?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
        );

        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error, "error");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mb-6 lg:hidden">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setEnquiry(true)}
        className="relative flex items-center justify-center mx-3 -mt-10 mb-5 gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-semibold overflow-hidden shadow-lg shadow-red-600/30 lg:hidden"
      >
        <span className="relative z-10">Get a Free Quote</span>

        {/* SHINE */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-1/2 h-full bg-white/30 skew-x-12"
        />
      </motion.button>

      <ClienteleSlider />

      <div className="bg-white p-5 md:p-10 rounded-3xl shadow-2xl border my-4 mx-3">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Send Your Requirement
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              required
              maxLength={10}
              pattern="[0-9]{10}"
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <select
              className="border rounded-lg px-4 py-3 w-full bg-red-600 text-white font-semibold"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
            >
              <option value="">Select Product</option>
              <option value="Anti Smog Gun">Anti Smog Gun</option>
              <option value="Roof Mounted Anti Smog Gun">
                Roof Mounted Anti Smog Gun
              </option>
              <option value="Tractor Operated Anti Smog Gun">
                Tractor Operated Anti Smog Gun
              </option>
              <option value="Truck Mounted Anti Smog Gun">
                Truck Mounted Anti Smog Gun
              </option>
            </select>
          </div>

          <input
            type="email"
            required
            placeholder="Email Address"
            className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            rows={4}
            placeholder="Message"
            className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-red-600 outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 transition text-white px-6 py-3 rounded-xl font-semibold w-full shadow-lg"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-semibold">
              ✅ Thank you! We will contact you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-semibold">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>

      <EnquiryForm isOpen={enquiry} onClose={() => setEnquiry(false)} />
    </div>
  );
};

export default ContactForm;
