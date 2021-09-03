import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    set: (state, { payload }) => {
      state.todos = payload;
    },
    add: (state, { payload }) => {
      state.todos.push(payload);
    },
    remove: (state, { payload }) => {
      state.todos.splice(payload, 1);
    },
  },
});

export default slice.reducer;
