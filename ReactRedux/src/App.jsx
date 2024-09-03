import { useSelector } from "react-redux";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

export default function App() {
  const todos=useSelector(state=>state.todoState.todos);

  return (
  <>
    <h2>Todo App</h2>
    <TodoInput/>
    <TodoList todos={todos}/>
  </>
  )
}
