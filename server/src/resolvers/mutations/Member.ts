import { MutationResolvers } from '../../generated/graphqlgen';
import {
  MemberCreateInput,
  MemberUpdateInput,
} from '../../generated/prisma-client';

export const memberResolvers: Pick<MutationResolvers.Type, 'deleteMember' | 'upsertMember'> = {
  deleteMember: (parent, { id }, ctx) => {
    return ctx.prisma.deleteMember({ id });
  },
  upsertMember: (parent, { member }, ctx) => {
    const create: MemberCreateInput = {
      name: String(member.name),
      // seasons: member.seasons,
      type: member.type,
    };
    const update: MemberUpdateInput = {
      name: String(member.name),
      // seasons: member.seasons,
      type: member.type,
    }
    const where = {
      id: member.id,
    }
    return ctx.prisma.upsertMember({
      where,
      create,
      update,
    });
  },
}