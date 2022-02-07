import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from 'pages/Dashboard';
import 'tailwindcss/tailwind.css';
import { ApolloProvider, ApolloClient, HttpLink } from '@apollo/client';
import * as dotenv from 'dotenv';
import Login from 'pages/auth/Login';
import Forbidden from 'pages/auth/Forbidden';
import { Cache } from './graphql/Cache';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Sessions from 'pages/Sessions';
import Payments from 'pages/Payments';
import Loading from 'pages/Loading';
import Profile from 'pages/auth/Profile';
import { createBrowserHistory } from 'history';
import Auth0ProviderWithHistory from 'components/auth/Auth0Provider';
dotenv.config({ path: __dirname + '.env' });

export const history = createBrowserHistory();

const UnauthenticatedRoutes = () => (
  <Switch>
    <Route path="/" component={Login} />
    <Route exact path="/loading" component={Loading} />
    <Route exact path="/forbidden" component={Forbidden} />
  </Switch>
);

interface RouteProps {
  children: ReactNode;
  path: string;
}

const AuthenticatedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  console.table(user);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? { children } : <Redirect to="/" />)}
    ></Route>
  );
};

const AdminRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  const roles = ['sdk', 'sd'];
  const isAdmin = roles[0] === 'admin' ? true : false;
  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated && isAdmin ? { children } : <Redirect to="/" />
      }
    ></Route>
  );
};

const AppRoutes = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  } else {
    if (isAuthenticated) history.push('/dashboard');
  }
  return (
    <>
      <Switch>
        <AuthenticatedRoute path="/dashboard">
          <Dashboard />
        </AuthenticatedRoute>
        <AdminRoute path="/sessions">
          <Sessions />
        </AdminRoute>
        <AuthenticatedRoute path="/payments">
          <Payments />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/profile">
          <Profile />
        </AuthenticatedRoute>
        <UnauthenticatedRoutes />
      </Switch>
    </>
  );
};

const AppRoot = () => {
  const [accessToken, setAccessToken] = useState<string>('');
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();

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

  if (!accessToken) {
    return <Loading />;
  }

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
    <ApolloProvider client={client}>
      <Router>
        <AppRoutes />
      </Router>
    </ApolloProvider>
  );
};

export default function App() {
  return (
    <Auth0ProviderWithHistory>
      <AppRoot />
    </Auth0ProviderWithHistory>
  );
}
