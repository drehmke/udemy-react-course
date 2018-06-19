import React from 'react'
import BuildControl from './BuildControl'
import styles from '../Styles/BuildControls.css'

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  return(
    <div className={styles.buildControls}>
      <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map( (ctrl) => {
        return (<BuildControl
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
          />)
      })}
      <button
        className={styles.orderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >{props.isAuth ? 'ORDER NOW' : 'Login To Order'}</button>
    </div>
  )
}

export default buildControls
