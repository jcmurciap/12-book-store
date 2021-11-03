import React from 'react'
import Fab from '@mui/material/Fab';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const AddNewFab = () => {
    return (
        <>
            <Fab 
                aria-label="delete"
                sx={{position:"absolute", bottom: 80, right: 50, backgroundColor: "red", color: "white"}}
            >
                <DeleteOutlineOutlinedIcon />
            </Fab>  
        </>
    )
}
