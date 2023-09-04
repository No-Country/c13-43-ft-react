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
                const user = { id: "42", email: "tester@test.com", password: "123123", address: 'Ortiz 2111' }

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
        // async signIn({user}) {
        //     // console.log(user)
        //     return true
        // },
        async jwt({ token, user, session}) {
            // console.log("jwt callback", { token, user, session });
            if(user) {
                return {
                    ...token,
                    id: user.id,
                    address: user.address,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            // console.log("session callback", { session, token, user });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    address: token.address,
                }
            };
            return session;
        },
        
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
}