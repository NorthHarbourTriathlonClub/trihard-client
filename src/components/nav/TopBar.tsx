import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi';

const TopBar: React.FC = () => {
  const history = useHistory();

  const numForwardSlashInUrl = 2;
  const goBack = () => {
    history.goBack();
  };

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: '#FFFFFF', color: '#000000', opacity: '1' }}
      >
        <Toolbar>
          {numForwardSlashInUrl > 1 ? (
            <IconButton
              onClick={goBack}
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FiArrowLeft />
            </IconButton>
          ) : (
            <></>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RenderedTitle
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
