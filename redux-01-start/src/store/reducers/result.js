import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
  results: []
}

const deleteResult = ( state, action ) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.value
  )
  return updatedObject(state, { results: updatedArray } )
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.STORE:
      /*
      return {
        ...state,
        // use concat instead of push so that we do not
        // mutably update the results array
        results: state.results.concat({id: new Date(), value: action.value})
      }
      */
      return updatedObject(state, { results: state.results.concat({id: new Date(), value: action.value}) } )
    case actionTypes.REMRESULT:
      /* one way to update this ...
      const id = 2;
      const newResults = [...state.results]
      newResults.splice(id, 1)
      */
      /* filter makes a new array, so maintains mutabillity */
      /*
      const updatedArray = state.results.filter(
        result => result.id !== action.value
      )
      */
      /*
      return {
        ...state,
        results: updatedArray
      }
      */
      return deleteResult(state, action )
    default:
      //console.error(`Unable to execute `, action.type )
  }
  return state
  //console.log(this.state)
}

export default reducer
