import React from 'react'
import styles from '../Styles/Backdrop.css'

const backdrop = (props) => {
  return(
    props.show
    ? <div className={styles.backdrop} onClick={props.clicked}></div>
    : null
  )
}

export default backdrop
