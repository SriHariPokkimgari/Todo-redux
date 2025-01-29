import { useDispatch, useSelector } from 'react-redux'
import {RootState} from "../store/store"
import { removeTodo, toggleTodo } from '../features/todoSlice';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineCloudDone } from "react-icons/md";
import { useEffect } from 'react';



const TodoList = () => {

    const todos  = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("fired", todos)
    }, [todos])

  return (
    <ul className='list-none'>
        {
            todos.length === 0 ? (<h1 className='text-white mt-4 text-4xl'>List is Empty...</h1>) : (todos.map((todo) => 
                <li
                    className='mt-4 flex justify-between items-center lg:w-200 md:w-150 w-75 bg-zinc-800 px-4 py-2 rounded space-y-2 transition-transform duration-100 ease-in-out'
                    key={todo.id}
                >
                    <div className='text-white'>
                        {todo.isDone ? <div><span className='line-through'>{todo.text}</span><span>✅</span></div>: <span>{todo.text}</span>}
                    </div>
                    <div className=' w-40 flex justify-around'>
                    <button 
                        onClick={() => dispatch(toggleTodo(todo.id))} 
                        className='text-white bg-green-400 py-1 px-4 rounded focus:outline-none hover:bg-green-500 text-lg cursor-pointer'
                        title='complete'
                    >
                        <MdOutlineCloudDone />
                    </button>
                    <button 
                        onClick={() => dispatch(removeTodo(todo.id))} 
                        className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer'
                        title='delete'
                    >
                        <FaRegTrashAlt />
                    </button>
                    </div>
                </li>))
        }
    </ul>
  )
}

export default TodoList;

