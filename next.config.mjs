/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/camera-review-site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
