import React from 'react'
import { useParams } from 'react-router-dom'

const Paracontant = () => {
    const {id} = useParams();
  return (
    <div>
        Paracontant id : {id} 

    </div>
  )
}

export default Paracontant