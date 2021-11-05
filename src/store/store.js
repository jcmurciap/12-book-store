import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from "../reducers/rootReducer";
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose; 

export const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    ),
);

