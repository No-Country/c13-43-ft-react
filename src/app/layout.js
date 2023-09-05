import Navbar from "@/components/Navbar"
import AuthProvider from "@/context/AuthProvider"
import '@/styles/globals.css'
import { getServerSession } from "next-auth"
import { NextAuthOptions } from "./api/auth/[...nextauth]/options"


export default async function RootLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)

  return (
    <html lang="en">
      <body>
        <AuthProvider session={session}>
          <Navbar />
          { children }
        </AuthProvider>
      </body>
    </html>
  )
}
