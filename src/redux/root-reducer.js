import {combineReducers} from 'redux';

import postReducer from '../redux/post/post.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['posts']
}

const rootReducer = combineReducers({
    posts: postReducer
})

export default persistReducer(persistConfig, rootReducer);