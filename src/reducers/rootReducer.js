import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bookStoreReducer } from './bookStoreReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    book: bookStoreReducer,
    ui: uiReducer,
});
