import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count , sumCount] = useState(0);
  return (
    <div className='count-container'>
        <p id="para">you have clicked {count} times</p>
        <button id='btn' onClick={()=>{sumCount(count + 1)}}>click me</button>
        </div>
  )
}

export default Counter