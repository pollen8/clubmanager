import './App.css';

import React, {
  Component,
  createContext,
} from 'react';
import {
  Route,
  Router,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { App } from './App';
import Auth from './Auth/Auth';
import { Callback } from './Callback/Callback';
import history from './history';
import { Home } from './Home';
import { theme } from './theme';

const Background = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.grey800};
  display: flex;
  flex-direction: column;
`;

const auth = new Auth();

export const AuthContext = createContext<any>(null);

const handleAuthentication = ({ location }: any) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AuthContext.Provider value={auth}>
            <Background>
              <Route path="/" render={(props) => <App {...props} />} />
              <Route path="/home" render={(props) => <Home />} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }} />
            </Background>
          </AuthContext.Provider>
        </ThemeProvider >
      </Router>
    );
  }
}

export default Routes;
