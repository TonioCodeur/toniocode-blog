import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

// Initialisation du handler directement dans le fichier route
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
