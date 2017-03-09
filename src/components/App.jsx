import React from 'react';
import List from '../containers/List'
import AddTodo from '../components/AddTodo.jsx'
import Footer from '../components/Footer.jsx'


const App = () => (
  <div>
    <AddTodo />
    <List />
    <Footer />
  </div>
)

export default App
