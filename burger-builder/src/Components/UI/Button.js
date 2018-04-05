import React from 'react'
import styles from '../Styles/Buttons.css'

const button = (props) => {
  return(
    <button
      className={[styles.button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >{props.children}</button>
  )
}

export default button
