import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeTodo } from "../features/todo/todo";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo) => (
        <ul key={todo.id} className="list-none">
          <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <div className="text-white">{todo.text}</div>
            <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-lg"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <DeleteIcon />
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Todo;
