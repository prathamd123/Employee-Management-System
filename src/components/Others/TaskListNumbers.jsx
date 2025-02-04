import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] bg-blue-400 py-6 px-9'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-emerald-400 py-6 px-9'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-yellow-400 py-6 px-9'>
            <h2 className='text-2xl font-semibold text-black'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] bg-red-400 py-6 px-9'>
            <h2 className='text-2xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumbers
