import React, {
  FC,
  Fragment,
  useContext,
} from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './app/components/Header';
import { Container } from './app/components/Layout';
import { Attendance } from './Attendance/Attendance';
import { Dashboard } from './Dashboard';
import { Members } from './Members/Members';
import { AuthContext } from './Routes';
import { userState } from './User/userState';

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
  const { roles } = userState();
  const { isAuthenticated } = auth;

  return (
    <Fragment>
      <Header />
      <Main>
        {
          isAuthenticated() &&
          <Container>
            <Route exact={true} path="/" component={Dashboard} />
            {
              roles.includes('Admin') &&
              <Fragment>
                <Route exact={true} path="/members" component={Members} />
                <Route exact={true} path="/attendance" component={Attendance} />
              </Fragment>
            }
          </Container>
        }
      </Main>
    </Fragment>
  );
}
