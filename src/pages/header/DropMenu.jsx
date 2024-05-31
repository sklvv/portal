import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import './header.scss'
import ThemeSwitch from "../../elements/ThemeSwitch/ThemeSwitch";
import {Divider, ListItemIcon, ListItemText} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Box from "@mui/material/Box";
import {useTheme} from "../../hook/useTheme";




export default function DropMenu({user, toggleTheme, handleLogout}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className='disp' >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className='name' style={{color: useTheme('text')}}>{user}</div>
                <div className='role' style={{color: useTheme('text')}}>Администратор</div>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button', sx: {
                        backgroundColor: useTheme('select'),
                        color: useTheme('text')
                    }}}
                sx={{ width: 320}}
            >
                <MenuItem ><ThemeSwitch toggleTheme={toggleTheme} handleClose={handleClose}/></MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                        <ListItemIcon><LogoutIcon fontSize="small" sx={{color: useTheme('text')}}/></ListItemIcon>
                        <ListItemText>Выход</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
}
