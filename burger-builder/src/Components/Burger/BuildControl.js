import React from 'react'
import styles from '../Styles/BuildControl.css'

const buildControl = (props) => {
  return(
    <div className={styles.buildControl}>
      <div className={styles.label}>{props.label}</div>
      <button className={styles.less} onClick={props.removed} disabled={props.disabled}>Remove</button>
      <button className={styles.more} onClick={props.added}>Add</button>
    </div>
  )
}

export default buildControl
