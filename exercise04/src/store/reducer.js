import * as actionTypes from './actions'

const initialState = {
  people: []
}
 const reducer = ( state = initialState, action ) => {
   switch( action.type ) {
     case actionTypes.ADD:
       return {
         ...state,
         people: state.people.concat(action.payload)
       }
    case actionTypes.DEL:
      const adjustedPeople = state.people.filter(
        person => person.id !== action.payload
      )
      return {
        ...state,
        people: adjustedPeople
      }
    default:
      // do nothing
   }
   return state
 }

 export default reducer
