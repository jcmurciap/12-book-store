
import { types } from "../types/types";

export const bookStoreAddBook = (event) => ({
    type: types.bookStoreAddBook,
    payload: event,
});