import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
}
const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

/* Functions to make the reducer switch statement smaller */
const addIngredient = (state, action) => {
  // update the second-level object: ingredients
  const updatedAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
  const newObjAdd = updateObject(state.ingredients, updatedAdd)
  // update the top-level object: state
  const updatedStateAdd = {
    ingredients: newObjAdd,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  }
  return updateObject(state, updatedStateAdd)
}

const removeIngredient = (state, action) => {
  const updatedRem = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
  const newObjRem = updateObject(state.ingredients, updatedRem)
  const updatedStateRem = {
    ingredients: newObjRem,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  }
  return updateObject(state, updatedStateRem)
}

const setIngredients = (state, action) => {
  return updateObject( state, {
    ingredients: action.ingredients,
    totalPrice: 4, // hardcoding for now, can get from server
    error: false,
    building: false
  })
}

const fetchIngredientsFail = (state, action) => {
  return updateObject( state, {
    error: true
  })
}

/* Reducer Switch Statement */
const reducer = (state = initialState, action) => {
  switch( action.type ) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
      /*
      // update the second-level object: ingredients
      const updatedAdd = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
      const newObjAdd = updateObject(state.ingredients, updatedAdd)
      // update the top-level object: state
      const updatedStateAdd = {
        ingredients: newObjAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateAdd)
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      */
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action)
      /*
      const updatedRem = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
      const newObjRem = updateObject(state.ingredients, updatedRem)
      const updatedStateRem = {
        ingredients: newObjRem,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedStateRem)
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }
      */
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action)
      /*
      return updateObject( state, {
        ingredients: action.ingredients,
        totalPrice: 4, // hardcoding for now, can get from server
        error: false
      })
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 4, // hardcoding for now, can get from server
        error: false
      }
      */
    case actionTypes.FETCH_INGREDIENTS_FAIL: return fetchIngredientsFail(state, action)
      /*
      return updateObject( state, {
        error: true
      })
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
