
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './component/ChildA';

const UseContext = createContext();
const ThemeContext = createContext();


function App() {
  const [user , setUser] = useState({name : "Adarsh"})

  const [theme , setTheme] = useState('light')

  return (
    <div>
      <UseContext.Provider value = {user}>
      <ThemeContext.Provider value = {{theme,setTheme}}>
        <div id="container" style={{background:theme === 'light' ? 'beige' : 'black'}}>
          <ChildA/>
        </div>
      </ThemeContext.Provider>
      </UseContext.Provider>


     
    </div>
  )
}

export default App
export {UseContext}
export {ThemeContext}
