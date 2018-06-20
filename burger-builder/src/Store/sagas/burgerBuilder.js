import orderAxios from '../../axios-orders'
import { put } from 'redux-saga/effects'
import * as actions from '../actions/index'

export function* initIngredientsSaga(action) {
  try {
    const response = yield orderAxios.get('/ingredients.json')
    yield put(actions.setIngredients(response.data))
  } catch (error) {
    yield put(actions.fetchIngredientsFail())
  }

}
