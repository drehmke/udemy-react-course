import orderAxios from '../../axios-orders'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'

export function* purchaseBurgersSaga(action) {
  yield put( actions.purchaseBurgerStart )
  try {
    const response = yield orderAxios.post('/orders.json?auth=' + action.token, action.orderData )
    yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData))
  } catch(error) {
    yield put(actions.purchaseBurgerFail(error))
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart)
  const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"'
  try {
    const response = yield orderAxios.get('/orders.json' + queryParams)
    const fetchedOrders = []
    for( let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key
      })
    }
    yield put(actions.fetchOrdersSuccess(fetchedOrders))
  } catch(error) {
    yield put(actions.fetchOrdersFail(error))
  }
}
