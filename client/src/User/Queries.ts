import gql from 'graphql-tag';
import { MutationUpdaterFn } from 'react-apollo-hooks';

import { IUser } from './User';

export const FILTER_USERS = gql`
{
  filterUsers(searchString: "") {
    id,
    email,
    name,
    clubs,
  }
}`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id,
    }
  }
`;

// @TODO upsert clubs
export const UPDATE_USER = gql`
  mutation UpsertUser($id: ID!, $name: String!, $email: String) {
    upsertUser(club: {
      id: $id, 
      email: $email
      name: $name
    }) {
      id,
      email,
      name,
    }
  }
`;

// export const update: MutationUpdaterFn = (cache, { data: { upsertClub } }) => {
//   const c = cache.readQuery<{ filterClubs: IUser[] }>({ query: FILTER_CLUBS });
//   if (!c) {
//     return;
//   }
//   const { filterClubs } = c;
//   const i = filterClubs.findIndex((club) => club.id === upsertClub.id);
//   const data = i === -1
//     ? filterClubs.concat([upsertClub])
//     : filterClubs.map((club) => club.id === upsertClub.id ? upsertClub : club);
//   cache.writeQuery({
//     query: FILTER_CLUBS,
//     data: { filterClubs: data },
//   });
// }

export const remove: MutationUpdaterFn = (cache, { data: { deleteUser } }) => {
  const c = cache.readQuery<{ filterUsers: IUser[] }>({ query: FILTER_USERS });
  if (!c) {
    return;
  }
  const { filterUsers } = c;
  const data = filterUsers.filter((user) => user.id !== deleteUser.id);
  cache.writeQuery({
    query: FILTER_USERS,
    data: { filterUsers: data },
  });
}