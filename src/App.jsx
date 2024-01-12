import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'
import HomePage from './HomePage'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
      </Routes>
    </Router>
 
      
    </>
  )
}

export default App