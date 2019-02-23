// import Parse from 'parse';
// import {
//   useEffect,
//   useState,
// } from 'react';

// import { ISearch } from './components/Filter';

export type IMembershipType = '' | 'member' | 'guest';
export interface IMember {
  createdAt?: Date;
  id: string;
  name: string;
  membership: IMembershipType;
  updatedAt?: Date;
  season: any;
}

// const MemberConnection = Parse.Object.extend('Member');

// const sortByName = (a: IMember, b: IMember) => a.name > b.name
//   ? 1
//   : a.name < b.name
//     ? -1 : 0;

// export const memberState = (search: ISearch) => {
//   const [members, setMembers] = useState<IMember[]>([]);

//   useEffect(() => {
//     (async () => {
//       const query = new Parse.Query(MemberConnection);
//       if (search.name !== '') {
//         query.matches('name', new RegExp(search.name), 'i');
//       }
//       console.log('search.membership', search.membership);
//       if (search.membership !== '') {
//         query.contains('membership', search.membership);
//       }
//       if (search.season !== '') {
//         console.log('season', search.season.id);
//         query.equalTo('seasonPointer', { '__type': 'Pointer', 'className': '_User', 'objectId': search.season.id });
//         // @ts-ignore
//         // query.containedBy('season', search.season);
//       }
//       query.include('season');
//       const results = await query.find();
//       setMembers(results.map((result: any): IMember => {
//         console.log('result', result, result.get('season'));
//         return {
//           createdAt: result.createdAt,
//           name: result.get('name'),
//           membership: result.get('membership'),
//           id: result.id,
//           updatedAt: result.updatedAt,
//           season: result.get('season').query().find(),
//         }
//       }));
//     })()
//   }, [search]);


//   return {
//     members,
//     addMember: async (member: IMember) => {
//       try {
//         const memberConnection = new MemberConnection();
//         const newMember = await memberConnection.save(member);
//         member.id = newMember.id;
//         setMembers([...members, member].sort(sortByName));
//       } catch (error) {
//         alert('Failed to create new object, with error code: ' + error.message);
//       }
//     },
//     deleteMember: async (id: string) => {
//       try {
//         const query = new Parse.Query(MemberConnection);
//         const member = await query.get(id);
//         member.destroy();
//         const newMembers = members
//           .filter((member) => member.id !== id);
//         setMembers(newMembers);
//       } catch (error) {
//         alert('Failed to delete: ' + error.message);
//       }
//     },
//     editMember: async (member: IMember) => {
//       try {
//         const memberConnection = new MemberConnection();
//         const updated = await memberConnection.save(member);
//         // @TODO insert updated into members
//         setMembers([...members].sort(sortByName));
//       } catch (error) {
//         alert('Failed to create new object, with error code: ' + error.message);
//       }

//     },
//   };
// };