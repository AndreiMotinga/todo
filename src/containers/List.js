import { connect } from 'react-redux'
import List from '../components/List.jsx'
import { removeTodo, toggleTodo } from '../reducers/todos'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      console.log('dispatching', id)
      dispatch(removeTodo(id))
    },
    toggleTodo: (id) => {
      console.log('dispatching', id)
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
