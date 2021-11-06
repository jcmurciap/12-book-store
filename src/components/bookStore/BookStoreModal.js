import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { bookStoreAddBook } from '../../actions/bookStore';

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

const initEvent = {id: "", name: "", author: "", price: ""};

export const BookStoreModal = () => {

    const dispatch = useDispatch();
    
    const { modalOpen } = useSelector(state => state.ui);
    
    const closeModal = (event) => {
        event.preventDefault();
        dispatch(uiCloseModal());
    };
    
    const [formValues, setFormValues] = useState(initEvent);
    const {id, name, author, price} = formValues;
    
    const onHandleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    const onHandleSubmitForm = (event) => { 
        event.preventDefault();
        dispatch(bookStoreAddBook(formValues));
        dispatch(uiCloseModal());
        setFormValues(initEvent);
    };
    
    return (
            <Modal open={modalOpen}>
                <Box sx={style}>
                    <Fab 
                        aria-label="close" 
                        color="Red"
                        onClick={closeModal}    
                        size="small" 
                        sx={{position:"absolute", marginLeft:40, marginTop:-2}}
                    >
                        <CloseOutlinedIcon />
                    </Fab>
                    <Grid container spacing={0.4}>
                        <Grid item xs={12}>
                            <TextField fullWidth 
                                id="standard-basic" 
                                label="Id" 
                                name="id" 
                                onChange={onHandleChange} 
                                size="small"
                                value={id}
                                variant="standard" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth 
                                id="standard-basic" 
                                label="Name" 
                                name="name" 
                                onChange={onHandleChange} 
                                size="small"
                                value={name}
                                variant="standard" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth 
                                id="standard-basic" 
                                label="Author" 
                                name="author" 
                                onChange={onHandleChange} 
                                size="small"
                                value={author} 
                                variant="standard" 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth 
                                id="standard-basic" 
                                label="Price" 
                                name="price" 
                                onChange={onHandleChange} 
                                size="small"
                                value={price} 
                                variant="standard" 
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                            <Button 
                                color="success" 
                                onClick={onHandleSubmitForm}
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