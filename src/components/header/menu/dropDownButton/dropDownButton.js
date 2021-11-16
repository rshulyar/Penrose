import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

import classes from './dropDownButton.module.css';

const buttonStyles = {
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

const itemsStyles = {
    textAlign: 'left',
    font: 'normal normal 600 18px/48px Source Sans Pro',
    letterSpacing: '0px',
    color: 'rgba(19, 22, 196, 1)',
    opacity: 1,
}

export default function DropDownButton() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

  // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    sx={buttonStyles}
                >
                    <div className={classes['title']}>Store {open?'∧':'∨'}</div>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <a href='#' className={classes['link']}>
                                            <MenuItem onClick={handleClose} sx={itemsStyles}>Women</MenuItem>
                                        </a>
                                        <a href='#' className={classes['link']}>
                                            <MenuItem onClick={handleClose} sx={itemsStyles}>Man</MenuItem>
                                        </a>
                                        <a href='#' className={classes['link']}>
                                            <MenuItem onClick={handleClose} sx={itemsStyles}>Kids</MenuItem>
                                        </a>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
