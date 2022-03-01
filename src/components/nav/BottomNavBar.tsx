import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PoolIcon from '@mui/icons-material/Pool';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
      <BottomNavigationAction
        label="Sessions"
        value="Sessions"
        icon={<PoolIcon />}
      />
      <BottomNavigationAction
        label="Payments"
        value="Payments"
        icon={<PaidIcon />}
      />
      <BottomNavigationAction
        label="Dashboard"
        value="Dashboard"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Members"
        value="Members"
        icon={<PeopleAltIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="Profile"
        icon={<AccountCircleIcon />}
      />
    </BottomNavigation>
  );
}
