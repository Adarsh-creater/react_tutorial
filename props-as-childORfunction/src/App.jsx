
import { useState } from 'react'
import './App.css'
import Button from './component/button';
// import UserContent from './component/UserContent'


function App() {
  const [count , setCount] = useState(0);
  function handleClick(){
  
    setCount(count+1)
  }

  return (
    <div>
      <Button handleClick ={handleClick} text ='click on'>
          <h2>{count}</h2>
      </Button>

      {/* <UserContent name='adarsh kumar'>
        <h1>hellow welcome</h1>
        <h2>good night sweet dream</h2>
        <h3>gand me laund</h3>
        <h4>halo hole khelo</h4>
      </UserContent>
      <UserContent children = 'kese ho apsub'>
            hilo hoe du otdo
      </UserContent> */}

    </div>
  )
}

export default App
