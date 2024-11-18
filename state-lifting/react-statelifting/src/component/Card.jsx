import React from 'react'

const Card = (props) => {
  return (
    <div>
     {/* <input type="text" onChange={(e)=>props.setname(e.target.value)} />
     <p>the enter word in the text box of {props.title} are : {props.name}</p> */}
     
     <h3>{props.title}</h3>
      {props.isActive ? (
        <p>{props.children}</p>
      ) : (
        <button onClick={props.onShow}>
          Show
        </button>
      )}

    </div>
  )
}

export default Card
