// Descripción: Este layout es el componente principal de la aplicación, provee el contexto a toda la aplicación para su 
// uso general en los diferentes componentes ligados a la sesión de usuario.

import Navbar from "@/components/Navbar"
import AuthProvider from "@/context/AuthProvider"
import '@/styles/globals.css'
import { getServerSession } from "next-auth"
import { NextAuthOptions } from "./api/auth/[...nextauth]/options"
import Providers from "./providers"

export const dynamic = 'force-dynamic'

export default async function RootLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)

  return (
    <html lang="en" className="light" style={{colorScheme: 'light'}}>
      <body className="bg-secondaryWhite text-secondaryBlack dark:bg-darkBlack dark:text-white">
        <Providers>
        <AuthProvider session={session}>
          <Navbar />
          { children }
        </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}
