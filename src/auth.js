import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginService } from "./service/auth.service";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const res = await loginService({
          email: credentials.email,
          password: credentials.password,
        });

        console.log("LOGIN RESPONSE:", res);

        if (!res || !res.payload?.token) return null;

        return {
          id: res.payload.user?.id || credentials.email,
          email: credentials.email,
          accessToken: res.payload.token,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        email: token.email,
      };

      session.accessToken = token.accessToken;

      return session;
    },
  },
});