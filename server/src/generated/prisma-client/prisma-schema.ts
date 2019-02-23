export const typeDefs = /* GraphQL */ `type AggregateAttendance {
  count: Int!
}

type AggregateClub {
  count: Int!
}

type AggregateMember {
  count: Int!
}

type AggregateSeason {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Attendance {
  id: ID!
  attended: Boolean
  clubNight: DateTime
  member(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member!]
  paid: Boolean
}

type AttendanceConnection {
  pageInfo: PageInfo!
  edges: [AttendanceEdge]!
  aggregate: AggregateAttendance!
}

input AttendanceCreateInput {
  attended: Boolean
  clubNight: DateTime
  member: MemberCreateManyInput
  paid: Boolean
}

type AttendanceEdge {
  node: Attendance!
  cursor: String!
}

enum AttendanceOrderByInput {
  id_ASC
  id_DESC
  attended_ASC
  attended_DESC
  clubNight_ASC
  clubNight_DESC
  paid_ASC
  paid_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AttendancePreviousValues {
  id: ID!
  attended: Boolean
  clubNight: DateTime
  paid: Boolean
}

type AttendanceSubscriptionPayload {
  mutation: MutationType!
  node: Attendance
  updatedFields: [String!]
  previousValues: AttendancePreviousValues
}

input AttendanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttendanceWhereInput
  AND: [AttendanceSubscriptionWhereInput!]
  OR: [AttendanceSubscriptionWhereInput!]
  NOT: [AttendanceSubscriptionWhereInput!]
}

input AttendanceUpdateInput {
  attended: Boolean
  clubNight: DateTime
  member: MemberUpdateManyInput
  paid: Boolean
}

input AttendanceUpdateManyMutationInput {
  attended: Boolean
  clubNight: DateTime
  paid: Boolean
}

input AttendanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  attended: Boolean
  attended_not: Boolean
  clubNight: DateTime
  clubNight_not: DateTime
  clubNight_in: [DateTime!]
  clubNight_not_in: [DateTime!]
  clubNight_lt: DateTime
  clubNight_lte: DateTime
  clubNight_gt: DateTime
  clubNight_gte: DateTime
  member_every: MemberWhereInput
  member_some: MemberWhereInput
  member_none: MemberWhereInput
  paid: Boolean
  paid_not: Boolean
  AND: [AttendanceWhereInput!]
  OR: [AttendanceWhereInput!]
  NOT: [AttendanceWhereInput!]
}

input AttendanceWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

type Club {
  id: ID!
  name: String!
  description: String
}

type ClubConnection {
  pageInfo: PageInfo!
  edges: [ClubEdge]!
  aggregate: AggregateClub!
}

input ClubCreateInput {
  name: String!
  description: String
}

input ClubCreateManyInput {
  create: [ClubCreateInput!]
  connect: [ClubWhereUniqueInput!]
}

type ClubEdge {
  node: Club!
  cursor: String!
}

enum ClubOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClubPreviousValues {
  id: ID!
  name: String!
  description: String
}

input ClubScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClubScalarWhereInput!]
  OR: [ClubScalarWhereInput!]
  NOT: [ClubScalarWhereInput!]
}

type ClubSubscriptionPayload {
  mutation: MutationType!
  node: Club
  updatedFields: [String!]
  previousValues: ClubPreviousValues
}

input ClubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClubWhereInput
  AND: [ClubSubscriptionWhereInput!]
  OR: [ClubSubscriptionWhereInput!]
  NOT: [ClubSubscriptionWhereInput!]
}

input ClubUpdateDataInput {
  name: String
  description: String
}

input ClubUpdateInput {
  name: String
  description: String
}

input ClubUpdateManyDataInput {
  name: String
  description: String
}

input ClubUpdateManyInput {
  create: [ClubCreateInput!]
  update: [ClubUpdateWithWhereUniqueNestedInput!]
  upsert: [ClubUpsertWithWhereUniqueNestedInput!]
  delete: [ClubWhereUniqueInput!]
  connect: [ClubWhereUniqueInput!]
  disconnect: [ClubWhereUniqueInput!]
  deleteMany: [ClubScalarWhereInput!]
  updateMany: [ClubUpdateManyWithWhereNestedInput!]
}

input ClubUpdateManyMutationInput {
  name: String
  description: String
}

input ClubUpdateManyWithWhereNestedInput {
  where: ClubScalarWhereInput!
  data: ClubUpdateManyDataInput!
}

input ClubUpdateWithWhereUniqueNestedInput {
  where: ClubWhereUniqueInput!
  data: ClubUpdateDataInput!
}

input ClubUpsertWithWhereUniqueNestedInput {
  where: ClubWhereUniqueInput!
  update: ClubUpdateDataInput!
  create: ClubCreateInput!
}

input ClubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClubWhereInput!]
  OR: [ClubWhereInput!]
  NOT: [ClubWhereInput!]
}

input ClubWhereUniqueInput {
  id: ID
  name: String
}

scalar DateTime

scalar Long

type Member {
  id: ID!
  name: String!
  type: MembershipType!
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season!]
}

type MemberConnection {
  pageInfo: PageInfo!
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  name: String!
  type: MembershipType!
  seasons: SeasonCreateManyInput
}

input MemberCreateManyInput {
  create: [MemberCreateInput!]
  connect: [MemberWhereUniqueInput!]
}

type MemberEdge {
  node: Member!
  cursor: String!
}

enum MemberOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MemberPreviousValues {
  id: ID!
  name: String!
  type: MembershipType!
}

input MemberScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: MembershipType
  type_not: MembershipType
  type_in: [MembershipType!]
  type_not_in: [MembershipType!]
  AND: [MemberScalarWhereInput!]
  OR: [MemberScalarWhereInput!]
  NOT: [MemberScalarWhereInput!]
}

enum MembershipType {
  Member
  Guest
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
  AND: [MemberSubscriptionWhereInput!]
  OR: [MemberSubscriptionWhereInput!]
  NOT: [MemberSubscriptionWhereInput!]
}

input MemberUpdateDataInput {
  name: String
  type: MembershipType
  seasons: SeasonUpdateManyInput
}

input MemberUpdateInput {
  name: String
  type: MembershipType
  seasons: SeasonUpdateManyInput
}

input MemberUpdateManyDataInput {
  name: String
  type: MembershipType
}

input MemberUpdateManyInput {
  create: [MemberCreateInput!]
  update: [MemberUpdateWithWhereUniqueNestedInput!]
  upsert: [MemberUpsertWithWhereUniqueNestedInput!]
  delete: [MemberWhereUniqueInput!]
  connect: [MemberWhereUniqueInput!]
  disconnect: [MemberWhereUniqueInput!]
  deleteMany: [MemberScalarWhereInput!]
  updateMany: [MemberUpdateManyWithWhereNestedInput!]
}

input MemberUpdateManyMutationInput {
  name: String
  type: MembershipType
}

input MemberUpdateManyWithWhereNestedInput {
  where: MemberScalarWhereInput!
  data: MemberUpdateManyDataInput!
}

input MemberUpdateWithWhereUniqueNestedInput {
  where: MemberWhereUniqueInput!
  data: MemberUpdateDataInput!
}

input MemberUpsertWithWhereUniqueNestedInput {
  where: MemberWhereUniqueInput!
  update: MemberUpdateDataInput!
  create: MemberCreateInput!
}

input MemberWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: MembershipType
  type_not: MembershipType
  type_in: [MembershipType!]
  type_not_in: [MembershipType!]
  seasons_every: SeasonWhereInput
  seasons_some: SeasonWhereInput
  seasons_none: SeasonWhereInput
  AND: [MemberWhereInput!]
  OR: [MemberWhereInput!]
  NOT: [MemberWhereInput!]
}

input MemberWhereUniqueInput {
  id: ID
}

type Mutation {
  createAttendance(data: AttendanceCreateInput!): Attendance!
  updateAttendance(data: AttendanceUpdateInput!, where: AttendanceWhereUniqueInput!): Attendance
  updateManyAttendances(data: AttendanceUpdateManyMutationInput!, where: AttendanceWhereInput): BatchPayload!
  upsertAttendance(where: AttendanceWhereUniqueInput!, create: AttendanceCreateInput!, update: AttendanceUpdateInput!): Attendance!
  deleteAttendance(where: AttendanceWhereUniqueInput!): Attendance
  deleteManyAttendances(where: AttendanceWhereInput): BatchPayload!
  createClub(data: ClubCreateInput!): Club!
  updateClub(data: ClubUpdateInput!, where: ClubWhereUniqueInput!): Club
  updateManyClubs(data: ClubUpdateManyMutationInput!, where: ClubWhereInput): BatchPayload!
  upsertClub(where: ClubWhereUniqueInput!, create: ClubCreateInput!, update: ClubUpdateInput!): Club!
  deleteClub(where: ClubWhereUniqueInput!): Club
  deleteManyClubs(where: ClubWhereInput): BatchPayload!
  createMember(data: MemberCreateInput!): Member!
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateManyMembers(data: MemberUpdateManyMutationInput!, where: MemberWhereInput): BatchPayload!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  createSeason(data: SeasonCreateInput!): Season!
  updateSeason(data: SeasonUpdateInput!, where: SeasonWhereUniqueInput!): Season
  updateManySeasons(data: SeasonUpdateManyMutationInput!, where: SeasonWhereInput): BatchPayload!
  upsertSeason(where: SeasonWhereUniqueInput!, create: SeasonCreateInput!, update: SeasonUpdateInput!): Season!
  deleteSeason(where: SeasonWhereUniqueInput!): Season
  deleteManySeasons(where: SeasonWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  attendance(where: AttendanceWhereUniqueInput!): Attendance
  attendances(where: AttendanceWhereInput, orderBy: AttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Attendance]!
  attendancesConnection(where: AttendanceWhereInput, orderBy: AttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AttendanceConnection!
  club(where: ClubWhereUniqueInput!): Club
  clubs(where: ClubWhereInput, orderBy: ClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Club]!
  clubsConnection(where: ClubWhereInput, orderBy: ClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClubConnection!
  member(where: MemberWhereUniqueInput!): Member
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  season(where: SeasonWhereUniqueInput!): Season
  seasons(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Season]!
  seasonsConnection(where: SeasonWhereInput, orderBy: SeasonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SeasonConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Season {
  id: ID!
  startDate: DateTime!
  endDate: DateTime!
  visitorFee: Int
}

type SeasonConnection {
  pageInfo: PageInfo!
  edges: [SeasonEdge]!
  aggregate: AggregateSeason!
}

input SeasonCreateInput {
  startDate: DateTime!
  endDate: DateTime!
  visitorFee: Int
}

input SeasonCreateManyInput {
  create: [SeasonCreateInput!]
  connect: [SeasonWhereUniqueInput!]
}

type SeasonEdge {
  node: Season!
  cursor: String!
}

enum SeasonOrderByInput {
  id_ASC
  id_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  visitorFee_ASC
  visitorFee_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SeasonPreviousValues {
  id: ID!
  startDate: DateTime!
  endDate: DateTime!
  visitorFee: Int
}

input SeasonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  visitorFee: Int
  visitorFee_not: Int
  visitorFee_in: [Int!]
  visitorFee_not_in: [Int!]
  visitorFee_lt: Int
  visitorFee_lte: Int
  visitorFee_gt: Int
  visitorFee_gte: Int
  AND: [SeasonScalarWhereInput!]
  OR: [SeasonScalarWhereInput!]
  NOT: [SeasonScalarWhereInput!]
}

type SeasonSubscriptionPayload {
  mutation: MutationType!
  node: Season
  updatedFields: [String!]
  previousValues: SeasonPreviousValues
}

input SeasonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SeasonWhereInput
  AND: [SeasonSubscriptionWhereInput!]
  OR: [SeasonSubscriptionWhereInput!]
  NOT: [SeasonSubscriptionWhereInput!]
}

input SeasonUpdateDataInput {
  startDate: DateTime
  endDate: DateTime
  visitorFee: Int
}

input SeasonUpdateInput {
  startDate: DateTime
  endDate: DateTime
  visitorFee: Int
}

input SeasonUpdateManyDataInput {
  startDate: DateTime
  endDate: DateTime
  visitorFee: Int
}

input SeasonUpdateManyInput {
  create: [SeasonCreateInput!]
  update: [SeasonUpdateWithWhereUniqueNestedInput!]
  upsert: [SeasonUpsertWithWhereUniqueNestedInput!]
  delete: [SeasonWhereUniqueInput!]
  connect: [SeasonWhereUniqueInput!]
  disconnect: [SeasonWhereUniqueInput!]
  deleteMany: [SeasonScalarWhereInput!]
  updateMany: [SeasonUpdateManyWithWhereNestedInput!]
}

input SeasonUpdateManyMutationInput {
  startDate: DateTime
  endDate: DateTime
  visitorFee: Int
}

input SeasonUpdateManyWithWhereNestedInput {
  where: SeasonScalarWhereInput!
  data: SeasonUpdateManyDataInput!
}

input SeasonUpdateWithWhereUniqueNestedInput {
  where: SeasonWhereUniqueInput!
  data: SeasonUpdateDataInput!
}

input SeasonUpsertWithWhereUniqueNestedInput {
  where: SeasonWhereUniqueInput!
  update: SeasonUpdateDataInput!
  create: SeasonCreateInput!
}

input SeasonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  visitorFee: Int
  visitorFee_not: Int
  visitorFee_in: [Int!]
  visitorFee_not_in: [Int!]
  visitorFee_lt: Int
  visitorFee_lte: Int
  visitorFee_gt: Int
  visitorFee_gte: Int
  AND: [SeasonWhereInput!]
  OR: [SeasonWhereInput!]
  NOT: [SeasonWhereInput!]
}

input SeasonWhereUniqueInput {
  id: ID
}

type Subscription {
  attendance(where: AttendanceSubscriptionWhereInput): AttendanceSubscriptionPayload
  club(where: ClubSubscriptionWhereInput): ClubSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  season(where: SeasonSubscriptionWhereInput): SeasonSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String
  clubs(where: ClubWhereInput, orderBy: ClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Club!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String
  clubs: ClubCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  clubs: ClubUpdateManyInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  clubs_every: ClubWhereInput
  clubs_some: ClubWhereInput
  clubs_none: ClubWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`