import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import comments from '../../mocks/comments.json';


export const loadCommentsForArticleId = createAsyncThunk(
  'comments/loadCommentsForArticleId',
  async (articleId) => {

    const articleComments = comments.filter((comment) => comment.articleId === articleId);
    return articleComments;
    //const response = await fetch(`api/articles/${articleId}/comment`);
    //const json = await response.json();
    //return json;
  }
);




export const postCommentForArticleId = createAsyncThunk(
  'comments/postCommentForArticleId',
  async ({articleId, comment}) => {
    const requestBody = JSON.stringify({comment});
    const response = await fetch(`api/articles/${articleId}/comments`, {
      method: 'POST',
      body: requestBody,
      })
    const json = await response.json()
    return json;

  }
);




export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    byArticleId: {},
    isLoadingComments: false, 
    createCommentIsPending: false,
    failedToLoadComments: false,
    failedToCreateComment: false,
  },
  extraReducers: (builder) => {
    builder
    .addCase(loadCommentsForArticleId.pending, (state) => {
      state.isLoadingComments = true;
      state.failedToLoadComments = false;
    })
    .addCase(loadCommentsForArticleId.rejected, (state) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = true;
    })
    .addCase(loadCommentsForArticleId.fulfilled, (state, action) => {
      state.isLoadingComments = false;
      state.failedToLoadComments = false;
      const {articleId, comments } = action.payload;
      state.byArticleId[articleId] = comments;
    })
    .addCase(postCommentForArticleId.pending, (state) => {
      state.createCommentIsPending = true;
      state.failedToCreateComment = false;
    })
    .addCase(postCommentForArticleId.rejected, (state) => {
        state.createCommentIsPending = false;
        state.failedToCreateComment = true;
      })
    .addCase(postCommentForArticleId.fulfilled, (state, action) => {
        state.createCommentIsPending = false;
        state.failedToCreateComment = false;
        const { articleId, comment } = action.payload;
        state.byArticleId[articleId].push(comment);
      });
  },
});

export const selectComments = (state) => state.comments.byArticleId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const createCommentIsPending = (state) => state.comments.createCommentIsPending;

export default commentsSlice.reducer;
