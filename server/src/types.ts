import { Prisma } from './generated/prisma-client';

export interface Context {
  prisma: Prisma,
  user: Promise<any>;
}
