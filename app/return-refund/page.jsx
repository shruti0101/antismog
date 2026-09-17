
"use client";

import React from "react";

const ReturnRefundPolicy = () => {
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
              Return & Refund Policy
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/90 leading-7 sm:leading-8">
              At <strong>Kapmix Machinery Private Limited</strong>, we strive
              to deliver high-quality machinery and ensure customer
              satisfaction. Due to the nature of heavy equipment and industrial
              machinery, our return and refund policy is designed to be fair
              and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12">
            {/* 1. Returns Eligibility */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Returns Eligibility
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                Returns are only accepted in the following cases:
              </p>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Product received is{" "}
                  <strong className="text-gray-800">
                    damaged during transit
                  </strong>
                </li>

                <li>
                  Product delivered is{" "}
                  <strong className="text-gray-800">
                    incorrect or not as per order specifications
                  </strong>
                </li>
              </ul>

              <p className="text-gray-600 leading-7 mt-4">
                The return request must be raised within{" "}
                <strong className="text-gray-800">
                  24–48 hours of delivery.
                </strong>
              </p>
            </section>

            {/* 2. Non-Returnable Items */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Non-Returnable Items
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Products that have been{" "}
                  <strong className="text-gray-800">
                    used, installed, or altered
                  </strong>
                </li>

                <li>
                  Customized or made-to-order machinery
                </li>

                <li>
                  Products damaged due to improper handling after delivery
                </li>
              </ul>
            </section>

            {/* 3. Return Process */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Return Process
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                To initiate a return:
              </p>

              <ol className="list-decimal pl-5 sm:pl-6 space-y-3 text-gray-600 leading-7">
                <li>
                  Contact us via phone or email within the eligible time frame.
                </li>

                <li>
                  Share order details along with{" "}
                  <strong className="text-gray-800">
                    photos/videos
                  </strong>{" "}
                  of the issue.
                </li>

                <li>
                  Our team will review and approve the request.
                </li>

                <li>
                  Return instructions will be provided accordingly.
                </li>
              </ol>
            </section>

            {/* 4. Refund Policy */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Refund Policy
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Refunds are processed only after inspection and approval of
                  the returned product.
                </li>

                <li>
                  Once approved, the refund will be initiated within{" "}
                  <strong className="text-gray-800">
                    7–10 business days.
                  </strong>
                </li>

                <li>
                  Refunds will be issued via the{" "}
                  <strong className="text-gray-800">
                    original payment method
                  </strong>{" "}
                  or as mutually agreed.
                </li>
              </ul>
            </section>

            {/* 5. Replacement Policy */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. Replacement Policy
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                In case of damaged or defective products, we may offer:
              </p>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  <strong className="text-gray-800">
                    Replacement of the product
                  </strong>
                </li>

                <li>
                  <strong className="text-gray-800">
                    Repair or service support
                  </strong>
                  , depending on the situation
                </li>
              </ul>
            </section>

            {/* 6. Return Shipping */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Return Shipping
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  If the return is due to our error, such as a wrong or
                  defective product, we will bear the return shipping cost.
                </li>

                <li>
                  In other cases, return shipping charges may be the
                  responsibility of the customer.
                </li>
              </ul>
            </section>

            {/* 7. Order Cancellation */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Order Cancellation
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Orders can be cancelled before dispatch without any charges.
                </li>

                <li>
                  Once the product is dispatched, cancellation requests may
                  not be accepted.
                </li>
              </ul>
            </section>

            {/* 8. Important Notes */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. Important Notes
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  Customers must ensure proper handling and installation as per
                  the provided guidelines.
                </li>

                <li>
                  Any claim without proper proof, including images or videos,
                  may not be accepted.
                </li>
              </ul>
            </section>

            {/* 9. Contact Us */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                For any questions or concerns regarding our Return & Refund
                Policy, please contact us:
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

export default ReturnRefundPolicy;

