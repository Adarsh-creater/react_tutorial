
import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './component/ChildComponent';

function App() {
  
 const [count , setCount] = useState(0);

//  function handleClick(){
//   setCount(count + 1)
//  }

 const handleClick = useCallback(() =>{
  setCount(count + 1)
 }, [count])



  return (
    <div>
      <div>count is : {count}</div>
<br />
      <button onClick={handleClick}>
        increment</button>

<br /><br />
      <div>
        <ChildComponent ChildButton = "click me"
      handleClick = {handleClick}/>
      </div>
    </div>
  )
}

export default App
