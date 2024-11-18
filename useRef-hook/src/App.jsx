
import { useRef, useState } from 'react'
import './App.css'

function App() {
//   const [count , setCount] = useState(0)
// // const val = 0;
//   const val = useRef(0);
//   const BtnRef = useRef();
 
//   function handleClick(){
//     val.current = val.current + 1;
//     console.log("the val change to : ",val.current)

//     // console.log(val + 1)
//     setCount(count+1)
//   }

  // function changeColor(){
  //   if(BtnRef.current.style.background === 'green')
  //     BtnRef.current.style.background = 'red';
  //   else
  //   BtnRef.current.style.background = 'green';

  // }

  const [time , setTime] = useState(0);
  const TimeRef = useRef(null)

  function startTimer(){

     TimeRef.current =  setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }

  function stopTimer(){

    clearInterval(TimeRef.current)
    TimeRef.current = null
  }
  function resetTimer(){

    stopTimer();
    setTime(0)

  }

  
  return (
    <div>
      {/* <button ref={BtnRef} onClick={handleClick}>increment</button>
      <button onClick={changeColor}>change color</button>
      <p>
        count is : {count}
      </p> */}

      <h1>StopWatch : {time} seconds</h1>
<br />
      <button onClick={startTimer}>Start</button>
<br />
<br />
      <button onClick={stopTimer}>Stop</button>
<br />
<br />

      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App
