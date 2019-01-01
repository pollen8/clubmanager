import Parse from 'parse';
import {
  useEffect,
  useState,
} from 'react';

export type IMembershipType = '' | 'member' | 'guest';
export interface IMember {
  createdAt?: Date;
  id: string;
  name: string;
  membership: IMembershipType;
  updatedAt?: Date;
}

const MemberConnection = Parse.Object.extend('Member');
const query = new Parse.Query(MemberConnection);
const sortByName = (a: IMember, b: IMember) => a.name > b.name
  ? 1
  : a.name < b.name
    ? -1 : 0;

export const memberState = (initialValue: IMember[]) => {
  const [members, setMembers] = useState(initialValue);

  useEffect(() => {
    (async () => {
      const results = await query.find();
      setMembers(results.map((result: any): IMember => {
        return {
          createdAt: result.createdAt,
          name: result.get('name'),
          membership: result.get('membership'),
          id: result.id,
          updatedAt: result.updatedAt,
        }
      }));
    })()
  }, []);


  return {
    members,
    addMember: async (member: IMember) => {
      try {
        const memberConnection = new MemberConnection();
        const newMember = await memberConnection.save(member);
        member.id = newMember.id;
        setMembers([...members, member].sort(sortByName));
      } catch (error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }
    },
    deleteMember: async (id: string) => {
      try {
        const member = await query.get(id);
        member.destroy();
        const newMembers = members
          .filter((member) => member.id !== id);
        setMembers(newMembers);
      } catch (error) {
        alert('Failed to delete: ' + error.message);
      }
    },
    editMember: async (member: IMember) => {
      try {
        const memberConnection = new MemberConnection();
        const updated = await memberConnection.save(member);
        // @TODO insert updated into members
        setMembers([...members].sort(sortByName));
      } catch (error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }

    },
  };
};