import React from 'react';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
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

    const dispatch = useDispatch();
    
    const { modalOpen } = useSelector(state => state.ui);
    const closeModal = (event) => {
        event.preventDefault();
        dispatch(uiCloseModal());
    };

    let names,genre,author,language,year,ilustrator,isbn,price;
    
    const handleClick = () => {
        console.log('something');
    };
    const handleChange = (event) => {
        console.log(event.target.value);
    };   

    return (
            <Modal open={modalOpen}>
                <Box sx={style}>
                    <Fab 
                        aria-label="close" 
                        color="Red"
                        onClick={closeModal} 
                        size="small" 
                        sx={{ position: "absolute", marginLeft: 40, marginTop: -2 }}
                    >
                        <CloseOutlinedIcon />
                    </Fab>
                    <Grid container spacing={0.4}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="standard-basic" label="Name" variant="standard" value={names} onChange={handleChange} size="small"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="standard-basic" label="Author" variant="standard" value={author} onChange={handleChange} size="small"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="standard-basic" label="Price" variant="standard" value={price} onChange={handleChange} size="small"/>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                            <Button color="success" variant="contained" onClick={handleClick}>
                                Apply changes
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
    );
};