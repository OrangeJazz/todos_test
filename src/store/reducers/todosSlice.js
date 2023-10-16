import { createAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],
  loading: false,
};

export const slice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    changeTodoStatus(state, action) {
      const id = action.payload.id;
      const status = action.payload.status;
      state.todos.filter(todo => todo.id === id).map(todo => todo.completed = status);
    },
    setTodos(state, action) {
      state.todos = action.payload;
    },
    setLoading(state, action) {
      state.todos = action.payload;
    },
  },
});

export const FETCH_TODOS = "FETCH_TODOS";
export const fetchTodos = createAction(FETCH_TODOS);

export default slice.reducer;
export const { addTodo, setTodos, setLoading, changeTodoStatus } = slice.actions;
