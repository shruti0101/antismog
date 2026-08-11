"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "@/lib/firebase";
import EnquiryForm from "@/components/Enquiry";

const ContactForm2 = () => {
  const [enquiry, setEnquiry] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // const [otp, setOtp] = useState("");
  // const [showOtp, setShowOtp] = useState(false);
  // const [confirmationResult, setConfirmationResult] = useState(null);
  // const [isVerified, setIsVerified] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  // -------------------------
  // RECAPTCHA INIT
  // -------------------------
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       auth,
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //       }
  //     );

  //     window.recaptchaVerifier.render();
  //   }
  // }, []);

  // -------------------------
  // SEND OTP
  // -------------------------
  // const sendOTP = async () => {
  //   try {
  //     setLoading(true);

  //     const appVerifier = window.recaptchaVerifier;

  //     if (!appVerifier) {
  //       return;
  //     }

  //     const result = await signInWithPhoneNumber(
  //       auth,
  //       "+91" + phone,
  //       appVerifier
  //     );

  //     setConfirmationResult(result);
  //     setShowOtp(true);

  //     setStatus("otp-sent");
  //   } catch (err) {
  //     console.log(err);
  //     setStatus("error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // -------------------------
  // VERIFY OTP
  // -------------------------
  // const verifyOTP = async () => {
  //   try {
  //     setLoading(true);

  //     if (!confirmationResult) return;

  //     await confirmationResult.confirm(otp);

  //     setIsVerified(true);

  //     await submitForm();
  //   } catch (err) {
  //     console.log(err);
  //     setStatus("error");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // -------------------------
  // FINAL SUBMIT
  // -------------------------
  const submitForm = async () => {
    try {
      setLoading(true)
      const formDataPayload = {
        platform: "Kapmix Machinery Contact Form",
        platformEmail: "kapmixmachinery@gmail.com",
        name,
        phone,
        email,
        product: requirement,
        place: city,
        message,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formDataPayload,
      );

      if (res?.data?.success) {
        setStatus("success");
                setLoading(false)


        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${requirement}
City: ${city}
Message: ${message}
Contact: ${phone}`;

        window.open(
          `https://wa.me/919999926558?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
        );

        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setRequirement("");
        setMessage("");
        // setOtp("");
        // setShowOtp(false);
        // setIsVerified(false);
      } else {
        setLoading(false)
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  // -------------------------
  // HANDLE SUBMIT FLOW
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setStatus("error");
      return;
    }

    // if (!showOtp) {
    //   await sendOTP();
    //   return;
    // }

    // if (!isVerified) {
    //   await verifyOTP();
    //   return;
    // }

    await submitForm();
  };

  return (
    <div className="lg:flex flex-col mb-6 hidden">
      {/* RECAPTCHA DIV */}
      {/* <div id="recaptcha-container"></div> */}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setEnquiry(true)}
        className="relative flex items-center justify-center mx-3 -mt-10 mb-5 gap-3 bg-red-600 text-white px-7 py-4 rounded-xl font-semibold"
      >
        Get a Free Quote
      </motion.button>

      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        {/* FORM */}
        <div className="bg-white p-5 md:p-10 rounded-3xl shadow-2xl border my-4 mx-3">
          <h2 className="text-3xl font-bold mb-6">Send Your Requirement</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                disabled={loading}
                className="border p-3 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="tel"
                disabled={loading}
                placeholder="Phone Number"
                maxLength={10}
                className="border p-3 rounded-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              disabled={loading}
              className="border p-3 rounded-lg w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="City"
              disabled={loading}
              className="border p-3 rounded-lg w-full"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <select
              className="border p-3 rounded-lg w-full"
              value={requirement}
              disabled={loading}
              onChange={(e) => setRequirement(e.target.value)}
            >
              <option value="">Select Product</option>
              <option>Anti Smog Gun</option>
              <option>Roof Mounted Anti Smog Gun</option>
              <option>Tractor Operated Anti Smog Gun</option>
              <option>Truck Mounted Anti Smog Gun</option>
            </select>

            <textarea
              placeholder="Message"
              disabled={loading}
              className="border p-3 rounded-lg w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* OTP INPUT */}
            {/* {showOtp && !isVerified && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="border p-3 rounded-lg w-full"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                
              </div>
            )} */}

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white w-full py-3 rounded-lg"
            >
              {loading ? "Processing Your Needs..." : "Submit Requirments"}
            </button>

            {status === "success" && (
              <p className="text-green-600 font-bold">
                ✅ Submitted Successfully
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 font-bold">❌ Something went wrong</p>
            )}
          </form>
        </div>

        {/* IMAGE */}
        <div className="hidden lg:block">
          <Image
            src="https://res.cloudinary.com/dqoktmo4j/image/upload/q_auto/f_auto/v1777962364/prodtest_mrija3.webp"
            width={1000}
            height={1000}
            alt="product"
          />
        </div>
      </div>

      <EnquiryForm isOpen={enquiry} onClose={() => setEnquiry(false)} />
    </div>
  );
};

export default ContactForm2;
