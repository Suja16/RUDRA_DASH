import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='bg-white'>
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search..." />
            </div>


        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <>
        <div className="flex items-center mr-10">
            <img src="/icons/nav_icon.png" alt="nav_icon" className="h-5 w-5" />
            <Typography variant="h5" className="ml-2">Hope Ui</Typography>
        </div>
        </>
          <IconButton onClick={handleDrawerClose}>
            <div className="bg-blue-500 p-2 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.1875 9.20532L14.4375 9.20532" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.72485 13.7238L3.18735 9.20576L7.72485 4.68701" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
          </IconButton>
          
        </DrawerHeader>
        
        <Divider />
        <Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar position="fixed" open={open} className='bg-white'>
    <Toolbar>
      <IconButton
        color="primary"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search..."
        />
      </div>
    </Toolbar>
  </AppBar>
  <Drawer
    sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    <DrawerHeader>
      <div className="flex items-center  ">
        <img src="/icons/nav_icon.png" alt="nav_icon" className="h-5 w-5" />
        <Typography variant="h5" className="ml-2">
          Hope Ui
        </Typography>
        <IconButton onClick={handleDrawerClose} >
            <div className="bg-blue-500 p-2 rounded-full ml-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" >
                <path d="M3.1875 9.20532L14.4375 9.20532" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.72485 13.7238L3.18735 9.20576L7.72485 4.68701" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </IconButton>
      </div>
    </DrawerHeader>
    <Divider />
    <List>
      <ListItemButton>
        <ListItemText primary="Home" className="text-gray-500" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Menu Style" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Pages" className="text-gray-500" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Example" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Widgets" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Maps" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Authentication" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Error 404" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Error 505" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Maintenance" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Elements" className="text-gray-500" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Components" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Form" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Table" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Icons" />
      </ListItemButton>
    </List>
  </Drawer>
</Box>

      </Drawer>
    </Box>
  );
}
