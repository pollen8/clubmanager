// import Parse, {
//   IParseUserRole,
//   Role,
//   User,
// } from 'parse';
// import {
//   useEffect,
//   useState,
// } from 'react';

// export const userRoles = async (userId: string): Promise<Role[]> => {
//   const query = new Parse.Query(Parse.Role);
//   query.equalTo('users', { '__type': 'Pointer', 'className': '_User', 'objectId': userId });
//   const r = await query.find();
//   return r;
// }

// const getUsersRoles = async (userIds: string[]): Promise<IParseUserRole[]> => {
//   const query = new Parse.Query(Parse.Role);
//   const r = await query.find();
//   const res = await Promise.all<any>(r.map(async (role: any): Promise<any> => {
//     const u = await role.getUsers().query().find();
//     return { name: role.getName(), role, users: u };
//   }));
//   return res;
// }

// const isCurrentUser = (userId: string): boolean => {
//   const currentUser = Parse.User.current();
//   const currentid = currentUser ? currentUser.id : '';
//   return currentid === userId;
// }

// interface IUserState {
//   roles: string[];
//   users: User[];
//   usersRoles: IParseUserRole[];
//   isCurrentUser: (userId: string) => boolean;
//   updateRole: any;
// }

export const f = {};
// export const userState = (): IUserState => {
//   const currentUser = Parse.User.current();
//   const userId = currentUser ? currentUser.id : '';
//   const [roles, setRoles] = useState<string[]>([]);
//   const [users, setUsers] = useState<User[]>([]);
//   const [usersRoles, setUsersRoles] = useState<IParseUserRole[]>([]);

//   useEffect(() => {
//     (async () => {
//       const users = await userRoles(userId);
//       setRoles(users.map((role: any) => role.getName()));
//     })()
//   }, [userId]);


//   useEffect(() => {
//     (async () => {
//       const query = new Parse.Query(Parse.User)
//       const users = await query.find();
//       const ids = users.map((user: any) => user.id);
//       const userRoles = await getUsersRoles(ids);
//       setUsersRoles(userRoles);
//       const usersWithRoles = users.map((user: any) => {
//         user.roles = userRoles
//           .filter((role) => role.users.map((u: any) => u.id).includes(user.id))
//         return user;
//       });
//       setUsers(usersWithRoles);
//     })()
//   }, []);


//   const updateRole = async (userId: string, role: IParseUserRole, active: boolean) => {
//     const user = users.find((u) => u.id === userId);
//     if (user) {
//       const userRelations = role.role.getUsers();
//       active
//         ? userRelations.add(user)
//         : userRelations.remove(user);
//       role.role.save();
//       const newUsers = users.map((u) => {
//         if (u.id === userId) {
//           active
//             ? u.roles.push(role)
//             : u.roles = u.roles.filter(((r) => r.name !== role.role.getName()));
//         }
//         return u;
//       });
//       setUsers(newUsers);
//     }
//   };

//   return {
//     isCurrentUser,
//     roles,
//     users,
//     usersRoles,
//     updateRole,
//   };
// };