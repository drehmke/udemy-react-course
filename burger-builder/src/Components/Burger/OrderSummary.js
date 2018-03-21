import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map( (igKey) => {
      return(
         <li key={igKey}>
          <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}> {igKey}:</span>
          {props.ingredients[igKey]}
        </li>
      )
    })

  return(
    <InvisiWrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </InvisiWrapper>
  )
}

export default OrderSummary