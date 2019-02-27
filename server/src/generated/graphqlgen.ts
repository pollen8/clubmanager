// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Club, User, Attendance, Member, Season } from "./prisma-client";
import { Context } from "../types";

export type MembershipType = "Member" | "Guest";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsFilterClubs {
    searchString?: string | null;
  }

  export interface ArgsFilterUsers {
    searchString?: string | null;
  }

  export interface ArgsFilterAttendance {
    clubNight: string;
  }

  export interface ArgsFilterMembers {
    searchString?: string | null;
  }

  export interface ArgsFilterSeasons {
    searchString?: string | null;
  }

  export type FilterClubsResolver = (
    parent: undefined,
    args: ArgsFilterClubs,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Club[] | Promise<Club[]>;

  export type FilterUsersResolver = (
    parent: undefined,
    args: ArgsFilterUsers,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export type FilterAttendanceResolver = (
    parent: undefined,
    args: ArgsFilterAttendance,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Attendance[] | Promise<Attendance[]>;

  export type FilterMembersResolver = (
    parent: undefined,
    args: ArgsFilterMembers,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Member[] | Promise<Member[]>;

  export type FilterSeasonsResolver = (
    parent: undefined,
    args: ArgsFilterSeasons,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Season[] | Promise<Season[]>;

  export interface Type {
    filterClubs: (
      parent: undefined,
      args: ArgsFilterClubs,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Club[] | Promise<Club[]>;

    filterUsers: (
      parent: undefined,
      args: ArgsFilterUsers,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;

    filterAttendance: (
      parent: undefined,
      args: ArgsFilterAttendance,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Attendance[] | Promise<Attendance[]>;

    filterMembers: (
      parent: undefined,
      args: ArgsFilterMembers,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Member[] | Promise<Member[]>;

    filterSeasons: (
      parent: undefined,
      args: ArgsFilterSeasons,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Season[] | Promise<Season[]>;
  }
}

export namespace ClubResolvers {
  export const defaultResolvers = {
    id: (parent: Club) => parent.id,
    name: (parent: Club) => parent.name,
    description: (parent: Club) =>
      parent.description === undefined ? null : parent.description
  };

  export type IdResolver = (
    parent: Club,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Club,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DescriptionResolver = (
    parent: Club,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: Club,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Club,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    description: (
      parent: Club,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    name: (parent: User) => (parent.name === undefined ? null : parent.name)
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ClubsResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Club[] | Promise<Club[]>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    clubs: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Club[] | Promise<Club[]>;
  }
}

export namespace AttendanceResolvers {
  export const defaultResolvers = {
    id: (parent: Attendance) => parent.id,
    attended: (parent: Attendance) =>
      parent.attended === undefined ? null : parent.attended,
    paid: (parent: Attendance) =>
      parent.paid === undefined ? null : parent.paid
  };

  export type IdResolver = (
    parent: Attendance,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AttendedResolver = (
    parent: Attendance,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | null | Promise<boolean | null>;

  export type ClubNightResolver = (
    parent: Attendance,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MemberResolver = (
    parent: Attendance,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Member[] | null | Promise<Member[] | null>;

  export type PaidResolver = (
    parent: Attendance,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => boolean | null | Promise<boolean | null>;

  export interface Type {
    id: (
      parent: Attendance,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    attended: (
      parent: Attendance,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | null | Promise<boolean | null>;

    clubNight: (
      parent: Attendance,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    member: (
      parent: Attendance,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Member[] | null | Promise<Member[] | null>;

    paid: (
      parent: Attendance,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => boolean | null | Promise<boolean | null>;
  }
}

export namespace MemberResolvers {
  export const defaultResolvers = {
    id: (parent: Member) => parent.id,
    name: (parent: Member) => parent.name,
    type: (parent: Member) => parent.type
  };

  export type IdResolver = (
    parent: Member,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Member,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TypeResolver = (
    parent: Member,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => MembershipType | Promise<MembershipType>;

  export type SeasonsResolver = (
    parent: Member,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Season[] | Promise<Season[]>;

  export interface Type {
    id: (
      parent: Member,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Member,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    type: (
      parent: Member,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => MembershipType | Promise<MembershipType>;

    seasons: (
      parent: Member,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Season[] | Promise<Season[]>;
  }
}

export namespace SeasonResolvers {
  export const defaultResolvers = {
    id: (parent: Season) => parent.id,
    startDate: (parent: Season) => parent.startDate,
    endDate: (parent: Season) => parent.endDate,
    visitorFee: (parent: Season) =>
      parent.visitorFee === undefined ? null : parent.visitorFee
  };

  export type IdResolver = (
    parent: Season,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StartDateResolver = (
    parent: Season,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EndDateResolver = (
    parent: Season,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type VisitorFeeResolver = (
    parent: Season,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export interface Type {
    id: (
      parent: Season,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    startDate: (
      parent: Season,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    endDate: (
      parent: Season,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    visitorFee: (
      parent: Season,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ClubUpdate {
    id: string;
    name?: string | null;
    description?: string | null;
  }
  export interface SeasonUpdate {
    id: string;
    startDate?: string | null;
    endDate?: string | null;
    visitorFee?: number | null;
  }

  export interface ArgsSignupUser {
    email: string;
    name?: string | null;
  }

  export interface ArgsDeleteClub {
    id: string;
  }

  export interface ArgsUpsertClub {
    club?: ClubUpdate | null;
  }

  export interface ArgsUpsertSeason {
    season?: SeasonUpdate | null;
  }

  export interface ArgsDeleteSeason {
    id: string;
  }

  export type SignupUserResolver = (
    parent: undefined,
    args: ArgsSignupUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type DeleteClubResolver = (
    parent: undefined,
    args: ArgsDeleteClub,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Club | null | Promise<Club | null>;

  export type UpsertClubResolver = (
    parent: undefined,
    args: ArgsUpsertClub,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Club | Promise<Club>;

  export type UpsertSeasonResolver = (
    parent: undefined,
    args: ArgsUpsertSeason,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Season | Promise<Season>;

  export type DeleteSeasonResolver = (
    parent: undefined,
    args: ArgsDeleteSeason,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Season | null | Promise<Season | null>;

  export interface Type {
    signupUser: (
      parent: undefined,
      args: ArgsSignupUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    deleteClub: (
      parent: undefined,
      args: ArgsDeleteClub,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Club | null | Promise<Club | null>;

    upsertClub: (
      parent: undefined,
      args: ArgsUpsertClub,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Club | Promise<Club>;

    upsertSeason: (
      parent: undefined,
      args: ArgsUpsertSeason,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Season | Promise<Season>;

    deleteSeason: (
      parent: undefined,
      args: ArgsDeleteSeason,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Season | null | Promise<Season | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Club: ClubResolvers.Type;
  User: UserResolvers.Type;
  Attendance: AttendanceResolvers.Type;
  Member: MemberResolvers.Type;
  Season: SeasonResolvers.Type;
  Mutation: MutationResolvers.Type;
}