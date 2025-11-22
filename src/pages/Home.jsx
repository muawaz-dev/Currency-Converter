import React, { useEffect, useState } from 'react'
import InputBox from '../components/InputBox'
import Nav from '../components/Nav'

function Home({ options }) {
  let [fromCurrency, setFromCurrency] = useState(1)
  let [toCurrency, setToCurrency] = useState()
  let [fromSelected, setFromSelected] = useState({ value: "usd", label: "US Dollars" })
  let [toSelected, setToSelected] = useState({ value: "pkr", label: "Pakistani Rupees" })

  function handleData(data) {
    let a = data[fromSelected.value]
    setToCurrency((fromCurrency * a[toSelected.value]).toFixed(4))
  }

  function handleClick() {
    setFromSelected(toSelected)
    setToSelected(fromSelected)
  }

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromSelected.value}.json`)
      .then(response => response.json())
      .then(data => handleData(data))
  }, [fromCurrency, fromSelected, toSelected])
  return (
    <>
      <div className="h-screen bg-no-repeat bg-cover bg-[url('./assets/bg-image.jpg')]">
        <Nav />
        <div className=" flex flex-col gap-3 justify-center items-center h-full w-full">
          <h1 className="text-3xl md:text-4xl font-bold  bg-white px-6 py-3 rounded-lg shadow-md text-red-800">
            Currency Converter
          </h1>
          <InputBox readOnly={false} label="From" options={options} currency={[fromCurrency, setFromCurrency]} optionSelected={[fromSelected, setFromSelected]} />
          <button onClick={handleClick} className='text-lg md:text-xl font-bold bg-white px-2 py-1 rounded-lg shadow-md text-red-800"'>Inter-Change</button>
          <InputBox readOnly={true} label="To" options={options} currency={[toCurrency, setToCurrency]} optionSelected={[toSelected, setToSelected]} />
        </div>
      </div>
    </>
  )
}

export default Home