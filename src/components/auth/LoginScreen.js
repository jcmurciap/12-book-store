import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { ButtonBase } from '../bookStore/BookStoreScreen';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';


export const Div = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        marginTop: theme.spacing(3),
    },
    maxWidth: "400px",
    marginTop: theme.spacing(5),
}));

export const LoginScreen = () => {
    
    const dispatch = useDispatch();
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: "jose@gmail.com",
        lPassword: "123456"
    });
       
    const { lEmail, lPassword } = formLoginValues;
    
    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    };    
    
    return (
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
            <Div>
                <Stack direction="column" spacing={1} sx={{ marginBottom: 4 }}>
                    <Avatar
                        alt="logo-app"
                        src="https://editorialsentir.com/wp-content/uploads/2020/05/LOGO-CASA-LIBRO.png"
                        sx={{ width: 100, height: 100, marginX: "auto"}}
                    />
                    <Typography align="center" variant="h6">Sign in</Typography>  
                    <Typography align="center" variant="h7">
                        Use your La casa del libro Account.
                    </Typography>  
                </Stack>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth 
                            id="outlined-required" 
                            label="Email"
                            name="lEmail"
                            onChange={handleLoginInputChange}
                            required 
                            value={lEmail}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            fullWidth 
                            id="outlined-password-input" 
                            label="Password" 
                            name="lPassword"
                            onChange={handleLoginInputChange}
                            required 
                            type="password"
                            value={lPassword}
                            
                        />
                    </Grid>
                    <Grid item xs={12}><Button variant="text" sx={{ textTransform: "capitalize", color: "DarkGreen" }}>Forgot password?</Button></Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" onClick={handleLogin} sx={{ backgroundColor: "DarkGreen" }}>
                            Continue
                        </Button>
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} sx={{ marginTop: 2  }}>
                    <Grid item xs={12}>
                        <ButtonBase fullWidth variant="outlined">
                            Create account
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12}><Divider>Or register with</Divider></Grid>
                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2} sx={{ display: "flex", justifyContent: "center" }}>
                            <IconButton><GoogleIcon /></IconButton>
                            <IconButton><GitHubIcon /></IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Div>
        </Container>
    );
};