import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE:
      return {
        ...state,
        // use concat instead of push so that we do not
        // mutably update the results array
        results: state.results.concat({id: new Date(), value: action.value})
      }
    case actionTypes.REMRESULT:
      /* one way to update this ...
      const id = 2;
      const newResults = [...state.results]
      newResults.splice(id, 1)
      */
      /* filter makes a new array, so maintains mutabillity */
      const updatedArray = state.results.filter(
        result => result.id !== action.value
      )
      return {
        ...state,
        results: updatedArray
      }
    default:
      //console.error(`Unable to execute `, action.type )
  }
  return state
  //console.log(this.state)
}

export default reducer
