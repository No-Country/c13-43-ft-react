import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { firestoreDB } from "@/lib/firebaseConn";
const googleUrl = process.env.GOOGLE_LOG_URL;
//el problema es que nunca entra al if

export const NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "your password",
                },
            },
            async authorize(credentials) {
                //checkea que los campos "email" y "password" tengan algo
                if (!credentials.email || !credentials.password) {
                    console.log("Both fields are required");
                    return null;
                }

                const userRef = await firestoreDB
                    .collection("users")
                    .where("email", "==", credentials.email)
                    .get();
                //checkear si el user esta en la db
                if (userRef.empty) {
                    console.log("User not found");
                    return null;
                }

                const user = userRef.docs[0].data();
                const userPassword = userRef.docs[0].data().password;

                //checkear si las contraseñas coinciden
                if (userPassword !== credentials.password) {
                    console.log("Wrong password");
                    return null;
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === "google") {
                // Checkea si el email del usuario existe en la DB
                const userRef = await firestoreDB
                    .collection("users")
                    .where("email", "==", profile.email)
                    .get();
                if (userRef.empty) {
                    try {
                        const fetching = await fetch(
                            `${googleUrl}/api/signup`,
                            {
                                method: "POST",
                                mode: "cors",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    email: profile.email,
                                    password: "123456",
                                    name: profile.name,
                                }),
                            }
                        );
                        const response = await fetching.json();
                        console.log(response);
                        return response;
                    } catch (error) {
                        console.error(error);
                    }
                    return true;
                }
            }
            return true;
        },
        async jwt({ token, user, session }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            };
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
