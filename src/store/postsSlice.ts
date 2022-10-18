import { createSlice } from "@reduxjs/toolkit";
import { PostsInterface } from "api/types";

const initialState = [] as PostsInterface[];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => [...state, ...action.payload],
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
