import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Styles/Link.css'

const link = (props) => {
  return(
    <li className={styles.link}>
      <NavLink to={props.link} activeClassName={styles.active} exact={props.exact}>{props.children}</NavLink>
    </li>
  )
}

export default link
