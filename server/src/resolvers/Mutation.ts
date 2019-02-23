import { AuthenticationError } from 'apollo-server';

import { MutationResolvers } from '../generated/graphqlgen';
import {
  ClubCreateInput,
  ClubUpdateDataInput,
  ClubUpdateInput,
  SeasonCreateInput,
  SeasonUpdateInput,
} from '../generated/prisma-client';

const clubResolvers: Pick<MutationResolvers.Type, 'deleteClub' | 'upsertClub'> = {
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
    console.log('----- upsert club');
    console.log('where', where);
    console.log('create', create);
    console.log('update,', update);
    return ctx.prisma.upsertClub({
      where,
      create,
      update,
    });
  },
}

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  ...clubResolvers,


  signupUser: (parent, { name, email }, ctx) => {
    return ctx.prisma.createUser({
      name,
      email,
    })
  },

  deleteSeason: async (parent, { id }, ctx) => {
    try {
      await ctx.user;
      // @TODO - delete season memmbers and season attendance
      return ctx.prisma.deleteSeason({
        id,
      })
    } catch (e) {
      throw new AuthenticationError('You must be logged in to do this');
    }
  },

  upsertSeason: async (parent, { season }, ctx) => {
    try {
      await ctx.user;
      const data: SeasonUpdateInput = {};
      if (season.startDate) {
        data.startDate = new Date(season.startDate);
      }
      if (season.endDate) {
        data.endDate = new Date(season.endDate);
      }
      const create: SeasonCreateInput = {
        endDate: season.endDate ? new Date(season.endDate) : new Date(),
        startDate: season.startDate ? new Date(season.startDate) : new Date(),
      };
      if (season.visitorFee) {
        data.visitorFee = season.visitorFee;
        create.visitorFee = season.visitorFee;
      }
      const where = {
        id: season.id,
      }
      return ctx.prisma.upsertSeason({
        where,
        create,
        update: data,
      })
    } catch (e) {
      throw new AuthenticationError('You must be logged in to do this');
    }
  },

}
