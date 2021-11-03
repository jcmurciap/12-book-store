import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { DataGrid } from '@mui/x-data-grid';
import { ButtonBase } from './StocktakingPanel';

const columns = [
    {field: 'id', headerName: 'Id', width: 70},
    {field: 'idUser', headerName: 'User ID', width: 120},
    {field: 'idCard', headerName: 'Card ID', width: 140},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'lastName', headerName: 'Last Name', width: 150},
    {field: 'phoneNumber', headerName: 'Phone Number', width: 160},
];

const rows = [
    { id: "1", idUser:"123", idCard:"123456789", name:"Maria", lastName:"Pimentel", phoneNumber:"3108699062" },
];


export const UserScreen = () => {
    return (
        <Container>
            <Box sx={{ marginBottom: 2, marginTop: 5 }}>
                <ButtonBase variant="outlined" startIcon={<PersonAddIcon />}>Add User</ButtonBase>
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                hideFooterPagination
            />
        </Container>
    );
};
