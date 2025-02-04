import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
    // console.log(data)
    // const [username, setUserName] = useState('')

    // if(!data){
    //  setUserName('Admin')
    // }else{
    //   setUserName(data.firstName)
    // }

    const logOutUser = ()=>{
      localStorage.setItem('loggedInUser','')
      // window.location.reload()
      // console.log(props.changeUser)
      props.changeUser('')
    }
  return (
    <div className='flex items-end justify-between'>
       <h1 className='text-2xl font-medium'>Hello <br /> <span className='font-semibold text-3xl'>username 👋🏻</span></h1>
       <button onClick={logOutUser} className='bg-red-600 text-white rounded-sm text-lg font-medium px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header

