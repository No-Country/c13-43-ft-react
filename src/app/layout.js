"use client"
import Navbar from "@/components/Navbar"
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          { children }
        </SessionProvider>
      </body>
    </html>
  )
}
