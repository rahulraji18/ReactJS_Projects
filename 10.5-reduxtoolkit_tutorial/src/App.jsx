import "./App.css";
import { AddTodo, Todo } from "./components";

function App() {
  return (
    <>
      <h1 className="text-white">Todo App</h1>
      <AddTodo/>
      <Todo />
    </>
  );
}

export default App;
