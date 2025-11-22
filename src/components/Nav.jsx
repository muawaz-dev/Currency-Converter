import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <div className='font-mono text-2xl flex gap-7 justify-center items-center w-full fixed top-0 h-14 bg-red-800'>
        <NavLink className={({isActive})=> isActive && "text-white" } to={"/"}>Home</NavLink>
        <div>|</div>
        <NavLink className={({isActive})=> isActive && "text-white" } to={"/about"}>About</NavLink>
    </div>
  )
}
