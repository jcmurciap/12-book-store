import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'

export const BookStoreApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};
