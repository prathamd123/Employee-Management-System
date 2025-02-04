import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-65'>
        <div className='bg-emerald-500 flex justify-between rounded text-lg m-3 p-3'>
            <h2 className='w-1/5 text-black font-semibold'>Employee Name</h2>
            <h3 className='w-1/5 text-black font-semibold'>New Task</h3>
            <h5 className='w-1/5 text-black font-semibold'>Active Tasks</h5>
            <h5 className='w-1/5 text-black font-semibold'>Completed Task</h5>
            <h5 className='w-1/5 text-black font-semibold'>Failed Task</h5>
        </div>
        <div id='alltask' className='h-[60%] overflow-auto'>
            {userData.map(function(elem,idx){
             return  <div key={idx} className='flex justify-between rounded text-lg m-3 p-3 border-2 border-yellow-400'>
            <h2 className='font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
            <h5 className='font-medium w-1/5 white-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='font-medium w-1/5 text-green-400'>{elem.taskNumbers.completed}</h5>
            <h5 className='font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
        </div>
    })}
    </div>
    </div>
  )
}

export default AllTasks
