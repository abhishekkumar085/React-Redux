import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todoSlice';
import userReducer from '../redux/userSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
});
export default store;
