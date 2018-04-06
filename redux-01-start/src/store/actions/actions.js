export const INCREMENT = 'INCREMENT'
export const increment = () => {
  return { type: INCREMENT }
}
export const DECREMENT = 'DECREMENT'
export const decrement = () => {
  return { type: DECREMENT }
}
export const ADD = 'ADD'
export const add = (val) => {
  return {
    type: ADD,
    value: val
  }
}
export const SUBTRACT = 'SUBTRACT'
export const subtract = (val) => {
  return {
    type: SUBTRACT,
    value: val
  }
}
export const STORE = 'STORE'
export const store = (val) => {
  return {
    type: STORE,
    value: val
  }
}
export const REMRESULT = 'REMRESULT'
export const remResult = (val) => {
  return {
    type: REMRESULT,
    value: val
  }
}
