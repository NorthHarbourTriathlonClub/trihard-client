import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PoolIcon from '@mui/icons-material/Pool';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BottomNavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      sx={{ width: '100vw' }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Sessions"
        value="sessions"
        icon={<PoolIcon />}
      />
      <BottomNavigationAction
        label="Payments"
        value="payments"
        icon={<PaidIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
