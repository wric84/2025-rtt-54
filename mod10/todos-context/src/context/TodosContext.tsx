import { createContext, useState, useEffect } from "react";

const data = [
  {
    id: "1",
    text: "Design landing page",
    completed: true,
  },
  {
    id: "2",
    text: "Set up CI/CD pipeline",
    completed: true,
  },
  {
    id: "3",
    text: "Fix login bug",
    completed: false,
  },
  {
    id: "4",
    text: "Write unit tests",
    completed: false,
  },
  {
    id: "5",
    text: "Deploy to staging",
    completed: false,
  },
];

export const TodosContext = createContext(null);


interface TodosProviderProps {
    children: React.ReactNode
}

export function TodosProvider({children}: TodosProviderProps) {
    // State data
    const [todos, setTodos] = useState(data);

    useEffect(() => {}, [])

    // Actions
    const addTodo = () => {};
    const deleteTodo = () => {};
    const toggleTodo = () => {};
    const editTodo = () => {};
    const clearCompleted = () => {};

    return (
        <TodosContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo, editTodo, clearCompleted}}>
            {children}
        </TodosContext.Provider>
    )

}