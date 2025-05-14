import { PrismaClient } from '@prisma/client'

// Définition du type global pour Prisma
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// Création d'une instance Prisma ou réutilisation de l'instance existante
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// Assignation de l'instance à la variable globale en développement
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma