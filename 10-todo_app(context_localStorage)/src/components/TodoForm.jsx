import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (event) => {
    event.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Enter Todo"
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-75 bg-white/20 py-1.5"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
