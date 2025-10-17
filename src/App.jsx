import { useState } from 'react'
import Shop from "./pages/shop"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Shop/>
    </>
  )
}

export default App
