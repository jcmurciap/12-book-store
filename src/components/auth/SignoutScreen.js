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
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';

export const SignoutScreen = () => {
    
    const dispatch = useDispatch();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: "",
        rEmail: "",
        rPassword: "",
        rPassword2: "",
    });
    const { rName,rEmail,rPassword,rPassword2 } = formRegisterValues;  
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if( rPassword === rPassword2 ){
            dispatch(startRegister(rName, rEmail,rPassword));
        } else {
            console.log('Password needs to be equal'); //TODO mejorar con un componente de feedback
        };
    };

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
                        <TextField 
                            fullWidth 
                            required 
                            id="outlined-required" 
                            label="Username"
                            name="rName"
                            value={rName}
                            onChange={handleRegisterInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth 
                            required 
                            id="outlined-required" 
                            label="Email"
                            name="rEmail"
                            value={rEmail}
                            onChange={handleRegisterInputChange}
                        />
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
                        <TextField 
                        fullWidth 
                        required 
                        id="outlined-password-input" 
                        label="Password" 
                        type="password"
                        name="rPassword"
                        value={rPassword}
                        onChange={handleRegisterInputChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        fullWidth 
                        required 
                        id="outlined-password-input" 
                        label="Confirm Password" 
                        type="password"
                        name="rPassword2"
                        value={rPassword2}
                        onChange={handleRegisterInputChange}
                    />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 1 }}>
                        <Button
                            fullWidth 
                            onClick={handleSubmit}
                            variant="contained" 
                        >
                            Continue
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ color: "green" }}><Divider/></Grid>
                </Grid>
            </Div>
        </Container>
    );
};
