import React from 'react'
import TodoCard from './TodoCard'
import AddTodoModal from './AddTodoModal'
import TodoFilter from './TodoFilter'

const TodoContainer = () => {
  return (
    <div>
        <div className='flex justify-between mb-5'>
            
            <AddTodoModal/>
            <TodoFilter/>
        </div>
        <div className='bg-primary-gradient w-full h-full rounded-xl p-5 space-y-4'>
            {/* <div className='text-2xl font-bold flex justify-center items-center p-3 bg-white rounded-md'><p>There is no task pending</p></div> */}
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>

        </div>
    </div>
  )
}

export default TodoContainer