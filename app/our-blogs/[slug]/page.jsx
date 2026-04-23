import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Fetch blog
async function getBlog(slug) {
  return client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
    { slug }
  );
}

// ✅ SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const blog = await getBlog(decodedSlug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog | Studio",
    description:
      blog?.metaDescription ||
      blog?.excerpt ||
      "Read the latest insights and updates from Studio.",
  };
}

// PortableText components
const components = {
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-black leading-relaxed mb-4">{children}</p>
    ),
  },
};

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const blog = await getBlog(decodedSlug);

  if (!blog) return <p className="p-10 text-center">Blog not found</p>;

  return (
    <>
      {/* Hero */}
      <section
        style={{ backgroundImage: "url('/process.png')" }}
        className="relative h-[50vh] md:h-[90vh] bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="bg-white p-4 rounded text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded mb-6"
          />
        )}

        <p className="text-sm text-red-500 mb-4">
          Published on:{" "}
          {blog.date
            ? new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </p>

        <PortableText value={blog.content} components={components} />
      </div>
    </>
  );
}