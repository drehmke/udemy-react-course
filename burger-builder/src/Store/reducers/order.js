import * as actionTypes from '../actions/actionTypes'

const initialState = {
  orders: [],
  purchasing: false
}

const reducer = (state = initialState, action) => {
  switch(action.type ){
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        purchasing: true
      }
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
      return {
        ...state,
        purchasing: false,
        orders: state.orders.concat(newOrder)
      }
    case actionTypes.PURCAHSE_BURGER_FAIL:
      return {
        ...state,
        purchasing: false,
        error:
      }
    default:
      return state
  }
}

export default reducer
