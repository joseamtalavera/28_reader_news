import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCommentsForArticleId = createAsyncThunk(
    'comments/loadCommentsForArticleId',
    async(articleId) => {
        const response = await fetch(`api/articles/${articleId}/comments`);
        const json = await response.json()
        return json;
    }
)

export const postCommentForArticleId = createAsyncThunk(
    'comment/postCommentsForArticleId',
    async(articleId) => {
        const requestBody = JSON.stringify(Comment);    
        const response = await fetch( `api/articles/${articleId}/comments`, {
            method:'POST',
            body: requestBody
        });
        const json = await response.json();
        return json;
    }

)

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        byArticleId: {},
        isLoadingComments: false,
        failedToLoadComments: false,
        createCommentIsPending: false,
        failedToCreateComment: false,
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
        },
        [postCommentForArticleId.pending]: (state, action) => {
            state.createCommentIsPending = true;
            state.failedToCreateComment = false;
        },
        [postCommentForArticleId.fulfilled]: (state, action) => {
            state.createCommentIsPending = false;
            state.failedToCreateComment = false;
            const {articleId, comment} = action.payload;
            state.byArticleId[articleId].push(comment);
        },
        [postCommentForArticleId.rejected]: (state, action) => {
            state.createCommentIsPending = false;
            state.failedToCreateComment = false;
        }
    }
});


export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;


