
"use client";

import React from "react";

const ShippingPolicy = () => {
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
              Shipping Policy
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/90 leading-7 sm:leading-8">
              At <strong>Kapmix Machinery Private Limited</strong>, we are
              committed to ensuring timely and safe delivery of our machinery
              and equipment across India. This Shipping Policy outlines our
              delivery process, timelines, and important guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Policy Content */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12">
            {/* 1. Order Processing */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Order Processing
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  All orders are processed after confirmation of payment and
                  order details.
                </li>

                <li>
                  Standard processing time is{" "}
                  <strong className="text-gray-800">
                    2–5 business days
                  </strong>
                  , depending on product availability and customization
                  requirements.
                </li>

                <li>
                  For bulk or customized machinery, processing time may vary
                  and will be communicated in advance.
                </li>
              </ul>
            </section>

            {/* 2. Shipping & Delivery Time */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Shipping & Delivery Time
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                Delivery timelines depend on the location and type of product.
                Estimated delivery time:
              </p>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  <strong className="text-gray-800">
                    Metro Cities:
                  </strong>{" "}
                  5–7 business days
                </li>

                <li>
                  <strong className="text-gray-800">
                    Other Locations:
                  </strong>{" "}
                  7–14 business days
                </li>

                <li>
                  Remote or rural areas may require additional time.
                </li>
              </ul>
            </section>

            {/* 3. Shipping Charges */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Shipping Charges
              </h2>

              <p className="text-gray-600 leading-7 mb-4">
                Shipping charges are calculated based on:
              </p>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>Product weight and dimensions</li>
                <li>Delivery location</li>
                <li>Mode of transport</li>
              </ul>

              <p className="text-gray-600 leading-7 mt-4">
                The final shipping cost will be shared at the time of order
                confirmation.
              </p>
            </section>

            {/* 4. Delivery Method */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Delivery Method
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  We use trusted logistics partners and transport services to
                  ensure safe delivery.
                </li>

                <li>
                  Heavy machinery may be delivered via specialized transport
                  carriers.
                </li>
              </ul>
            </section>

            {/* 5. Order Tracking */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. Order Tracking
              </h2>

              <p className="text-gray-600 leading-7">
                Once your order is dispatched, tracking details or transport
                information will be shared via phone or email.
              </p>
            </section>

            {/* 6. Delivery Guidelines */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Delivery Guidelines
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  The customer or authorized representative must be available
                  at the delivery location.
                </li>

                <li>
                  Proper unloading arrangements, such as a crane or forklift if
                  required, should be ensured by the customer.
                </li>

                <li>
                  Please inspect the product at the time of delivery for any
                  visible damage.
                </li>
              </ul>
            </section>

            {/* 7. Damaged or Delayed Shipments */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Damaged or Delayed Shipments
              </h2>

              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-600 leading-7">
                <li>
                  If the product is received damaged, inform us within{" "}
                  <strong className="text-gray-800">
                    24 hours
                  </strong>{" "}
                  with photos or videos as proof.
                </li>

                <li>
                  While we strive for timely delivery, delays due to unforeseen
                  circumstances such as weather, transport issues, strikes, or
                  other events may occur.
                </li>
              </ul>
            </section>

            {/* 8. Service Availability */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. Service Availability
              </h2>

              <p className="text-gray-600 leading-7">
                We currently ship across India. For international orders,
                please contact us directly for availability and shipping terms.
              </p>
            </section>

            {/* 9. Contact Us */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                For any questions or concerns regarding our Shipping Policy,
                please contact us:
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

export default ShippingPolicy;

