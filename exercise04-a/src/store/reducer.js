import * as actionTypes from './actions'

const initialState = {
  people: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD:
      const newPerson = {
        id: Math.random(),
        name: action.payload.name,
        age: action.payload.age
      }
      return {
        ...state,
        people: state.people.concat(newPerson)
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
