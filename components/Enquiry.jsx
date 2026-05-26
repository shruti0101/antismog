"use client";

import React, { useState } from "react";
import axios from "axios";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Enquiry({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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

  if (!isOpen) return null;

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setRequirement("");
    setMessage("");

    setOtp("");
    setShowOtp(false);
    setIsVerified(false);
    setConfirmationResult(null);
  };

  const initRecaptcha = async () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        },
      );

      await window.recaptchaVerifier.render();
    }

    return window.recaptchaVerifier;
  };

  const sendOTP = async () => {
    try {
      setLoading(true);
      setStatus("");

      if (!/^[6-9]\d{9}$/.test(phone)) {
        setStatus("Enter valid phone number");
        return;
      }

      const appVerifier = await initRecaptcha();

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier,
      );

      setConfirmationResult(result);
      setShowOtp(true);

      setStatus("OTP sent successfully");
    } catch (err) {
      console.log(err);

      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }

      if (err.code === "auth/too-many-requests") {
        setStatus("Too many attempts. Try later.");
      } else {
        setStatus("Failed to send OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);

      if (!confirmationResult) {
        setStatus("OTP expired");
        return;
      }

      await confirmationResult.confirm(otp);

      setIsVerified(true);
      setShowOtp(false);

      await submitForm();
    } catch (err) {
      console.log(err);
      setStatus("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const submitForm = async () => {
    try {
      setLoading(true);

      const payload = {
        platform: "Kapmix Machinery Contact Form",
        platformEmail: "kapmixmachinery@gmail.com",
        name,
        phone,
        email,
        product: requirement,
        place: city || "Not Provided",
        message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload,
      );

      if (res?.data?.success) {
        const whatsappText = `Hi, I am ${name}

Email: ${email}

Product: ${requirement}

Message: ${message}

Contact: ${phone}`;

        window.open(
          `https://wa.me/919999926558?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
        );

        setStatus("success");

        resetForm();
        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        setStatus("Submission failed");
      }
    } catch (err) {
      console.log(err);
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!showOtp) {
      await sendOTP();
      return;
    }

    if (!isVerified) {
      await verifyOTP();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
      <div id="recaptcha-container"></div>

      <div
        className="relative w-[350px] md:w-[570px] rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url(/cat3_3.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 p-8 text-white">
          <button onClick={onClose} className="absolute right-5 top-5 text-xl">
            ✕
          </button>

          <h2 className="text-center text-3xl font-bold">Get In Touch</h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded mt-3 mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="w-1/2 p-3 rounded border"
              />

              <select
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                required
                className="w-1/2 p-3 rounded text-black"
              >
                <option value="">Select Product</option>

                <option>Anti Smog Gun</option>

                <option>Roof Mounted Anti Smog Gun</option>

                <option>Tractor Operated Anti Smog Gun</option>

                <option>Truck Mounted Anti Smog Gun</option>
              </select>
            </div>

            <input
              value={phone}
              disabled={showOtp}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              maxLength={10}
              required
              placeholder="Phone"
              className="w-full p-3 rounded border"
            />

            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 rounded border"
            />

            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="w-full p-3 rounded border"
            />

            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full p-3 rounded border h-28"
            />

            {showOtp && (
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full p-3 rounded border"
              />
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded bg-blue-600"
            >
              {loading
                ? "Please wait..."
                : !showOtp
                  ? "Send OTP"
                  : "Verify OTP"}
            </button>

            {status && (
              <p className="text-center">
                {status === "success" ? "🎉 We will contact you soon" : status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
