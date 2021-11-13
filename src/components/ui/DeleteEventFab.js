import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { eventStartDelete } from '../../actions/bookStore';
import { useDispatch } from 'react-redux';

export const DeleteEventFab = () => {
    
    const dispatch = useDispatch()
    
    const onHandleDelete = (event) => {
        dispatch(eventStartDelete());
    };    
    
    return (
        <>
            <Fab 
                aria-label="delete"
                sx={{position:"absolute", bottom: 80, right: 50, backgroundColor: "red", color: "white"}}
                onClick={onHandleDelete}
            >
                <DeleteOutlineOutlinedIcon />
            </Fab>  
        </>
    );
};
