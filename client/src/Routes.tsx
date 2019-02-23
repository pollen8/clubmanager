import './App.css';

import ApolloClient from 'apollo-boost';
import React, {
  Component,
  createContext,
} from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  Route,
  Router,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { App } from './App';
import auth, { Auth } from './Auth/Auth';
import Callback from './Callback/Callback';
import history from './history';
import { Home } from './Home';
import { theme } from './theme';

const Background = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.grey800};
  display: flex;
  flex-direction: column;
`;

// const auth = new Auth();

export const AuthContext = createContext<Auth>(auth);

const handleAuthentication = ({ location }: any) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

/*
request: (operation) => {
    operation.setContext((context) => ({
      headers: {
        ...context.headers,
        authorization: auth.getIdToken(),
      },
    }));
  },
  */
const client = new ApolloClient({
  request: async (operation) => {
    operation.setContext((context: any) => ({
      headers: {
        ...context.headers,
        authorization: auth.getIdToken(),
      },
    }));
    return undefined;
  },
  uri: 'http://localhost:4000',
});

class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <AuthContext.Provider value={auth}>

              <Background>
                <Route path="/" render={(props: any) => <App {...props} />} />
                <Route path="/home" render={(props: any) => <Home />} />
                <Route path="/callback" component={Callback} />
              </Background>
            </AuthContext.Provider>
          </ApolloProvider>
        </ThemeProvider>
      </Router >
    );
  }
}

export default Routes;
