import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your password"
                },
            },
            async authorize(credentials) {
                const user = { id: "42", email: "tester@test.com", password: "123123" }

                if(credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                }else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({user}) {
            // console.log(user)
            return true
        },
        async session({ session }) {
            // console.log(session)
            return session
        },
    }
}