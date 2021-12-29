import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPost, getPosts } from "../../utils/http";

const initialState = {
  posts: [],
  loading: false,
  error: null,
  isAddingPost: false,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const data = await getPosts();
  return data;
});

export const addPost = createAsyncThunk("posts/addPost", async (body) => {
  const data = await addNewPost(body);
  return data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filterPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addPost.pending, (state) => {
        state.isAddingPost = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isAddingPost = false;
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
        state.isAddingPost = false;
      });
  },
});

export const { filterPost } = postsSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default postsSlice.reducer;
