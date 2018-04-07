import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter: 0
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
    default:
      //console.error(`Unable to execute `, action.type )
  }
  return state
  //console.log(this.state)
}

export default reducer
