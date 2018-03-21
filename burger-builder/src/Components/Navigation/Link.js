import React from 'react'
import styles from '../Styles/Link.css'

const link = (props) => {
  return(
    <li className={styles.link}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  )
}

export default link
