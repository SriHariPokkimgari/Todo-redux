

type Todo ={
    id: number;
    text: string;
    isDone: boolean;
}

export const loadTodos = (): Todo[] =>{
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
}

export const saveTodos = (todos:Todo[]) =>{
    localStorage.setItem("todos", JSON.stringify(todos))
};