import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from 'pages/Dashboard';
import 'tailwindcss/tailwind.css';
import { ApolloProvider, ApolloClient, HttpLink } from '@apollo/client';
import * as dotenv from 'dotenv';
import Login from 'pages/auth/Login';
import { Cache } from './graphql/Cache';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Sessions from 'pages/Sessions';
import Payments from 'pages/Payments';
import Profile from 'pages/auth/Profile';
import Auth0ProviderWithHistory from 'components/auth/Auth0Provider';
import PageContainer from 'pages/PageContainer';
import { IRoute } from 'dto/Routes.dto';
dotenv.config({ path: __dirname + '.env' });

const routes: IRoute[] = [
  { path: '/dashboard', component: <Dashboard /> },
  { path: '/profile', component: <Profile /> },
  { path: '/payments', component: <Payments /> },
  { path: '/sessions', component: <Sessions /> },
];

const App: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string>('');
  const { getAccessTokenSilently, loginWithRedirect, isAuthenticated } =
    useAuth0();
  const history = useHistory();

  const getAccessToken = useCallback(async () => {
    try {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    } catch (err) {
      loginWithRedirect();
    }
  }, [getAccessTokenSilently, loginWithRedirect]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  if (!isAuthenticated) {
    history.push('/login');
  } else {
    history.push('/dashboard');
  }

  console.log(`isAuthenticated: ${isAuthenticated}`);
  const client = new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
    cache: Cache,
  });
  return (
    <Auth0ProviderWithHistory>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => {
                return <Redirect to="/login" />;
              }}
            />
            <Route exact path={'/login'}>
              <Login />
            </Route>
            {routes.map((r) => {
              return (
                <Route exact path={r.path}>
                  <PageContainer page={r.component} />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </ApolloProvider>
    </Auth0ProviderWithHistory>
  );
};

export default App;
