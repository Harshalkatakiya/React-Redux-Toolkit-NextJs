import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './Slices/userSlice';
import todoSlice from './Slices/todoSlice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: {
        usersData: persistedReducer,
        todo: todoSlice,
    },
    devTools: process.env.DEVTOOLS
});

export const persistor = persistStore(store);