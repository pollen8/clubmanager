import './App.css';

import React, { Component } from 'react';
import {
  Route,
  Router,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { App } from './App';
import {
  Button,
  Container,
} from './app/components/Layout';
import Auth from './Auth/Auth';
import { Callback } from './Callback/Callback';
import history from './history';
import { Home } from './Home';
import { theme } from './theme';

const Background = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.grey800};
`;

const auth = new Auth();

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
          <Background>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
          </Background>
        </ThemeProvider >
      </Router>
    );
  }
}

export default Routes;
