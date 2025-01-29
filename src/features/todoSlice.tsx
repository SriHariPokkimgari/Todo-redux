import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Todo} from "../types"

interface TodoState {
  todos: Todo[];
  filter: string;
}

const initialState :TodoState ={
  todos: [
    {id:Date.now(), text: "Wake Up Early morning...", isDone: false},
    {id:Date.now()+1, text: "Go to the ground...", isDone: false},
    {id:Date.now()+2, text: "Start running...", isDone: false}
  ],
  filter: 'all'
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({id: Date.now(), text: action.payload, isDone: false})
      
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if(todo){
        todo.isDone = !todo.isDone;
      }
    },
   removeTodo: (state, action: PayloadAction<number>) =>{
    state.todos =  state.todos.filter(todo => todo.id !== action.payload);
   }
  }
});

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;