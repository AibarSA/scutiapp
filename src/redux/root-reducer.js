import {combineReducers} from 'redux';

import postReducer from '../redux/post/post.reducer';

export default combineReducers({
    posts: postReducer
})