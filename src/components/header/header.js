import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Menu from './menu';

import classes from './header.module.css';

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{background: 'inherit'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <div className={classes['title']}>penrose</div>
                    </Typography>
                    <Menu/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
