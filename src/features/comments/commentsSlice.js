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




export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;


