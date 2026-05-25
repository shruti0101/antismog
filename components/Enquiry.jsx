"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Enquiry({ isOpen, onClose }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  // ---------------- RECAPTCHA ----------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );

      window.recaptchaVerifier.render();
    }
  }, []);

  if (!isOpen) return null;

  const handleClose = () => onClose();

  // ---------------- SEND OTP ----------------
  const sendOTP = async () => {
    try {
      setLoading(true);
      setStatus(null);

      const appVerifier = window.recaptchaVerifier;

      if (!appVerifier) {
        setStatus("error");
        return;
      }

      const result = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      setConfirmationResult(result);
      setShowOtp(true);
      setStatus("otp-sent");
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- VERIFY OTP ----------------
  const verifyOTP = async () => {
    try {
      setLoading(true);

      if (!confirmationResult) {
        setStatus("error");
        return;
      }

      await confirmationResult.confirm(otp);

      setIsVerified(true);
      setShowOtp(false);

      await submitForm();
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- SUBMIT FORM ----------------
  const submitForm = async () => {
    try {
      setLoading(true);
      setStatus(null);

      const formDataPayload = {
        platform: "Kapmix Machinery Contact Form",
        platformEmail: "kapmixmachinery@gmail.com",
        name,
        phone,
        email,
        product: requirement,
        place: city?.trim() || "Not Provided",
        message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formDataPayload
      );

      if (res?.data?.success) {
        setStatus("success");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
Message: ${message}
Contact: ${phone}`;

        window.open(
          `https://wa.me/919999926558?text=${encodeURIComponent(
            whatsappText
          )}`,
          "_blank"
        );

        // reset
        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setRequirement("");
        setMessage("");
        setOtp("");
        setShowOtp(false);
        setIsVerified(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- MAIN HANDLER ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) return;

    if (!showOtp) {
      await sendOTP();
      return;
    }

    if (showOtp && !isVerified) {
      await verifyOTP();
      return;
    }

    await submitForm();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      
      {/* RECAPTCHA */}
      <div id="recaptcha-container"></div>

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

          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* NAME + PRODUCT */}
            <div className="flex gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                disabled={loading}
                className="w-1/2 p-3 placeholder-white rounded-md text-white border-2 border-white focus:outline-none"
              />

              <select
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                required
                disabled={loading}
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

            {/* PHONE */}
            <div className="flex items-center rounded-md border-2 border-white overflow-hidden">
              <span className="ml-1">🇮🇳</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                maxLength={10}
                required
                disabled={loading}
                placeholder="08123456789"
                className="w-full p-3 text-white focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="Email"
              className="w-full p-3 rounded-md border-2 border-white text-white focus:outline-none"
            />

            {/* MESSAGE */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              disabled={loading}
              placeholder="Message"
              className="w-full p-3 rounded-md border-2 border-white text-white h-28 resize-none"
            />

            {/* OTP */}
            {showOtp && !isVerified && (
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-3 rounded-md border-2 border-green-500 text-white"
              />
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] rounded-md font-semibold text-white shadow-md"
            >
              {loading
                ? "Sending..."
                : !showOtp
                ? "Send OTP"
                : !isVerified
                ? "Verify OTP"
                : "Submit Message"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-center text-green-400 font-semibold">
                Success! We will contact you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-red-400 font-semibold">
                Something went wrong
              </p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}