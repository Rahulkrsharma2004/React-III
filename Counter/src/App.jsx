import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const  handleClick = () => {
    setCount(count+1)
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={handleClick} className='btn' >count</button>
    </>
  )
}

export default Counter
