import { Auth0UserProfile } from 'auth0-js';
import {
  useEffect,
  useState,
} from 'react';

export const loadProfile = (auth: any): [Partial<Auth0UserProfile>] => {
  const [profile, setProfile] = useState<Partial<Auth0UserProfile>>({});
  useEffect(() => {

    const { userProfile, getProfile } = auth;
    if (!userProfile && auth.isAuthenticated()) {
      getProfile((err: any, profile: Auth0UserProfile) => {
        setProfile(profile);
      });
    } else {
      setProfile(userProfile);
    }
  }, [])


  return [profile];
}