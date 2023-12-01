import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { todos: [] };

const todoSlice = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload,
            };
            state.todos.push(data);
        },
    },
});

export const { addTodos } = todoSlice.actions;

const persistConfig = {
    key: 'todoSlice',
    storage: storage,
    whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);

export default persistedReducer;