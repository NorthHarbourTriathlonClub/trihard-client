import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LogoutButton = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={() => logout()}
    >
      {isAuthenticated && isLoading ? 'Logging you out' : 'Logout'}
    </Button>
  );
};

export default LogoutButton;
