import { createContext, useContext, useState, type ReactNode } from "react";

export type TodosProviderProps = {
    children : ReactNode

}
export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext = {
    todos:Todo[];
    handleAddToDo:(task:string) => void;
    toggleTodoAsCompleted:(id:string) => void;
    handleDeleteTodo:(id:string) => void;
}

export const todosContext = createContext<TodosContext | null >(null)

export const TodosProvider = ({children}:TodosProviderProps) => {

    const[todos,setTodos] = useState<Todo[]>([])

    const handleAddToDo = (task:string) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            return newTodos
        })

    }
    //MARK TASK AS completed
    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev) =>{
            let newTodos = prev.map((todo) =>{
                if(todo.id == id){
                    return { ...todo,completed:!todo.completed}
                }
                return todo;
            })
            return newTodos
        })
    }

    // DELETE TASK
    const handleDeleteTodo = (id:string) => {

        setTodos((prev)=> {
            let newTodos = prev.filter((filterTodo)=>filterTodo.id != id);
            return newTodos;

        })

    }





    return <todosContext.Provider value={{todos,handleAddToDo,toggleTodoAsCompleted,handleDeleteTodo}}>
        {children}
    </todosContext.Provider>
}

export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");

    }
    return todosConsumer;

}