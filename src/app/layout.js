import Navbar from "@/components/Navbar"
import AuthProvider from "@/context/AuthProvider"
import '@/styles/globals.css'
import { getServerSession } from "next-auth"
import { NextAuthOptions } from "./api/auth/[...nextauth]/options"
import Providers from "./providers"


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
