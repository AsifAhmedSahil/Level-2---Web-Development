
import TodoCard from './TodoCard'
import AddTodoModal from './AddTodoModal'
import TodoFilter from './TodoFilter'
// import { useAppSelector } from '@/redux/hook'
import { useGetTodosQuery } from '@/redux/api/api'

const TodoContainer = () => {
  // from local todos
  // const {todos} = useAppSelector((state) => state.todos)

  // from server
  const {data: todos,isError,isLoading} = useGetTodosQuery(undefined)
  if(isLoading){
    return <p>Loading...</p>
  }
  return (
    <div>
        <div className='flex justify-between mb-5'>
            
            <AddTodoModal/>
            <TodoFilter/>
        </div>
        <div className='bg-primary-gradient w-full h-full rounded-xl p-5 space-y-4'>
            {/* <div className='text-2xl font-bold flex justify-center items-center p-3 bg-white rounded-md'><p>There is no task pending</p></div> */}
            {
              todos?.data?.map((items) => <TodoCard {...items}/>)
              // todos?.map((items) => <TodoCard {...items}/>)
            }

        </div>
    </div>
  )
}

export default TodoContainer