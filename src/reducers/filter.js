// actions
export const SET_FILTER = 'SET_FILTER'
export const FILTERS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}
// action creators
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    action: {
      payload: {
        filter
      }
    }
  }
}
// action handlers

// reducer
const filter = (state = FILTERS.ALL, action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default filter
