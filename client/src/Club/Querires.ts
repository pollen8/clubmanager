import gql from 'graphql-tag';
import { MutationUpdaterFn } from 'react-apollo-hooks';

import { IClub } from './Club';

export const FILTER_CLUBS = gql`
 query FilterClub($searchString: String) {
  filterClubs(searchString: $searchString) {
    id,
    name,
    description,
  }
}`;

export const DELETE_CLUB = gql`
  mutation DeleteClub($id: ID!) {
    deleteClub(id: $id) {
      id,
    }
  }
`;

export const UPDATE_CLUB = gql`
  mutation UpsertClub($id: ID!, $name: String!, $description: String) {
    upsertClub(club: {
      id: $id, 
      name: $name
      description: $description
    }) {
      id,
      description,
      name,
    }
  }
`;

export const update: MutationUpdaterFn = (cache, { data: { upsertClub } }) => {
  const c = cache.readQuery<{ filterClubs: IClub[] }>({ query: FILTER_CLUBS, variables: { searchString: '' } });
  if (!c) {
    return;
  }
  const { filterClubs } = c;
  const i = filterClubs.findIndex((club) => club.id === upsertClub.id);
  const data = i === -1
    ? filterClubs.concat([upsertClub])
    : filterClubs.map((club) => club.id === upsertClub.id ? upsertClub : club);
  cache.writeQuery({
    query: FILTER_CLUBS,
    data: { filterClubs: data },
  });
}

export const remove: MutationUpdaterFn = (cache, { data: { deleteClub } }) => {
  const c = cache.readQuery<{ filterClubs: IClub[] }>({ query: FILTER_CLUBS });
  if (!c) {
    return;
  }
  const { filterClubs } = c;
  const data = filterClubs.filter((club) => club.id !== deleteClub.id);
  cache.writeQuery({
    query: FILTER_CLUBS,
    data: { filterClubs: data },
  });
}