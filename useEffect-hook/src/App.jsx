
import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [count , setCount] = useState(0);

 useEffect(() => {
   alert("you update the count value")

 }, [count])
 


  function clickhandle(){
       setCount(count+1)
  }
  
  return (
    <div>

    <button onClick={clickhandle}>
      click me
    </button>
    <br />
    the count is : {count}
    </div>

  )
}

export default App
