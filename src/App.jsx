import { useEffect, useState } from 'react'
import './App.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

function App() {
  function cleanData(data){
    let arr=[];
    for (const key in data) {
      arr.push({value:key,label:data[key]})
    }
    setOptions(arr)
  }

  const [options, setOptions] = useState(null)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home options={options} />} />
        <Route path='/about' element={<About />} />
      </>

    )
  )
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
      .then((response) => response.json())
      .then((data)=> cleanData(data))
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
