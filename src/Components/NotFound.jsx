import React from 'react'
import { NavLink } from 'react-router-dom'


// errors 

const NotFound = () => {

  return (
    <>
       <div className="h-screen w-screen flex justify-center align-middle items-center">
                <h1 className='text-4xl font-semibold'>Page Not Found,404</h1>
                <NavLink to={"/"}><button>Go Back</button></NavLink>
        </div>
    </>
  )
}

export default NotFound