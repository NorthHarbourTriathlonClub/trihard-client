import React from 'react';
import * as dotenv from 'dotenv';
import BottomNavBar from 'components/nav/BottomNavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme/theme';
import TopBar from 'components/nav/TopBar';
dotenv.config({ path: __dirname + '/.env' });

interface PageContainerProps {
  page?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ page }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '90vh' }}>
        <TopBar />
        {page}
        <BottomNavBar />
      </div>
    </ThemeProvider>
  );
};

export default PageContainer;
