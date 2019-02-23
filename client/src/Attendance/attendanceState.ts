// import Parse from 'parse';
// import {
//   useEffect,
//   useState,
// } from 'react';
import { IMember } from '../Members/memberState';

export interface IClubNight {
  createdAt?: Date;
  id: string;
}
export interface IAttendance {
  attended: boolean;
  createdAt?: Date;
  id?: string;
  clubNight: Date;
  member: IMember;
  paid: boolean;
  updatedAt?: Date;
}

// const AttendanceConnection = Parse.Object.extend('Attendance');

// const today = new Date();
// today.setHours(0);
// today.setMinutes(0);
// today.setSeconds(0);
// today.setMilliseconds(0);

// const attendanceQuery = new Parse.Query(AttendanceConnection);

// const toObject = (parseObject: any): IAttendance => {
//   return {
//     attended: parseObject.get('attended'),
//     createdAt: parseObject.createdAt,
//     clubNight: parseObject.get('clubNight'),
//     member: parseObject.get('member'),
//     paid: parseObject.get('paid'),
//     id: parseObject.id,
//     updatedAt: parseObject.updatedAt,
//   }
// };

// export const attendanceState = (members: IMember[]) => {
//   const [attendance, setAttendance] = useState<IAttendance[]>([]);

//   useEffect(() => {
//     (async () => {
//       attendanceQuery.equalTo('clubNight', today);
//       const results = await attendanceQuery.find();
//       setAttendance(results.map(toObject));
//       if (results.length === 0) {
//         members.forEach(async (member) => {
//           try {
//             const attendanceRecord = new AttendanceConnection();
//             const res = await attendanceRecord.save({
//               attended: false,
//               clubNight: today,
//               member,
//               paid: false,
//             });
//             setAttendance([...attendance, toObject(res)]);
//           } catch (e) {
//             console.log('failed to save attendance', member, e);
//           }
//         });
//       }
//     })()
//   }, [members]);


//   return {
//     attendance,
//     editAttendance: async (row: IAttendance) => {
//       try {
//         const attendanceQuery = new Parse.Query(AttendanceConnection);
//         attendanceQuery.equalTo('objectId', row.id);
//         const record = await attendanceQuery.first();
//         if (!record) {
//           return;
//         }
//         const updated = await record.save(row);
//         const index = attendance.findIndex((a) => a.id === updated.id);
//         setAttendance([
//           ...attendance.slice(0, index),
//           toObject(updated),
//           ...attendance.slice(index + 1),
//         ]);
//       } catch (error) {
//         alert('Failed to create new object, with error code: ' + error.message);
//       }

//     },
//   };
// };