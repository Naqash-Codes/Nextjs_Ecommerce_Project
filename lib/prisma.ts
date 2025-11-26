// lib/prisma.ts
import prisma from "@prisma/client";  // Prisma v7 default export

// Optional: avoid multiple instances in development
declare global {
  // eslint-disable-next-line no-var
  var prismaClient: typeof prisma | undefined;
}

export const db = global.prismaClient || prisma;

if (process.env.NODE_ENV !== "production") {
  global.prismaClient = db;
}
