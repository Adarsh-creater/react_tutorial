import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    function handleclick(){
        navigate('/about')
    }
  return (
    <div>Contact
        <button onClick={handleclick}>
            click to goto about
        </button>
        <Outlet/>
    </div>
  )
}

export default Contact