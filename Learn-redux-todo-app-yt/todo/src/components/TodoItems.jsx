/* eslint-disable react/prop-types */
import { FaCheck, FaTimes, FaToggleOn, FaTrash } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import { useDispatch} from "react-redux";
import { markCompleted, markInCompleted, removeTodo, toggleTodo } from "../redux/action";

const TodoItems = ({ todo, index }) => {
  
  const dispatch = useDispatch();
  
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between py-2 gap-4  border-b-2">
      
      <div className="flex items-center">
        <span className="mr-4 text-gray-400">{index + 1}</span>
        <span
          className={`mr-4 ${
            todo.completed ? "text-red-500 line-through" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="space-x-3 ml-8">
        {/* ****************toggle button **************** */}
        <button
          onClick={() => dispatch(toggleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded "
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>

            {/* **************delete button****************** */}
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded "
        >
          <FaTrash/>
        </button>

        {!todo.completed && (
          <button
            onClick={() => dispatch(markCompleted(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded "
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            onClick={() => dispatch(markInCompleted(index))}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded "
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItems;
