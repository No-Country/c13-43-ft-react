/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    prerender: {
      initialStatus: 200, // Un código de estado HTTP válido
      // Otras opciones de configuración de prerenderizado
      // ...
    },
  },
}

module.exports = nextConfig
