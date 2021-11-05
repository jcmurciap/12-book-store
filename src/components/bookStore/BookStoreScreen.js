import React from 'react'
import { NavBar } from '../ui/NavBar';
import { StocktakingPanel } from '../ui/StocktakingPanel';
import { BookStoreModal } from './BookStoreModal';

export const BookStoreScreen = () => {
    return (
        <>
            <NavBar />
            <StocktakingPanel />
            <BookStoreModal />
        </>
    );
};
