
export const types = {
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',
    
    eventAddBook: '[bookStore] Add book',
    eventLoaded: '[bookStore] Event loaded',
    eventSetActive: '[bookStore] Set active event',
    eventClearActiveEvent: '[bookStore] Clear active event',
    eventDelete: '[bookStore] Event delete',
    eventUpdated: '[bookStore] Event updated',
    
    // Quit all events after logout
    eventLogout: '[bookStore] Event logout', // TODO
    authLogout: '[auth] Logout',
    authLogin: '[auth] Login',
    authRegister: '[auth] Register',
    authCheckingFinish: '[auth] Event checking finish',
};
