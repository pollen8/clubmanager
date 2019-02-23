import { Resolvers } from '../generated/graphqlgen';
import { Attendance } from './Attendance';
import { Club } from './Club';
import { Member } from './Member';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Season } from './Season';
import { User } from './User';

export const resolvers: Resolvers = {
  Attendance,
  Club,
  Query,
  Member,
  Mutation,
  Season,
  User,
}
