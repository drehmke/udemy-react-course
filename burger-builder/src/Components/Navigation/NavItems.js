import React from 'react'
import Link from './Link'
import styles from '../Styles/NavItems.css'

const navItems = () => (
  <ul className={styles.navItems}>
    <Link link="/" exact>Burger Builder</Link>
    <Link link="/orderhistory">Order History</Link>
  </ul>
)

export default navItems
