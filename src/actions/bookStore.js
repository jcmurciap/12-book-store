
import { types } from "../types/types";
import { fetchWithoutToken } from "../helpers/fetch";

export const eventAddBook = (event) => ({
    type: types.eventAddBook,
    payload: event,
});

export const eventStartLoading = ()  => {
    return async(dispatch) => {
        try {
            const resp = await fetchWithoutToken('events');
            const body = await resp.json();
            const events = body.events;

            // persisten los datos al refrescar el navegador
            dispatch(eventLoaded(events))
        } catch (error) {
            console.log(error);
            
        };
    };    
};

export const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event.row,
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent,
});

export const eventDelete = () => ({
    type: types.eventDelete
}); 

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
})