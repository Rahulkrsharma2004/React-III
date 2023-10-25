import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick = () => {
    setInputValue("");
  }

  return (
    <>
      <input type="text" onChange={handleChange} placeholder='write here' value={inputValue} className='inp'/>
      <h2>{inputValue}</h2>
      <button onClick={handleClick} className='btn'>CLEAR</button>
    </>
  )
}

export default App
