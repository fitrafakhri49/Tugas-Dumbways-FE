import ToDoLists from "./components/ToDoLists"
import ToDoForm from "./components/TodoForm"
// import ToDoFor from "./components/TodoForm"
import { TodoProvider } from "./context/TodoProvider"

function App() {

  return (
    <TodoProvider>
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="mb-8 font-semibold">ToDo App</h1>
      <ToDoForm/>
      <ToDoLists/>
    </div>
    </TodoProvider>
  )
}

export default App
