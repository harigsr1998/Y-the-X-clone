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
    ];
  },
};

export default nextConfig;
