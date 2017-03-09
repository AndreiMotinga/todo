import React from 'react'
import Todo from './Todo.jsx'

const List = ({ todos, toggleTodo, removeTodo }) => (
  <ul className="list-group">
    {todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
      toggleTodo={() => toggleTodo(todo.id)}
      removeTodo={() => removeTodo(todo.id)}
    />
    ))}
  </ul>
)

export default List
