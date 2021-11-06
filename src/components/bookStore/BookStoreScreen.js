import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';
import { DataGrid } from '@mui/x-data-grid';
import { uiOpenModal } from '../../actions/ui';
import { BookStoreModal } from './BookStoreModal';
import { NavBar } from '../ui/NavBar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'price', headerName: 'Price', width: 110 },
];

export const ButtonBase = styled(Button)({
    color: "DarkGreen",
    border: `${1}px solid DarkGreen`,
    textTransform: "capitalize",
});

export const BookStoreScreen = () => { 
    
    const dispatch = useDispatch();
    const handleOpenModal = () => {
        dispatch(uiOpenModal());
    };
    const { events } = useSelector( state => state.book );

    return (
        <>
            <NavBar />
            <Container sx={{ marginTop: 10 }}>
                <Box sx={{ marginBottom: 1 }}>
                    <ButtonBase 
                        startIcon={<CreateIcon />}
                        variant="outlined"
                        onClick={handleOpenModal} 
                    >
                        Add Book
                    </ButtonBase>
                </Box>
                <DataGrid
                    rows={events}
                    columns={columns}
                    hideFooterPagination
                    hideFooterSelectedRowCount
                    autoHeight
                />
            </Container>
            <BookStoreModal />
        </>
    );
};
