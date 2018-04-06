import * as actionTypes from './actions'

const initialState = {
  people: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        people: state.people.concat(action.payload)
      }
    case actionTypes.REM:
      return {
        ...state,
        people: state.people.filter(
          person => person.id !== action.payload
        )
      }
    default:
  }
  return state
}

export default reducer
