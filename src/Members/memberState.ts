import Parse from 'parse';
import {
  useEffect,
  useState,
} from 'react';

export interface IMember {
  id: string;
  name: string;
}

const MemberConnection = Parse.Object.extend("Member");
const query = new Parse.Query(MemberConnection);

export const memberState = (initialValue: IMember[]) => {
  const [members, setMembers] = useState(initialValue);

  useEffect(() => {
    (async () => {
      const results = await query.find();
      setMembers(results.map((result: any): IMember => {
        return {
          name: result.get('name'),
          id: result.id,
        }
      }));
    })()
  }, []);


  return {
    members,
    addMember: async (member: IMember) => {
      try {
        const memberConnection = new MemberConnection();
        Object.keys(member)
          .filter((k) => k !== 'id')
          .forEach((k) => {
            memberConnection.set(k, member[k as keyof IMember]);
          });
        const newMember = await memberConnection.save();
        member.id = newMember.id;
        setMembers([...members, member].sort((a, b) => a.name > b.name
          ? 1
          : a.name < b.name
            ? -1 : 0
        ));
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
        Object.keys(member)
          .forEach((k) => memberConnection.set(k, member[k as keyof IMember]));
        await memberConnection.save();
        setMembers([...members].sort((a, b) => a.name > b.name
          ? 1
          : a.name < b.name
            ? -1 : 0
        ));
      } catch (error) {
        alert('Failed to create new object, with error code: ' + error.message);
      }

    },
  };
};