import PostActionTypes from './post.types';


export const updatePostList = (postMap) => ({
    type: PostActionTypes.UPDATE_COLLECTIONS,
    payload: postMap
})

export const fetchPostListStart = () => ({
    type: PostActionTypes.FETCH_POST_LIST_START
});

export const fetchPostListSuccess = postList => ({
    type: PostActionTypes.FETCH_POST_LIST_SUCCESS,
    payload: postList
});

export const fetchPostListFailure = errorMessage => ({
    type: PostActionTypes.FETCH_POST_LIST_FAILURE,
    payload: errorMessage
});

export const fetchPostListStartAsync = () => {
    return dispatch => {
        dispatch(fetchPostListStart());
        fetch('http://52.14.153.7:8080/store/book/bookList')
        .then(response => {
            dispatch(fetchPostListSuccess(response.json()))
        }).catch(error => dispatch(fetchPostListFailure(error.message)))

    }
}