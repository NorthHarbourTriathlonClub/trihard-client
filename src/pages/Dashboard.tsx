import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container } from '@mui/material';
import * as dotenv from 'dotenv';
import BottomNavBar from 'components/nav/BottomNavBar';
import AuthenticationButton from 'components/auth/AuthenticationButton';
dotenv.config({ path: __dirname + '/.env' });

const Dashboard: React.FC = () => {
  let token = '';
  const { user, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const a = await getAccessTokenSilently();
    token = a;
  };
  getToken();

  const copyToken = async () => {
    navigator.clipboard.writeText(`${token}`);
  };

  return (
    <>
      <Container maxWidth="lg">
        <h2>
          Welcome back, {user?.name} - {user?.email}
        </h2>
        <Button onClick={copyToken}>Copy Token</Button>
        <BottomNavBar />
        <AuthenticationButton />
      </Container>
    </>
  );
};

export default Dashboard;
