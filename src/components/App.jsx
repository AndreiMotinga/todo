import React from 'react';
import List from '../containers/List'

const App = () => (
  <div>
    <form>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Text..."/>
        <span className="input-group-addon" id="basic-addon2">Add</span>
      </div>
    </form>

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
