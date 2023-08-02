import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts, createPost, addComment } from './operations';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items];
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { idPost, idUser, date, commentText } = action.payload;
        const post = state.items.find((item) => item.id === idPost);
        post.comments = [...post.comments, { idUser, date, commentText }];
      });
  },
});

export const postReducer = postsSlice.reducer;
