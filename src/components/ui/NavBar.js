import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';

export const NavBar = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenuMob = Boolean(anchorEl);
    const handleCloseMenuMob = () => {
        setAnchorEl(null);    
    };
    const handleClickMob = (event) => {
        setAnchorEl(event.currentTarget);
    }; 

    const renderMenuMobile = (
        <Menu
            anchorEl={anchorEl}
            id="menu-mobile"
            MenuListProps={{'aria-labelledby': 'button-menu-mobile'}}
            onClose={handleCloseMenuMob}
            open={openMenuMob}
        >
            
            <MenuItem onClick={(event) => {event.view.window.location.href="http://localhost:3000/login"}}>
                <IconButton>
                    <LogoutOutlinedIcon />
                </IconButton>
                <p>Logout</p>
            </MenuItem>
        </Menu>
    ); 
    
    return (
        <>
            <AppBar sx={{ backgroundColor: "DarkGreen" }}>   
                <Toolbar sx={{justifyContent: "space-between"}}>
                    <IconButton href="/">
                        <Avatar 
                            alt="logo-navbar"
                            src="https://editorialsentir.com/wp-content/uploads/2020/05/LOGO-CASA-LIBRO.png"
                            sx={{ width: 50, height: 50}}
                        />
                    </IconButton>
                    <Stack direction="row"sx={{ display: { xs: "none", md: "flex" }}}>
                        <ButtonGroup variant="none" sx={{ marginRight: 10}}>
                            <Button color="inherit" sx={{ textTransform: "capitalize" }}>Checkouts</Button>
                            <Button color="inherit" sx={{ textTransform: "capitalize" }}>Users</Button>
                        </ButtonGroup>
                        <Button 
                            color="error"
                            startIcon={<LogoutOutlinedIcon />} 
                            sx={{backgroundColor: "white", textTransform: "capitalize"}}
                            variant="outlined" 
                        >
                            Logout
                        </Button>
                    </Stack>
                    <Stack sx={{ display: {xs:"flex", md:"none"} }}>
                        <IconButton 
                            aria-controls="menu-mobile"
                            aria-expanded={openMenuMob ? true : undefined}
                            aria-haspopup="true"
                            id="button-menu-mobile"
                            onClick={handleClickMob}
                        >
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
                {renderMenuMobile}
            </AppBar>
        </>
    );
};


