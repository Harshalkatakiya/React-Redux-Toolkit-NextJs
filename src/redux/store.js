import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice';
import todoSlice from './Slices/todoSlice';

export const store = configureStore({
    reducer: {
        usersData: userSlice,
        todo: todoSlice,
    },
});