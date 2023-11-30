import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { todos: [] }
const Slice = createSlice({
    name: "TodoList",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid,
                name: action.payload
            }
            state.todos.push(data);
        }
    }
});
export const { addTodos } = Slice.actions;
export default Slice.reducer;