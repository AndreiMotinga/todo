import React from 'react'
import Link from './Link.jsx'

const Todo = ({ text, completed, toggleTodo, removeTodo }) => (
  <li className="list-group-item ">
    <span
      className={completed ? 'completed': ''}
      onClick={toggleTodo}
    >
      {text}
    </span>
    {' '}
    <Link classes="remove-link" onClick={removeTodo}>Remove</Link>
  </li>
)

export default Todo
