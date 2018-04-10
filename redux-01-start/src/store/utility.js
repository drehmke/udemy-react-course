export const updatedObject = (oldObj, updatedValues) => {
  return {
    ...oldObj,
    ...updatedValues // updatedValues should be an object
  }
}
