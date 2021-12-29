import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteSinglePost,
  editSinglePost,
  getSinglePost,
} from "../../utils/http";

const initialState = {
  post: {},
  loading: false,
  error: null,
  isDeleting: false,
};

export const fetchPost = createAsyncThunk("post/fetchPosts", async (id) => {
  const data = await getSinglePost(id);
  return data;
});

export const deletePost = createAsyncThunk("post/deletePost", async (id) => {
  await deleteSinglePost(id);
  return null;
});

export const editPost = createAsyncThunk("post/editPost", async (obj) => {
  await editSinglePost(obj.id, obj.body);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.post = {};
        state.isDeleting = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isDeleting = false;
      });
  },
});

// export const {} = postsSlice.actions;

export default postsSlice.reducer;
