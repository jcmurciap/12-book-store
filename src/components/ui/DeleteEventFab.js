import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch } from 'react-redux';
import { eventDelete } from '../../actions/bookStore';

export const DeleteEventFab = () => {
    
    const dispatch = useDispatch()
    const onHandleDelete = () => {
        dispatch(eventDelete());
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
