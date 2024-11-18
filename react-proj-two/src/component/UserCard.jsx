import React from 'react'

import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='userContainer' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm21Qu95qyD727hYKg5zuwmMb2PkWWyQpSwQ&s" id='user-img' alt="" />
      <p id='user-desc'>description of {props.name} : {props.desc}</p>
    </div>
  )
}

export default UserCard