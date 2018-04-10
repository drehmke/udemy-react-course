import * as actionTypes from './actionTypes'
import orderAxios from '../../axios-orders.js'

// sync
export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

// async
export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    orderAxios.post('/orders.json',orderData)
      .then( (response) => {
        dispatch( purchaseBurgerSuccess(response.data.name, orderData) )
      })
      .catch( (err) => {
        // console.log(err)
        dispatch( purchaseBurgerFail(err))
      })

  }
}
