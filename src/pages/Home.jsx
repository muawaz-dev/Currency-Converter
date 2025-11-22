import React, { useEffect,useState } from 'react'
import InputBox from '../components/InputBox'

function Home({options}) {
  let [result,setResult] = useState()
  let [fromCurrency,setFromCurrency] = useState(1)
  let [toCurrency,setToCurrency] = useState()
  let [fromSelected,setFromSelected] = useState({value:"usd" ,label:"US Dollars"})
  let [toSelected,setToSelected] = useState({value:"pkr",label:"Pakistani Rupees"})

  function handleData(data){
    let a=data[fromSelected.value]
    setToCurrency((fromCurrency*a[toSelected.value]).toFixed(2))
  }

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromSelected.value}.json`)
    .then(response=>response.json())
    .then(data=>handleData(data))
  },[fromCurrency,toCurrency,fromSelected,toSelected])
  return (
    <>
      <div className='flex gap-8 flex-col justify-center items-center h-screen w-screen'>
        <InputBox readOnly={false} label="From" options={options} currency={[fromCurrency,setFromCurrency]} optionSelected={[fromSelected,setFromSelected]} />
        <InputBox readOnly={true} label="To" options={options} currency={[toCurrency,setToCurrency]} optionSelected={[toSelected,setToSelected]} />
        
      </div>
    </>
  )
}

export default Home