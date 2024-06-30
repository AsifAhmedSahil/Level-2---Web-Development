import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllComplete } from "../redux/action"


const FilterButton = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state) => state.filter)

    const handleFilter = (filter) =>{
        dispatch(filterTodos(filter))
    }

  return (
    <div className="flex space-x-4 items-center">
        <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)}  className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none">
            <option value="ALL">Default</option>
            <option value=" COMPLETED">Completed</option>
            <option value="INCOMPLETED">Incompleted</option>
        </select>
        <button onClick={() => dispatch(markAllComplete())} className="ml-4 px-2 py-1 bg-purple-600 text-white rounded "> Mark All Completed</button>
    </div>
  )
}

export default FilterButton