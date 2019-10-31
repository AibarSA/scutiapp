import PostActionTypes from './post.types';

const INITIAL_STATE = {
    // isFetching: false,
    // errorMessage: undefined,
    posts: []
}

// const postReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case PostActionTypes.FETCH_POST_LIST_START:
//             return {
//                 ...state,
//                 isFetching: true
//             }
//         case PostActionTypes.FETCH_POST_LIST_SUCCESS:
//             return{
//                 ...state,
//                 isFetching: false,
//                 posts: action.payload
//             }
//         case PostActionTypes.FETCH_POST_LIST_FAILURE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 errorMessage: action.payload
//             }
//         default:
//             return state;

//     }
// }


const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                posts: action.payload
            }
        default:
            return state;

    }
}

export default postReducer;