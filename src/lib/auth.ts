import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "@neondatabase/serverless"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const authOptions = NextAuth( {
  // Create a `Pool` inside the request handler.
    adapter: PostgresAdapter(pool),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
  }
)