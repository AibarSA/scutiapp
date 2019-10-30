import {createSelector} from 'reselect';

const selectPosts = state => state.posts;

export const selectPostList = createSelector(
    [selectPosts],
    posts => posts.posts
)

export const selectPostListFetching = createSelector(
    [selectPosts],
    posts => posts.isFetching
)