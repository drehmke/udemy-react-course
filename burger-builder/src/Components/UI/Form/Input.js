import React from 'react'
import styles from '../../Styles/Input.css'

const input = (props) => {
  let inputElement = null
  switch( props.elementType) {
    case ('textarea'):
      inputElement = <textarea
        value={props.value}
          {...props.elementConfig}
      />
      break;
    case ('select'):
      inputElement = (
        <select>
          value={props.value}
          console.log(props.elementConfig.options)
          {props.elementConfig.options.map( (option, index) => (
            <option key={index} value={option.value}>{option.display}</option>
          ))}
        </select>
      )
      break;
    case ('input'):
    default:
      inputElement = <input
        value={props.value}
        {...props.elementConfig}
      />
  }

  return(
    <div className={styles.formInput}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input
