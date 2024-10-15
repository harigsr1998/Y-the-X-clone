/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/foryou/",
        permanent: true,
      },
      {
        source: "/search",
        destination: "/search/foryou/",
        permanent: true,
      },
      {
        source: "/communities",
        destination: "/communities/home/",
        permanent: true,
      },
      {
        source: "/notifications",
        destination: "/notifications/all/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};

export default nextConfig;
