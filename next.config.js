/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true, // Añade esto para mejor compatibilidad
   basePath: process.env.NODE_ENV === 'production' ? '/webcrisesNextJs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webcrisesNextJs/' : '',
  images: {
    unoptimized: true,
  },
  // Elimina assetPrefix (puede causar problemas con export estático)
};

module.exports = nextConfig;
