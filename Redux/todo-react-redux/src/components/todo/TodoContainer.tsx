import React from 'react'
import TodoCard from './TodoCard'

const TodoContainer = () => {
  return (
    <div>
        <div>
            <button>Add Todo</button>
            <button>Filter</button>
        </div>
        <div className='bg-red-500 w-full h-full rounded-xl p-5 space-y-4'>
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