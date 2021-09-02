import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './pages/todo/todoSlice';

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
  devTools: process.env.NODE_ENV === 'production' ? false : true,
});
