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
 state.ids = payload.map((post) => post.id);
      state.entities = _.keyBy(payload, "id");
      // END
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;
