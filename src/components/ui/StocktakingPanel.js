import React from 'react'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 140 },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'author', headerName: 'Author', width: 130 },
    { field: 'language', headerName: 'Language', width: 110 },
    { field: 'format', headerName: 'Format', width: 110 },
    { field: 'yearRelease', headerName: 'Year', width: 130 },
    { field: 'ilustrator', headerName: 'Ilustrator', width: 110 },
    { field: 'ISBN', headerName: 'ISBN', width: 120 },
    { field: 'price', headerName: 'Price', width: 110 },
];

const rows = [
    {id: 1, name:"The Stranger", genre:"Philosophy", author:"Albert Camus", language: "Spanish", 
    format:"Hardcover", yearRelease:"March 13, 1989", ilustrator:"Vintage", ISBN:"n/a", price:12.50},
];

export const ButtonBase = styled(Button)({
    color: "DarkGreen",
    border: `${1}px solid DarkGreen`,
    textTransform: "capitalize",
});

export const StocktakingPanel = () => {
    return (
        <>  
            <Container sx={{ marginTop: 10 }}>
                <Box sx={{ marginBottom: 1 }}>
                    <ButtonBase variant="outlined" startIcon={<CreateIcon />}>Add Book</ButtonBase>
                </Box>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    hideFooterPagination
                />
            </Container>
        </>
    );
};
