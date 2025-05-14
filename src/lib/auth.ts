import NextAuth from "next-auth"
import { Pool } from "@neondatabase/serverless"
import GoogleProvider from "next-auth/providers/google"
import PostgresAdapter from "@auth/pg-adapter"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(new Pool({ connectionString: process.env.DATABASE_URL })),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
})