import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <div className='font-mono text-2xl flex gap-5 justify-center items-center w-full fixed top-0 h-14 bg-red-800'>
        <NavLink className={({isActive})=> isActive && "text-white" } to={"/"}>Home</NavLink>
        <NavLink className={({isActive})=> isActive && "text-white" } to={"/about"}>About</NavLink>
    </div>
  )
}
