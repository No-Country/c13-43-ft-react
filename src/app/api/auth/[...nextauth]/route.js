import NextAuth from "next-auth/next";
import { NextAuthOptions } from './options'

const handler = NextAuth(NextAuthOptions)

export { handler as GET, handler as POST };