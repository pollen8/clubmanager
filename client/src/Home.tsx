import React, { FC } from 'react';

import { AuthContext } from './Routes';

export const Home: FC<{}> = () => {
  return (
    <AuthContext.Consumer>
      {
        ({ isAuthenticated, login }) =>
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
                    onClick={() => login()}
                  >
                    Log In
                </a>
                  {' '}to continue.
              </h4>
              )
            }
          </div>
      }
    </AuthContext.Consumer>
  );
}
