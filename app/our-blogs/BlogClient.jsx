"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

async function getBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
  );
}

export default function BlogClient() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    getBlogs().then(setBlogs);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundImage: "url('/process.png')" }}
        className="w-full bg-cover h-[50vh] md:h-[100vh] relative"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white">Home / Blogs</p>
          <h2 className="text-white text-5xl font-bold">Our Blogs</h2>
        </div>
      </section>

      {/* Blogs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((b) => (
            <article
              key={b.slug?.current}
              className="bg-white border rounded-lg shadow"
            >
              {b.imageUrl && (
                <Image
                  src={b.imageUrl}
                  alt={b.title}
                  width={1200}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}

              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{b.title}</h2>

                <p className="text-sm text-gray-500 mb-2">
                  {b.date
                    ? new Date(b.date).toLocaleDateString()
                    : "No date"}
                </p>

                <p className="text-sm text-gray-700">{b.excerpt}</p>

                <Link
                href={`/our-blogs/${encodeURIComponent(b.slug.current)}`}
                  className="text-blue-600 mt-3 inline-block"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-6 py-3 bg-blue-600 text-white rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}