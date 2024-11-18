
import { useState } from 'react'
import './App.css'
import LoggedIn from './component/LoggedIn'
import LoggedOut from './component/LoggedOut'

function App() {

  const [isLogIn, setLogIn] = useState(false)

  if(isLogIn) return <LoggedIn/> 

  else return <LoggedOut/>
}

export default App
