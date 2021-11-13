
import { types } from '../types/types'

export const initState = {
    events: [],
    activeEvent: null,
};

export const bookStoreReducer = (state=initState, action) => {
    switch (action.type) {
        case (types.eventAddBook):
            return {
                ...state,
                events: [...state.events, action.payload]
            };    
        case (types.eventSetActive):
            return {
                ...state,
                activeEvent: action.payload
            };
        case (types.eventClearActiveEvent):
            return {
                ...state,
                activeEvent: null,
            };
        case(types.eventLoaded):
            return {
                ...state,
                events: [...action.payload],
            };
        case(types.eventDelete):
            return {
                ...state,
                //activeEvent: null,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
            };
        case (types.eventUpdated):
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        default:
            return initState
    };
};
