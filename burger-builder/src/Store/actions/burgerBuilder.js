import * as actionTypes from './actionTypes'
//import orderAxios from '../../axios-orders'

export const addIngredient = ( ingName ) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  }
}

export const removeIngredient = ( ingName ) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  }
}

export const setIngredients = ( ingredients ) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const fetchIngredientsFail = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  }
}

export const initIngredients = () => {
  console.log('in initIngredients')
  return {
    type: actionTypes.INIT_INGREDIENTS
  }
}
