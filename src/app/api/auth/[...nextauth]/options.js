import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { firestoreDB } from "@/lib/firebaseConn";

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
    // async signIn({user}) {
    //     // console.log(user)
    //     return true
    // },
    async jwt({ token, user, session }) {
      // console.log("jwt callback", { token, user, session });
      if (user) {
        return {
          ...token,
          id: user.id,
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
        },
      };
      return session;
    },
    //Aca lo del login de google
    // async signIn({profile}) {
    //     console.log(profile)
    //     try {
    //         // await connectDB();

    //         return true;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }
    // }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
