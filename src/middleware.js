// Descripción: Este código exporta el middleware de autenticación de Next.js y configura rutas que requieren 
// autenticación, como "/login/(.*)" y "/votaciones".

export { default } from "next-auth/middleware"

export const config = { matcher: ["/login/(.*)", "/votaciones"] }