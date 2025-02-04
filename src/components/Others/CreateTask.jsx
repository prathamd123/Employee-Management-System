import { useContext, useState } from "react"
import React from 'react'
import { AuthContext } from "../../context/AuthProvider"

const CreateTask = () => {

      const [userData,setUserData] = useContext(AuthContext)
  
  
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [taskCategory, setTaskCategory] = useState('')

  // const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    // console.log(taskTitle,taskDesc,Category,assignTo,taskDate);
    // setNewTask({taskTitle,taskDesc,taskDate,Category,active:false,newTask:true,failed:false,completed:false})
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    // console.log(newTask)

    const data = userData
    // console.log(data)


    data.forEach(function(elem){
      // console.log(elem.firstName)
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }})
        setUserData(data)
        console.log(data)
      



    setTaskTitle("")
    setAssignTo("")
    setTaskDate("")
    setTaskCategory("")
    setTaskDescription("")

  }
  return (
       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap items-start w-full justify-between'>
          <div className='w-1/2'>
          <div>
          <h3 className='text-sm text-gray-100 mb-0.5'>Task Title</h3>
          <input 
          value={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Make a UI design' />
          </div>
          <div>
          <h3 className='text-sm text-gray-100 mb-0.5'>Date</h3>
          <input 
           value={taskDate}
           onChange={(e)=>{
             setTaskDate(e.target.value)
           }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="date" name="" id="" />
          </div>
          <div>
          <h3 className='text-sm text-gray-100 mb-0.5'>Assign to</h3>
          <input 
          value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='Employee Name' />
          </div>
          <div>
          <h3 className='text-sm text-gray-100 mb-0.5'>Category</h3>
          <input
          value={taskCategory}
          onChange={(e)=>{
            setTaskCategory(e.target.value)
          }}
          className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='design,dev,etc' />
          </div>
          </div>
          
          <div className='w-1/2'>
          <h3 className='text-sm text-gray-100 mb-0.5'>Discription</h3>
          <textarea 
          value={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" cols="30" rows="10" id=""></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
          
        </form>
      </div>
  )
}

export default CreateTask
