import React, {
  FC,
  Fragment,
  useContext,
} from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './app/components/Header';
import { Container } from './app/components/Layout';
import { Dashboard } from './Dashboard';
import { Members } from './Members/Members';
import { Register } from './Register/Register';
import { AuthContext } from './Routes';

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
  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth;

  return (
    <Fragment>
      <Header />
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
