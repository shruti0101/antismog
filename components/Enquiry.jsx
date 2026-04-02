"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Enquiry({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleClose = () => onClose();

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div
        className="relative rounded-3xl shadow-2xl p-10 w-[350px] md:w-[570px] text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/cat3_3.avif)" }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-3xl"></div>

        <div className="relative z-10">
          <button
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
            onClick={handleClose}
          >
            ✕
          </button>

          <h2 className="text-center text-white text-xl md:text-3xl font-semibold">
            Get In Touch With Us
          </h2>
          <div className="w-28 h-[4px] bg-cyan-600 mx-auto mt-3 mb-8 rounded-full"></div>

          {!submitted ? (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Your Name"
                  required
                  disabled={loading}
                  className="w-1/2 p-3 placeholder-white rounded-md text-white border-2 border-white focus:outline-none"
                />

                <select
                  name="products"
                  required
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  disabled={loading}
                  defaultValue=""
                  className="w-1/2 p-3 rounded-md text-black text-sm border-2 focus:outline-none bg-blue-50"
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

              <div className="flex items-center rounded-md border-2 border-white overflow-hidden">
                <span className="ml-1">🇮🇳</span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  name="phone"
                  maxLength={10}
                  minLength={10}
                  required
                  disabled={loading}
                  placeholder="08123456789"
                  className="w-full p-3 text-white focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                placeholder="Email"
                className="w-full p-3 rounded-md border-2 border-white text-white focus:outline-none"
              />

              <textarea
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                placeholder="Message"
                className="w-full p-3 rounded-md border-2 border-white text-white h-28 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] rounded-md font-semibold text-white shadow-md"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <p className="text-center text-white font-semibold text-lg">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
