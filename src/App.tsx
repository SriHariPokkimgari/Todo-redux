import InputTodo from './components/inputTodo'
import TodoList from './components/todoList'


const App: React.FC = () => {
  return (
    <div className='min-h-screen  bg-black flex flex-col items-center'>
      <h1 className='text-white mt-8 text-2xl font-bold italic'>Todo List</h1>
      <InputTodo/>
      <TodoList/>
    </div>
  )
}

export default App