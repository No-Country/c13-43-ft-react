import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your password"
                },
            },
            async authorize(credentials) {
                const user = { id: "42", name: "Martin", password: "123123" }

                if(credentials?.username === user.name && credentials?.password === user.password) {
                    // console.log(user)
                    return user
                }else {
                    return null
                }
            }
        })
    ],
    // callbacks: {
    //     async session({ session }) {
    //         // console.log(session)
    //         return session
    //     },
    //     async signIn({profile}) {
    //         console.log(profile)
    //         return true
    //     }
    // }
}