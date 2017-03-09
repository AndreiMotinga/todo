import { connect } from 'react-redux'
import List from '../components/List.jsx'
import { removeTodo, toggleTodo } from '../reducers/todos'
import { FILTERS } from '../reducers/filter'

const getTodos = (todos, filter) => {
  switch(filter) {
    case FILTERS.ALL:
      return todos
    case FILTERS.COMPLETED:
      return todos.filter(todo => todo.completed)
    case FILTERS.ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
