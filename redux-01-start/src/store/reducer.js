import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      // this is one way to copy the object
      const newState = Object.assign( {}, state)
      newState.counter = state.counter + 1
      return newState
      // no need for break because we are using return
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      }
    case actionTypes.STORE:
      return {
        ...state,
        // use concat instead of push so that we do not
        // mutably update the results array
        results: state.results.concat({id: new Date(), value: state.counter})
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
