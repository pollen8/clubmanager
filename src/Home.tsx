import React, {
  FC,
  useContext,
} from 'react';

import { AuthContext } from './Routes';

export const Home: FC<{}> = () => {
  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth;
  return (
    <div className="container">
      {
        isAuthenticated() && (
          <h4>
            You are logged in!
              </h4>
        )
      }
      {
        !isAuthenticated() && (
          <h4>
            You are not logged in! Please{' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={() => auth.login()}
            >
              Log In
                </a>
            {' '}to continue.
              </h4>
        )
      }
    </div>
  );
}
