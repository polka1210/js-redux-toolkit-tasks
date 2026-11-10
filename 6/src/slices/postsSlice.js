import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      // BEGIN (write your solution here)
 const postsArray = Object.values(payload); // превращаем объект в массив
      state.ids = postsArray.map((post) => post.id);
      state.entities = postsArray.reduce((acc, post) => {
        acc[post.id] = post;
        return acc;
      }, {});
      // END
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;
