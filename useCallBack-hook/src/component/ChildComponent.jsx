import React from 'react'

const ChildComponent = React.memo(
    (props) => {

    console.log("child component re-render again")

  return (
    <div>
        <button onClick={props.handleClick}>
            {props.ChildButton}
        </button>
        
    </div>
  )
}
);

export default ChildComponent