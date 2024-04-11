import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import PowerIcon from '@mui/icons-material/Power';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import BalanceIcon from '@mui/icons-material/Balance';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

  return (

    <Box sx={{ width: '100%', maxWidth:'sm', bgcolor: 'background.paper', flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
             
          <Typography variant="h6"noWrap component="div" sx={{ flexGrow: 1, display: {  sm: 'block' } }}>
          Converter App
          </Typography>
      </Toolbar>
      </AppBar>

      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton href={"/area-converter"}>
              <ListItemIcon> 
                 <ZoomOutMapIcon />
               </ListItemIcon>
              <ListItemText primary="Area-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/currency-converter"}>
                <ListItemIcon> 
                  <CurrencyExchangeIcon /> 
                </ListItemIcon>
              <ListItemText primary="Currency-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/energy-converter"}>
                <ListItemIcon> 
                  <ElectricBoltIcon /> 
                </ListItemIcon>
              <ListItemText primary="Energy-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/force-converter"}>
                <ListItemIcon> 
                   <ArrowCircleDownIcon/>
                </ListItemIcon> 
              <ListItemText primary="Force-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/mass-converter"}>
                <ListItemIcon> 
                  <BalanceIcon/>
                </ListItemIcon>
              <ListItemText primary="Mass-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/power-converter"}>
                <ListItemIcon> 
                  <PowerIcon /> 
                </ListItemIcon>
              <ListItemText primary="Power-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/speed-converter"}>
                <ListItemIcon> 
                  <SpeedIcon /> 
                </ListItemIcon>
              <ListItemText primary="Speed-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/temperature-converter"}>
                <ListItemIcon> 
                  <DeviceThermostatIcon /> 
                </ListItemIcon>
              <ListItemText primary="Temperature-Converter" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href={"/time-converter"}>
                <ListItemIcon> 
                  <AccessTimeIcon /> 
                </ListItemIcon>
              <ListItemText primary="Time-Converter" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>

  );
}
