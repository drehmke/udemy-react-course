import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Button from '../UI/Button'

class OrderSummary extends Component {
  /*
    this component should be a functional (stateless) component,
    not a class. We don't need the componentWillUpdate() function,
    it is here for debugging purposes, but I will leave it so that
    I can see HOW the Modal component affects this component.
  */
  componentWillUpdate() {
    //console.log('[OrderSummary] WillUpdate')
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map( (igKey) => {
        return(
           <li key={igKey}>
            <span style={{textTransform: 'capitalize', fontWeight: 'bold'}}> {igKey}:</span>
            {this.props.ingredients[igKey]}
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
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <div>
          <Button clicked={this.props.clickedCancel} btnType='danger'>Cancel</Button>
          <Button clicked={this.props.clickedContinue} btnType='success'>Continue</Button>
        </div>
      </InvisiWrapper>
    )
  }
}

export default OrderSummary
