import * as actionTypes from './actionTypes'

export const storeSync = (val) => {
  return {
    type: actionTypes.STORE,
    value: val
 }
}
export const store = (val) => {
  return (dispatch) => {
    setTimeout( () => {
      dispatch( storeSync(val) )
    }, 2000)
  }
}

export const remResult = (val) => {
  return {
    type: actionTypes.REMRESULT,
    value: val
  }
}
