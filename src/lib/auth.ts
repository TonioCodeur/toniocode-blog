import { NextAuthOptions } from "next-auth";
import { Pool } from "@neondatabase/serverless";
import GoogleProvider from "next-auth/providers/google";
import PostgresAdapter from "@auth/pg-adapter";

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
export const runtime = 'nodejs';
// Configuration séparée des options
export const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(pool),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
}