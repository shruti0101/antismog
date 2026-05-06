// /** @type {import('next').NextConfig} */
// const nextConfig = {
//      reactStrictMode: true,
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // Important for Next 15 static images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    localPatterns: [
      {
        pathname: "/**", // allow ALL public images
        search: "",
      },
    ],
    domains: ["img.youtube.com"],
  },
};

export default nextConfig;
