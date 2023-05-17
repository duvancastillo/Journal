import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JurnarlLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <NavBar drawerWidth={drawerWidth} />
      {/* sidebar drawerWidth */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
