/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
      {
        pathname: "/assets/icons/**",
      },
    ],
  },
};

export default nextConfig;
