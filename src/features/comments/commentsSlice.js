import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCommentsForArticleId = createAsyncThunk(
    'comments/loadCommentsForArticleId',
    async(articleId) => {
        const response = await fetch(`api/articles/${articleId}/comments`);
        const json = await response.json()
        return json;
    }
)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        byArticleId: {},
        isLoadingComments: false,
        failedToLoadComments: false,
    },
    extraReducers: {
        [loadCommentsForArticleId.pending]: (state, action) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [loadCommentsForArticleId.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
            const {articleId, comments} = action.payload;
            state.byArticleId[articleId] = comments;
        },
        [loadCommentsForArticleId.rejected]: (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        }
}});


export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;


