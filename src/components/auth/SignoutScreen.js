import React from 'react'
import Container from '@mui/material/Container';
import { Div } from './LoginScreen';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export const SignoutScreen = () => {
    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
            <Div>
                <Stack direction="column" spacing={1} sx={{ marginBottom: 4 }}>
                    <Avatar   sx={{ width: 55, height: 55, marginX: "auto" }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography align="center" variant="h6">Sign Out</Typography>  
                    <Typography align="center" variant="h7">
                        Welcome to La casa del libro.
                    </Typography>  
                </Stack>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                        <TextField fullWidth required id="outlined-required" label="Username"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth required id="outlined-required" label="Email"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                            id="input-with-icon-textfield" 
                            label="Phone number"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIphoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth required id="outlined-password-input" label="Password" type="password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth required id="outlined-password-input" label="Confirm Password" type="password"/>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 1 }}><Button fullWidth variant="contained">Continue</Button></Grid>
                    <Grid item xs={12} sx={{ color: "green" }}><Divider/></Grid>
                </Grid>
            </Div>
        </Container>
    );
};
