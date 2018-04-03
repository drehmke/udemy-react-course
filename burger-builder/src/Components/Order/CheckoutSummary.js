import React from 'react'

import Burger from '../Burger/Burger'
import Button from '../UI/Button'

import styles from '../Styles/CheckoutSummary.css'

const checkoutSummary = (props) => {
  return(
    <div className={styles.checkoutSummary}>
      <h1>We hope it is tasty!</h1>
      <div className={styles.burgerPreview}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div className="actions">
        <Button btnType="danger" clicked={props.onCheckoutCanceled}>Cancel</Button>
        <Button btnType="success" clicked={props.onCheckoutContinued}>Continue</Button>
      </div>
    </div>
  )
}

export default checkoutSummary
