
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import * as React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export function Header(props: { heading: string }) {

    return(
        <>
          <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} href="/">
                        <HomeOutlinedIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { sm: 'block' } }}>
                       {props.heading}
                    </Typography>
                </Toolbar>
            </AppBar>
        
        </>
    )
}