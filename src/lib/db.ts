import { PrismaClient } from '@prisma/client';
 
const prismaClientSingleton = () => {
  return new PrismaClient();
};
 
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
 
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
 
export default prisma;
 
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

// ensures that only one instance of PrismaClient is created and reused across the application
// preventing the creation of multiple instances during development hot reload
// This code ensures that only one instance of PrismaClient is created and reused across your application, preventing the creation of multiple instances during development hot reloads. It creates a single PrismaClient instance and saves it on the globalThis object, reusing it if it already exists.