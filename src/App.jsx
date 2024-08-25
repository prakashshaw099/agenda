import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
  const [todoData, setTodoData] = useState([])
  return (
    <div>
      <AddTodo todoData={todoData} setTodoData={setTodoData}/>
      <TodoList todoData={todoData}/>
    </div>
  )
}

export default App
