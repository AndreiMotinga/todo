import React from 'react';

const App = () => (
  <div>
    <form>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Text..."/>
        <span className="input-group-addon" id="basic-addon2">Add</span>
      </div>
    </form>

    <ul className="list-group">
      <li className="list-group-item">Buy milk</li>
      <li className="list-group-item">Do some work</li>
      <li className="list-group-item">Exercise</li>
    </ul>

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
