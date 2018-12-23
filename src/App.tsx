import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from './app/components/Layout';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { Members } from './Members/Members';
import { Register } from './Register/Register';

const Main = styled.section`
  margin-top: 0.1rem;
  padding-top: 1rem;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.grey200};
  background-color: ${({ theme }) => theme.grey100};
`;

interface IProps {
  auth: any;
  history: any;
}

export const App: React.SFC<IProps> = ({ auth }) => {
  const { isAuthenticated } = auth;

  return (
    <Fragment>
      <Header auth={auth} />
      <Main>
        {
          isAuthenticated() &&
          <Container>
            <Route exact={true} path="/" component={Dashboard} />
            <Route exact={true} path="/members" component={Members} />
            <Route exact={true} path="/register" component={Register} />
          </Container>
        }
      </Main>
    </Fragment>
  );
}
