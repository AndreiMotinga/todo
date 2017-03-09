import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../reducers/todos'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(e) {
    e.preventDefault()
    const el = e.target.elements.newTodo
    if(el.value === '') return
    this.props.dispatch(addTodo(el.value))
    el.value = ''
  }

  render () {
    return (
      <form onSubmit={this.addTodo}>
        <div className="input-group">
          <input className="form-control" placeholder="Text..." name="newTodo"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Add todo!</button>
          </span>
        </div>
      </form>
    )
  }
}

export default connect()(AddTodo)
