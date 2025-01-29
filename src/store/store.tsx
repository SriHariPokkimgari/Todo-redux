import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice";
import { loadTodos } from "../utils/storage";

const preloadedState = {
  todos: {
    todos: loadTodos(),
    filter: "all"
  }
}

 const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;