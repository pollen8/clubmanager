import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,


  filterClubs: (parent, { searchString }, ctx) => {
    return ctx.prisma.clubs({
      where: {
        name_contains: searchString,
      }
    })
  },
  filterUsers: (parent, { searchString }, ctx) => {
    return ctx.prisma.users({
      where: {
        name_contains: searchString,
      }
    })
  },
  filterAttendance: (parent, { clubNight }, ctx) => {
    return ctx.prisma.attendances({
      where: {
        clubNight: new Date(clubNight),
      }
    })
  },
  filterMembers: (parent, { searchString }, ctx) => {
    return ctx.prisma.members({
      where: {
        name_contains: searchString,
      }
    })
  },
  filterSeasons: (parent, { searchString }, ctx) => {
    return ctx.prisma.seasons();
  },
}
