import React from 'react'
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ButtonGroup from '@mui/material/ButtonGroup';

export const NavBar = () => {
    
    const renderMenuMobile = (
        <Menu>
            <MenuItem>
                <IconButton>
                    <MenuBookOutlinedIcon />
                </IconButton>
                <p>Checkouts</p>
            </MenuItem>
            <MenuItem>
                <IconButton>
                    <PeopleAltOutlinedIcon />
                </IconButton>
                <p>Users</p>
            </MenuItem>
            <MenuItem>
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
                    <IconButton>
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
                            sx={{backgroundColor: "white", textTransform: "capitalize"}}
                            startIcon={<LogoutOutlinedIcon />} 
                            variant="outlined" 
                            color="error"
                        >
                            Logout
                        </Button>
                    </Stack>
                    <Stack sx={{ display: {xs:"flex", md:"none"} }}>
                        <IconButton>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
            {renderMenuMobile}
        </>
    );
};


