import React from 'react';
import FaTrash0 from 'react-icons/lib/fa/trash-o'

const Friend = ({friend, removeFriend}) => {
  return (
    <div>
      <li className="list-group-item">
        <strong>Name:</strong> {friend.name}
        <br />
        <strong>Age:</strong> {friend.age}
        <button onClick={(e) => {removeFriend(e, friend) }}
          className="btn btn-danger trash">
          <span><FaTrash0 /></span>  
        </button>
      </li>
    </div>
  )
}

export default Friend;