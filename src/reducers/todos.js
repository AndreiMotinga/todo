import uuid from 'uuid'
// actions
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// action creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      todo: {
        id: uuid.v1(),
        text: text,
        completed: false
      }
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: id
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id
    }
  }
}
// action handlers

// REDUCERS
const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload.todo
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload.id)
          todo.completed = !todo.completed
        return todo
      })
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}
export default todos
