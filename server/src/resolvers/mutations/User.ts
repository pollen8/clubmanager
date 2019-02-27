import { MutationResolvers } from '../../generated/graphqlgen';
import {
  UserCreateInput,
  UserUpdateInput,
} from '../../generated/prisma-client';

export const userResolvers: Pick<MutationResolvers.Type, 'deleteUser' | 'upsertUser'> = {
  deleteUser: (parent, { id }, ctx) => {
    return ctx.prisma.deleteUser({ id });
  },
  upsertUser: (parent, { user }, ctx) => {
    const create: UserCreateInput = {
      name: String(user.name),
      email: String(user.email),
    };
    const update: UserUpdateInput = {
      name: String(user.name),
      email: String(user.email),
    }
    const where = {
      id: user.id,
    }
    return ctx.prisma.upsertUser({
      where,
      create,
      update,
    });
  },
}