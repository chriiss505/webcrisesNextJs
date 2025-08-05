/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Solo activa para producción (GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/webcrisesNextJs" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/webcrisesNextJs/" : "",
  images: {
    unoptimized: true,
  },
};
