import './App.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </>
      
  )
)

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
