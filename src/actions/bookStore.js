import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { logout } from "./auth";

export const eventStartAddBook = (event) => {
    
    return async(dispatch, getState) => {
        const { uid, name } = getState().auth; // last value returned by the store's reducer
        console.log(uid);
        console.log(name);
        try {
            const resp = await fetchWithToken('events', event, 'POST');
            const body = await resp.json();

            if(body.ok) {
                event.id = body.event.id
                event.user = {
                    _id: uid,
                    name: name
                }; 
                console.log(event);
                dispatch(eventAddBook(event));
            };
        } catch ( error ){ 
            console.log(error);
        };
    };
};

export const eventAddBook = (event) => ({
    type: types.eventAddBook,
    payload: event,
});

export const eventStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetchWithToken('events',{},'GET');
            const body = await resp.json();
            const events = body.event;
            dispatch(eventLoaded(events))
        } catch (error) {
            console.log(error);
        };
    };
};

const eventLoaded = (event) =>({
    type: types.eventLoaded,
    payload: event
})

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event.row,
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent,
});

export const eventStartUpdate = (event) => {
    return async(dispatch) => {
        try {
            const resp = await fetchWithToken(`events/${event.id}`,event,'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(eventUpdated(event));
            } else {
                console.log(`Error, ${body.msg}`);
            }
        } catch (error) {
            console.log(error);
        };
    };
}; 

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDelete = () => { 

    return async (dispatch, getState) => {
        
        const { id } = getState().book.activeEvent;
        
        try {
            const resp = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const body = resp.json();
            if (body.ok) {
                dispatch(eventDelete());
            };
        } catch (error) {
            console.log(error);
        };
    };
};

export const eventDelete = () => ({ type: types.eventDelete });

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(eventLogout());
        dispatch(logout());
    };
};

export const eventLogout = () => ({ type: types.eventLogout });