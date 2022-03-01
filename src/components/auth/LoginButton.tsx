import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { secrets } from 'config/config.service';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() =>
        loginWithRedirect({
          redirectUri: `${secrets.REACT_APP_URL}dashboard`,
        })
      }
    >
      Login or sign up
    </Button>
  );
};

export default LoginButton;
