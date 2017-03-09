import React from 'react';
import List from '../containers/List'
import AddTodo from '../components/AddTodo.jsx'

const App = () => (
  <div>
    <AddTodo />
    <List />

    <div>
      <a href="#">All</a>
      {' '}
      <a href="#">Active</a>
      {' '}
      <a href="#">Completed</a>
    </div>
  </div>
)

export default App
