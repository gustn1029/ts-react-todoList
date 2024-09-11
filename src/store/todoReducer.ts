import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoData {
    id: number;
    todo: string;
}

interface TodoState {
    todos: TodoData[]
}
const initialState:TodoState = {
    todos:[]
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:  {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1: 1,
                todo: action.payload
            };

            state.todos.push(newTodo);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;