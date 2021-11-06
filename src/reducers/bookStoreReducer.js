
import { types } from '../types/types'

export const initState = {
    events: [],
};

export const bookStoreReducer = (state=initState, action) => {
    switch (action.type) {
        case (types.bookStoreAddBook):
            return {
                ...state,
                events: [action.payload, ...state.events]
            };    
        default:
            return initState
    };
};
