import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todoSlice"

const InputTodo = () => {

    const [inputValue, setInputValue] =useState<string>('')
    const dispatch = useDispatch();

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(inputValue.trim()){
          dispatch(addTodo(inputValue));
        };
        setInputValue('');
    }
  return (
    <form onSubmit={handleAdd} className="space-x-1 mt-12" >
        <input 
        className="bg-gray-600 lg:w-200 w-[60] sm:w-100 rounded border border-gray-600 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-300  text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                    placeholder:text-gray-300 placeholder:italic ..."
        type="text" 
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button 
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 active:bg-white active:text-indigo-600 rounded text-lg transition-colors duration-100 ease-in"
        >Add</button>
    </form>
  )
}

export default InputTodo;
