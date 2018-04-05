// node.js only
const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer - the only thing that can update the store
const rootReducer = (state = initialState, action) => {
  if( action.type === 'INC_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if( action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state
}

// Store
const store = createStore( rootReducer )
console.log( `[createStore] `, store.getState() )

// Subscription
store.subscribe( () => {
  console.log(`[Subscription] `, store.getState())
})

// Dispatching Action -- type is required
store.dispatch( {type: 'INC_COUNTER'} )
store.dispatch( {type: 'ADD_COUNTER', value: 10})
console.log(`[ACTION] `, store.getState())
