import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DropDownButton from './dropDownButton';

const homeButtonStyles = {
    textAlign: 'left',
    font: 'normal normal 600 18px/23px Source Sans Pro',
    letterSpacing: '0.9px',
    color: '#EECAFC',
    textTransform: 'uppercase',
    opacity: 1,
}

const buttonsStyles = {
    textAlign: 'left',
    font: 'normal normal 600 18px/23px Source Sans Pro',
    letterSpacing: '0.9px',
    color: '#C445F4',
    textTransform: 'uppercase',
    opacity: 1,
    ":hover": {
        background: 'rgba(235, 0, 255, 0.24) 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        color: '#FF00FF',
    },
}

export default function Menu() {

    return (
        <Stack direction="row" spacing={2}>
            <Button sx={homeButtonStyles}>Home</Button> 
            <Button sx={buttonsStyles}>New Collections</Button>
            <DropDownButton />
            <Button sx={buttonsStyles}>Contacts</Button>
        </Stack>
    );
}
