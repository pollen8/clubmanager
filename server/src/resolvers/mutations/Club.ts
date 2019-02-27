import { MutationResolvers } from '../../generated/graphqlgen';
import {
  ClubCreateInput,
  ClubUpdateInput,
} from '../../generated/prisma-client';

export const clubResolvers: Pick<MutationResolvers.Type, 'deleteClub' | 'upsertClub'> = {
  deleteClub: (parent, { id }, ctx) => {
    return ctx.prisma.deleteClub({ id });
  },
  upsertClub: (parent, { club }, ctx) => {
    const create: ClubCreateInput = {
      name: String(club.name),
      description: String(club.description),
    };
    const update: ClubUpdateInput = {
      name: String(club.name),
      description: String(club.description),
    }
    const where = {
      id: club.id,
    }
    return ctx.prisma.upsertClub({
      where,
      create,
      update,
    });
  },
}