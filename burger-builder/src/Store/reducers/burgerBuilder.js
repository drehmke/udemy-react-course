import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}
const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const reducer = (state = initialState, action) => {
  switch( action.type ) {
    case actionTypes.ADD_INGREDIENT:
      // update the second-level object: ingredients
      const updatedAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
      const newObjAdd = updateObject(state.ingredients, updatedAdd)
      // update the top-level object: state
      const updatedStateAdd = {
        ingredients: newObjAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateAdd)
      /*
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      */
    case actionTypes.REMOVE_INGREDIENT:
      const updatedRem = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
      const newObjRem = updateObject(state.ingredients, updatedRem)
      const updatedStateRem = {
        ingredients: newObjRem,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateRem)
      /*
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      */
    case actionTypes.SET_INGREDIENTS:
      return updateObject( state, {
        ingredients: action.ingredients,
        totalPrice: 4, // hardcoding for now, can get from server
        error: false
      })
      /*
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4, // hardcoding for now, can get from server
        error: false
      }
      */
    case actionTypes.FETCH_INGREDIENTS_FAIL:
      return updateObject( state, {
        error: true
      })
      /*
      return {
        ...state,
        error: true
      }
      */
    default:
      return state
  }
}

export default reducer
