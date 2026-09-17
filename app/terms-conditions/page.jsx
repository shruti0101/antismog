
"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/bg-product.webp')",
        }}
        className="relative bg-cover bg-center bg-no-repeat border-b border-gray-200 pt-20"
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-4xl">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-white mb-3">
              Legal Information
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Terms & Conditions
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/90 leading-7 sm:leading-8">
              Welcome to{" "}
              <strong>Kapmix Machinery Private Limited</strong>. By accessing
              or using our website and services, you agree to comply with the
              following terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12">
            {/* 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Use of Website
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  The content on this website is for general information and
                  business purposes only.
                </li>
                <li>
                  Unauthorized use of this website may result in legal action.
                </li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Product Information
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  We strive to ensure all product details are accurate;
                  however, specifications, pricing, and availability may change
                  without prior notice.
                </li>
                <li>
                  Images are for illustrative purposes only.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Orders and Payments
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  All orders are subject to acceptance and availability.
                </li>
                <li>
                  Pricing and payment terms will be confirmed at the time of
                  order.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  All content, including text, images, logos, and designs, is
                  the property of Kapmix Machinery Private Limited.
                </li>
                <li>
                  Reproduction without permission is strictly prohibited.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. Limitation of Liability
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  We are not liable for any direct or indirect damages arising
                  from the use of our products or website.
                </li>
                <li>
                  Customers are responsible for proper usage of machinery as
                  per the provided guidelines.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Warranty & Support
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Products may come with a standard warranty as specified for
                  the respective product.
                </li>
                <li>
                  Any misuse or unauthorized modifications may void the
                  warranty.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Third-Party Services
              </h2>

              <p className="text-gray-600 leading-7">
                We are not responsible for services or products offered by
                third-party vendors linked through our website.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. Termination
              </h2>

              <p className="text-gray-600 leading-7">
                We reserve the right to terminate or restrict access to our
                website or services without prior notice in cases of misuse,
                unauthorized activity, or violation of these terms.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. Governing Law
              </h2>

              <p className="text-gray-600 leading-7">
                These Terms & Conditions shall be governed by and interpreted
                in accordance with the laws of India.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                10. Changes to Terms
              </h2>

              <p className="text-gray-600 leading-7">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website after changes are posted
                implies acceptance of the updated terms.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                For any questions or concerns regarding these Terms &
                Conditions, please contact us:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-7 space-y-5">
                {/* Company */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Company Name
                  </p>

                  <p className="text-base sm:text-lg font-semibold text-gray-900">
                    Kapmix Machinery Private Limited
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:kapmixmachinery@gmail.com"
                    className="text-base sm:text-lg font-medium text-gray-900 hover:underline break-all"
                  >
                    kapmixmachinery@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+919999926558"
                    className="text-base sm:text-lg font-medium text-gray-900 hover:underline"
                  >
                    +91-9999926558
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Address
                  </p>

                  <p className="text-base sm:text-lg text-gray-900 leading-7">
                    Khasra Number: 1132, Opp. DPS,
                    <br className="hidden sm:block" />
                    Saraswati Vihar, Harbans Nagar,
                    <br className="hidden sm:block" />
                    Ghukna, Ghaziabad,
                    <br className="hidden sm:block" />
                    Uttar Pradesh - 201003
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;

