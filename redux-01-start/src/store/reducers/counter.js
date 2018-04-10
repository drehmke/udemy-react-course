import * as actionTypes from '../actions/actionTypes'
import { updatedObject } from '../utility'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
    return updatedObject( state, { counter: state.counter + 1 })
      /*
      // this is one way to copy the object
      const newState = Object.assign( {}, state)
      newState.counter = state.counter + 1
      return newState
      */
      // no need for break because we are using return
    case actionTypes.DECREMENT:
      return updatedObject( state, { counter: state.counter - 1 })
      /*
      return {
        ...state,
        counter: state.counter - 1
      }
      */
    case actionTypes.ADD:
      return updatedObject( state, { counter: state.counter + action.value })
      /*
      return {
        ...state,
        counter: state.counter + action.value
      }
      */
    case actionTypes.SUBTRACT:
      return updatedObject( state, { counter: state.counter - action.value })
      /*
      return {
        ...state,
        counter: state.counter - action.value
      }
      */
    default:
      //console.error(`Unable to execute `, action.type )
  }
  return state
  //console.log(this.state)
}

export default reducer
