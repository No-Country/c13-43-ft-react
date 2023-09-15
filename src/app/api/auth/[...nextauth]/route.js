// Descripción: Este archivo configura y exporta un controlador de autenticación NextAuth para manejar las solicitudes GET 
// y POST relacionadas con la autenticación.

// Funcionamiento: El controlador de autenticación NextAuth se configura utilizando las opciones definidas en el archivo
//  options.js. Luego, se exporta el controlador para las solicitudes GET y POST. Cuando se realizan solicitudes GET o POST 
//  a través de rutas específicas relacionadas con la autenticación, este controlador maneja la autenticación y realiza 
//  las acciones correspondientes según las configuraciones proporcionadas en options.js.

import NextAuth from "next-auth";
import { NextAuthOptions } from './options'

const handler = NextAuth(NextAuthOptions)

export { handler as GET, handler as POST };