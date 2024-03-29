import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';


const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistore = persistStore(store);

export default {store, persistore};