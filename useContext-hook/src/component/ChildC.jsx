import React, { useContext } from 'react'
// import { UseContext } from '../App'
import { ThemeContext , UseContext } from '../App'

const ChildC = () => {
    const user = useContext(UseContext)

    const {theme, setTheme} = useContext(ThemeContext)
    function handleClick(){
       if(theme === 'light') setTheme('dark')
        else setTheme('light')
    }
  return (
    <div>
        <button onClick={handleClick}>

      {theme}
        </button>

        name : {user.name}
    </div>
  )
}

export default ChildC
