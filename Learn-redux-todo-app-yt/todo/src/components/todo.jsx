import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = () => {
  const [newAddTodo, setNewAddTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // console.log(newAddTodo)

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newAddTodo.trim() !== "") {
      handleAddTodo(newAddTodo.trim());
      setNewAddTodo("");
    }
  };

  const handleSearchTerm = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-300 p-4 rounded sm:mt-8">
      <h2 className="font-bold uppercase text-2xl mt-3 mb-6 text-center">
        Personal todo app
      </h2>

      {/* input field */}
      <div className="flex items-center mb-4">
        <input
          value={newAddTodo}
          onChange={(e) => setNewAddTodo(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTodoClick}
          className="ml-4 p-2 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded text-white"
        >
          <BsPlus className="size-7 font-bold" />
        </button>
      </div>


      {/* filter and search */}
      <div className="flex items-center justify-between">
        <FilterButton/>
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e.target.value)}
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            placeholder="search"
            className="flex-grow p-3 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
        //   onClick={handleSearch}
          className="ml-4 p-2 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded text-white"
        >
          <BsSearch className="size-5 font-bold" />
        </button>
        </div>
      </div>

      {/* Todo List */}
      <TodoList/>
    </div>
  );
};

export default Todo;
