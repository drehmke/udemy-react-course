import React from 'react'
import styles from '../../Styles/Input.css'

const input = (props) => {
  let inputElement = null
  let errorMessage = null

  const inputClasses = []
  if( props.invalid
    && props.shouldValidate
    && props.touched === true ) {
    inputClasses.push(styles.invalid)
    errorMessage = <div className={styles.errorMessage}>{props.shouldValidate.errorMessage}</div>
  }

  switch( props.elementType) {
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(" ")}
        value={props.value}
        {...props.elementConfig}
        onChange={props.changed}
      />
      break;
    case ('select'):
      inputElement = (
        <select
          onChange={props.changed}
          className={inputClasses.join(" ")}
          >
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
        className={inputClasses.join(" ")}
        onChange={props.changed}
        value={props.value}
        {...props.elementConfig}
      />
  }

  return(
    <div className={styles.formInput}>
      <label>{props.label}</label>
      {inputElement}
      {errorMessage}
    </div>
  )
}

export default input
