import { types } from "../types/types";

export const eventAddBook = (event) => ({
    type: types.eventAddBook,
    payload: event,
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event.row,
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent,
});

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDelete = () => ({
    type: types.eventDelete
});