import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './app/components/Header';
import { Container } from './app/components/Layout';
import { Attendance } from './Attendance/Attendance';
import { Club } from './Club/Club';
import { Dashboard } from './Dashboard';
import { Members } from './Members/Members';
import { AuthContext } from './Routes';
import { Season } from './Season/Season';
import { User } from './User/User';

const Main = styled.section`
  margin-top: 0.1rem;
  padding-top: 1rem;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.grey200};
  background-color: ${({ theme }) => theme.grey100};
`;

interface IProps {
  history: any;
}

export const App: FC<IProps> = () => {
  // @TODO
  const roles = ['Admin'];

  return (
    <AuthContext.Consumer>
      {
        ({ isAuthenticated }) =>
          <>
            <Header />
            <Main>
              {
                isAuthenticated() &&
                <Container>
                  <Route exact={true} path="/" component={Dashboard} />
                  {
                    roles.includes('Admin') &&
                    <>
                      <Route exact={true} path="/clubs" component={Club} />
                      <Route exact={true} path="/members" component={Members} />
                      <Route exact={true} path="/attendance" component={Attendance} />
                      <Route exact={true} path="/users" component={User} />
                    </>
                  }
                  <Route exact={true} path="/seasons" component={Season} />
                </Container>
              }
            </Main>
          </>
      }
    </AuthContext.Consumer>
  );
}
