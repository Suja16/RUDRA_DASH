import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Graphic from './blue_bg'

const drawerWidth = 240

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}))
const GlobalStyles = styled('div')(({ theme }) => ({
  '*::-webkit-scrollbar': {
    width: '0.4em',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.background.default,
    outline: '1px solid slategrey',
  },
  overflow: 'hidden',  // Hide the scrollbar
}));

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
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function PersistentDrawerLeft() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <GlobalStyles>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background:'white'}}>
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
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '0 0 0 0', left: '0', display: 'flex', alignItems: 'center', paddingLeft: '0.75rem', pointerEvents: 'none' }}>
              <svg style={{ width: '1.25rem', height: '1.25rem', color: '#718096' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              style={{
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingRight: '0.75rem',
                paddingLeft: '2.5rem',
                borderRadius: '0.375rem',
                borderWidth: '1px',
                borderColor: '#D1D5DB',
                width: '100%',
                lineHeight: '1.25rem',
                color: '#000000',
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
              placeholder="Search..."
            />
          </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <img src="/icons/Ellipse 176.svg" alt="eng" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z" fill="#8A92A6"/>
                        <path opacity="0.4" d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z" fill="#8A92A6"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.4" d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z" fill="#8A92A6"/>
                        <path d="M21.4761 5.67351C20.6101 4.04151 18.9061 2.99951 17.0301 2.99951H7.05013C5.17413 2.99951 3.47013 4.04151 2.60413 5.67351C2.41013 6.03851 2.50213 6.49351 2.82513 6.75151L10.2501 12.6905C10.7701 13.1105 11.4001 13.3195 12.0301 13.3195C12.0341 13.3195 12.0371 13.3195 12.0401 13.3195C12.0431 13.3195 12.0471 13.3195 12.0501 13.3195C12.6801 13.3195 13.3101 13.1105 13.8301 12.6905L21.2551 6.75151C21.5781 6.49351 21.6701 6.03851 21.4761 5.67351Z" fill="#8A92A6"/>
                    </svg>
                    <img src="/icons/Bearedguy.png" alt="beared guy" />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" style={{ color: 'black', fontSize:'1rem' }}>
                    Austin Robertson
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Trainer Expert
                    </Typography>
                    </div>
                </div>
            </div>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', zIndex: 0 },
          ...(open && { display: 'block' }),
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/icons/nav_icon.png" alt="nav_icon" style={{ height: '1.25rem', width: '1.25rem' }} />
            <Typography variant="h5" style={{ marginLeft: '0.5rem' }}>
              Hope Ui
            </Typography>
            <IconButton onClick={handleDrawerClose} >
              <div style={{ backgroundColor: '#3b82f6', padding: '0.5rem', borderRadius: '9999px', marginLeft: '2.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.1875 9.20532L14.4375 9.20532" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.72485 13.7238L3.18735 9.20576L7.72485 4.68701" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemText primary="Home" style={{ color: '#6b7280' }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Menu Style" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Pages" style={{ color: '#6b7280' }} />
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
            <ListItemText primary="Elements" style={{ color: '#6b7280' }} />
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
      <Main open={open}>
        <Graphic/>
      </Main>
    </Box>
    </GlobalStyles>
  )
}