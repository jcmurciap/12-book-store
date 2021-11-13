import React, { useEffect } from 'react';
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
import { eventClearActiveEvent, eventSetActive, eventStartLoading, eventStartUpdate } from '../../actions/bookStore';
import { DeleteEventFab } from '../ui/DeleteEventFab';

const columns = [
    { field:'id', headerName:'ID', width:210 },
    { field:'name', headerName:'Name', width:200 },
    { field:'author', headerName:'Author', width:80 },
    { field:'price', headerName:'Price', width:80 },
];

export const ButtonBase = styled(Button)({
    color: "DarkGreen",
    border: `${1}px solid DarkGreen`,
    textTransform: "capitalize",
});

export const BookStoreScreen = () => { 
    
    const dispatch = useDispatch();
    
    const onHandleOpenModal = () => {
        dispatch(uiOpenModal());
    };
    
    const { events, activeEvent } = useSelector( state => state.book );
    
    const onHandleSelectActive = (event) => {
        dispatch(eventSetActive(event));
    };

    // Oculta el boton de eliminar.
    const onSelectSlot = () => {
        dispatch(eventClearActiveEvent());
    };    
    
    const onHandleStartUpdate = (event) => {
        dispatch(uiOpenModal());
        dispatch(eventSetActive(event));
    };
    
    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch]);
    
    return (
        <>
            <NavBar />
            <Container sx={{ marginTop: 10 }}>
                <Box sx={{ marginBottom: 1 }}>
                    <ButtonBase 
                        startIcon={<CreateIcon />}
                        variant="outlined"
                        onClick={onHandleOpenModal} 
                    >
                        Add Book
                    </ButtonBase>
                </Box>
                <DataGrid
                    autoHeight
                    columns={columns}
                    hideFooterPagination
                    hideFooterSelectedRowCount
                    onCellDoubleClick={onHandleStartUpdate}
                    onRowClick={onHandleSelectActive}
                    rows={events}
                    onCellClick={onSelectSlot}
                />
            </Container>
            {(activeEvent ) && <DeleteEventFab />}
            <BookStoreModal />
        </>
    );
};
