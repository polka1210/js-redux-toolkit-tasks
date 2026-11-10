import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      // BEGIN (write your solution here)
 const commentsArray = Object.values(payload); // превращаем объект в массив
      state.ids = commentsArray.map((comment) => comment.id);
      state.entities = commentsArray.reduce((acc, comment) => {
        acc[comment.id] = comment;
        return acc;
      }, {});
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
