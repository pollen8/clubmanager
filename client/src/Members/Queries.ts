import gql from 'graphql-tag';
import { MutationUpdaterFn } from 'react-apollo-hooks';

import { IMember } from './Members';

export const FILTER_MEMBERS = gql`
 query FilterMember($searchString: String) {
  filterMembers(searchString: $searchString) {
    id,
    name,
  }
}`;

export const DELETE_MEMBER = gql`
  mutation DeleteMember($id: ID!) {
    deleteMember(id: $id) {
      id,
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation upsertMember($id: ID!, $name: String!, $description: String) {
    upsertMember(member: {
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

export const update: MutationUpdaterFn = (cache, { data: { upsertMember } }) => {
  const c = cache.readQuery<{ filterMembers: IMember[] }>({ query: FILTER_MEMBERS, variables: { searchString: '' } });
  if (!c) {
    return;
  }
  const { filterMembers } = c;
  const i = filterMembers.findIndex((member) => member.id === upsertMember.id);
  const data = i === -1
    ? filterMembers.concat([upsertMember])
    : filterMembers.map((member) => member.id === upsertMember.id ? upsertMember : member);
  cache.writeQuery({
    query: FILTER_MEMBERS,
    data: { filterMembers: data },
  });
}

export const remove: MutationUpdaterFn = (cache, { data: { deletemember } }) => {
  const c = cache.readQuery<{ filterMembers: IMember[] }>({ query: FILTER_MEMBERS });
  if (!c) {
    return;
  }
  const { filterMembers } = c;
  const data = filterMembers.filter((member) => member.id !== deletemember.id);
  cache.writeQuery({
    query: FILTER_MEMBERS,
    data: { filterMembers: data },
  });
}