/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Necesario para sitios estáticos
  images: {
    unoptimized: true, // Requerido cuando usas 'export'
  },
  // Si vas a desplegar en un subdirectorio (nombre-repo):
  basePath: process.env.NODE_ENV === "production" ? "/webcrisesNextJs" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/webcrisesNextJs/" : "",
};

module.exports = nextConfig;
