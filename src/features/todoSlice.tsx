import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Todo} from "../types"



const initialState : Todo[] = [{id:Date.now(), text: "Wake Up Early morning...", isDone: false}, {id:Date.now()+1, text: "Go to the ground...", isDone: false}, {id:Date.now(), text: "Start running...", isDone: false}];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({id: Date.now(), text: action.payload, isDone: false})
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if(todo){
        todo.isDone = !todo.isDone;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) =>{
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;