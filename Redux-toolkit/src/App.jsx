
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './feature/counter/counterSlice';
import { useState } from 'react';

function App() {
const [amount , setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch();

function handleIncrementClick(){
      dispatch(increment())
}

function handleDecrementClick(){
      dispatch(decrement())
}

function handleResetClick(){
      dispatch(reset())
}

function handleIncrAmount(){
  dispatch(incrementByAmount(amount))
}

  return (
    <div>
     <button onClick={handleIncrementClick}>+</button>
     <p>click : {count}</p>
     <button onClick={handleDecrementClick}>-</button>
     <br />
   
     <button onClick={handleResetClick}>reset</button>
     <br />
   
     <input type="number"
     value={amount}
        placeholder='enter the number'
        onChange={(e)=> setAmount(e.target.value)}
     />
     <button onClick={handleIncrAmount}>set Amount</button>
    </div>
  )
}

export default App
