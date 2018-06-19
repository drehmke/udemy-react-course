import React from 'react'
import Link from './Link'
import styles from '../Styles/NavItems.css'

const navItems = (props) => (
  <ul className={styles.navItems}>
    <Link link="/" exact>Burger Builder</Link>
    { props.isAuthenticated
      ? <Link link="/orderhistory">Order History</Link>
      : null
    }
    {props.isAuthenticated
      ? <Link link="/logout">Logout</Link>
      : <Link link="/auth">Login / Create Account</Link>
    }
  </ul>
)

export default navItems
