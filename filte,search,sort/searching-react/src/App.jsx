
import { useMemo, useRef, useState } from 'react'
import './App.css'



function App() {

  const [items , setItems] = useState([])
  const [query , setQuery] = useState('')

  const refValue = useRef();

   const filterItems = useMemo(
    ()=>{
     return items.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase())
   })
    } , [items , query]
   )

  console.log(query)

  function onSubmit(e){

    e.preventDefault()
      
    const value = refValue.current.value
     
    if(value === '') return

     setItems(prev => {
      return [...prev,value]
     })

     refValue.current.value = ''
  }


  return (
    <>
      Search :
      <input type="search"
      onChange={(e)=> setQuery(e.target.value)}

      />

<br />
<br />
      <form onSubmit={onSubmit}>
        Add Item: 
        <input type="text"
        ref={refValue}
         />

        <button type='submit' >Add</button>
      </form>

      <h3>Items :</h3>
       
       {filterItems.map(key =>(
        <div>{key}</div>
       ))}
    </>
    
  )
}

export default App
