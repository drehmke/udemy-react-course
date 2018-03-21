import React from 'react'
import Link from './Link'
import styles from '../Styles/NavItems.css'

const navItems = () => (
  <ul className={styles.navItems}>
    <Link link="/" active>Burger Builder</Link>
    <Link link="/">CheckOut</Link>
  </ul>
)

export default navItems
