import React from 'react';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    padding: 4,
    boxShadow: 10,
    border: "1px solid #000",
};

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "justify",
    marginLeft: theme.spacing(5),
}));

export const BookStoreModal = () => {
    return (
            <Modal>
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Name:</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value='La metamorfosis' variant="standard" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Genre</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="Terror"variant="standard" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Author</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="Franks Kafka"variant="standard"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Language</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="Spanish"variant="standard"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Format</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="PDF"variant="standard"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Year</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="1993"variant="standard"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Ilustrator</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="Planeta"variant="standard"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">ISBN</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="234567896"variant="standard" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={4}><Item variant="none">Price</Item></Grid>
                            <Grid item xs={8}>
                                <TextField id="standard-basic" value="45.000"variant="standard" />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                color="success" 
                                variant="contained"
                            >
                                Apply changes
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
    );
};