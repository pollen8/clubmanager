import { Auth0UserProfile } from 'auth0-js';
import {
  useEffect,
  useState,
} from 'react';

const blank: Auth0UserProfile = {
  clientID: '',
  created_at: '',
  identities: [],
  name: '',
  nickname: '',
  picture: '',
  sub: '',
  updated_at: '',
  user_id: '',
};

export const loadProfile = (auth: any): Auth0UserProfile => {
  const [profile, setProfile] = useState<Auth0UserProfile>(blank);
  useEffect(() => {
    const { userProfile, getProfile } = auth;
    if (!auth.isAuthenticated()) {
      return;
    }
    if (!userProfile) {
      getProfile((err: any, profile: Auth0UserProfile) => {
        if (profile) {
          setProfile(profile);
        }
      });
    } else {
      setProfile(userProfile);
    }
  }, [auth.isAuthenticated(), auth.userProfile])

  return profile;
}