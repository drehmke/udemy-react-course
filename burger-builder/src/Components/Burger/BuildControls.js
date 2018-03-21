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
      {controls.map( (ctrl) => {
        return (<BuildControl
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
          />)
      })}
    </div>
  )
}

export default buildControls
