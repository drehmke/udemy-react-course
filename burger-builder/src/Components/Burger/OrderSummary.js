import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Button from '../UI/Button'

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
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <div>
        <Button clicked={props.clickedCancel} btnType='danger'>Cancel</Button>
        <Button clicked={props.clickedContinue} btnType='success'>Continue</Button>
      </div>
    </InvisiWrapper>
  )
}

export default OrderSummary
