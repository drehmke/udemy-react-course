import React from 'react'
import styles from '../Styles/OrderListItem.css'

const orderListItem = (props) => {
  const ingredients = []
  for( let ingName in props.ingredients ) {
    ingredients.push({
      name: ingName,
      qty: props.ingredients[ingName]
    })
  }

  const ingredientListItem = ingredients.map( (ig, index) => {
    return <li key={index} className={styles.listItem}>{ig.name} ({ig.qty})</li>
  })


  return(
    <div className={styles.orderListItem}>
      <div><ul><li className={styles.listItem}><strong>Ingredients List:</strong></li>{ingredientListItem}</ul></div>
      <p>Price: <strong>USD $ {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default orderListItem
