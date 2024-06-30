import { useSelector } from "react-redux"
import TodoItems from "./TodoItems";


const TodoList = () => {
    const filteredTodos = useSelector((state) =>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm
        // console.log(todos)

        return todos.filter((todo) =>{
            const matchedFilter = (filter === 'COMPLETED' && todo.completed) || (filter === 'INCOMPLETED' && !todo.completed) || (filter === 'ALL')

            const matchedSearch = todo.text.toLowerCase().includes(searchTerm)

            return matchedFilter && matchedSearch
        })

    })
    console.log(filteredTodos)
  return (
    <ul>
        <li className="my-2 text-sm italic">All Your Notes Here...</li>
        {
            filteredTodos.map((todo,index) =>(
                
                <TodoItems key={index} todo={todo} index={index}/>
                // <li key={index}>{todo.text}</li>
  ))
        }

    </ul>
  )
}

export default TodoList