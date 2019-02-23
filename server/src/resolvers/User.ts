import { UserResolvers } from '../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  clubs: ({ id }, args, ctx) => {
    return ctx.prisma.user({ id }).clubs()
  },
}
