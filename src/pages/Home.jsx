import React from 'react'
import InputBox from '../components/InputBox'

function Home() {
  return (
    <>
      <div className='flex gap-8 flex-col justify-center items-center h-screen w-screen'>
        <InputBox label="From" />
        <InputBox label="To" />
      </div>
    </>
  )
}

export default Home