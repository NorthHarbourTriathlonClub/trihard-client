import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginButton = () => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => loginWithRedirect()}
    >
      {!isAuthenticated && isLoading ? 'Logging you in...' : 'Login or sign up'}
    </Button>
  );
};

export default LoginButton;
