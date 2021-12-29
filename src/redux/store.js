import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";
import postReducer from "./post/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
  },
});
