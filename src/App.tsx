import React from 'react'
import InputTodo from './components/inputTodo'
import TodoList from './components/todoList'


const App: React.FC = () => {
  return (
    <div className='w-dvw h-dvh bg-black flex flex-col items-center'>
      <InputTodo/>
      <TodoList/>
    </div>
  )
}

export default App