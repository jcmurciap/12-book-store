import React from 'react'
import { AddNewFab } from '../ui/AddNewFab';
import { NavBar } from '../ui/NavBar';
import { StocktakingPanel } from '../ui/StocktakingPanel';
import { BookStoreModal } from './BookStoreModal';

export const BookStoreScreen = () => {
    return (
        <div>
            <NavBar />
            <StocktakingPanel />
            <BookStoreModal />
            <AddNewFab />
        </div>
    );
};
