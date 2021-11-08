import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DropDownButton from './dropDownButton';

import classes from './menu.module.css';

export default function Menu() {
    return (
        <Stack direction="row" spacing={2}>
            <Button className={classes['home-buttons']}>Home</Button> 
            <Button className={classes['buttons']}>New Collections</Button>
            <DropDownButton />
            <Button className={classes['buttons']}>Contacts</Button>
        </Stack>
    );
}
