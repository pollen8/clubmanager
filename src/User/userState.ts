import Parse from 'parse';
import {
  useEffect,
  useState,
} from 'react';

export const userRoles = async (userId: string): Promise<string[]> => {
  const query = new Parse.Query(Parse.Role)
  query.equalTo('users', { '__type': 'Pointer', 'className': '_User', 'objectId': userId });
  const r = await query.find();
  return r.map((role: any) => role.getName());
}


export const userState = () => {
  const userId = Parse.User.current().id;
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const results = await userRoles(userId);
      setRoles(results);
    })()
  }, [userId]);


  return {
    roles,
  };
};