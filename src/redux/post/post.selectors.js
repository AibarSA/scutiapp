import {createSelector} from 'reselect';

const selectPosts = state => state.posts;

export const selectPostList = createSelector(
    [selectPosts],
    // posts => posts ? posts.posts : null
    posts => (posts ? posts.posts : null)
)

export const selectPostListFetching = createSelector(
    [selectPosts],
    posts => posts.isFetching
)