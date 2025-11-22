import React, { useEffect,useState } from 'react'
import InputBox from '../components/InputBox'

function Home({options}) {
  let [result,setResult] = useState()
  let [fromCurrency,setFromCurrency] = useState()
  let [toCurrency,setToCurrency] = useState()
  let [fromSelected,setFromSelected] = useState()
  let [toSelected,setToSelected] = useState()
  useEffect(()=>{

  },[])
  return (
    <>
      <div className='flex gap-8 flex-col justify-center items-center h-screen w-screen'>
        <InputBox label="From" options={options} currency={[fromCurrency,setFromCurrency]} optionSelected={[fromSelected,setFromSelected]} />
        <InputBox label="To" options={options} currency={[toCurrency,setToCurrency]} optionSelected={[toSelected,setToSelected]} />
        <h3 className='bg-red-500 rounded-md text-white p-1'>{result}</h3>
      </div>
    </>
  )
}

export default Home