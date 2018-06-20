import { takeEvery, takeLatest, all } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'
// User Authentication saga imports
import {
  authUserSaga,
  checkAuthTimeoutSaga,
  authCheckStateSaga,
  logoutSaga
} from './auth'
// Burger Builder saga imports
import {
  initIngredientsSaga
} from './burgerBuilder'
// Order saga imports
import {
  purchaseBurgersSaga,
  fetchOrdersSaga
} from './order'
// User Authentication sagas
export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga)
  ])
}
// Burger Builder sagas
export function* watchBurgerBuider() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}
// Order sagas
export function* watchOrder() {
  yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgersSaga)
  yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
}
