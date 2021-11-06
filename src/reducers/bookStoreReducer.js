
import { types } from '../types/types'

export const initState = {
    events: [{id: "1", name:"libro1" ,author:"author1", price: "10"}],
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
