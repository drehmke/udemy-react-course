import React from 'react'
import Logo from '../Layout/Logo'
import NavItems from './NavItems'
import styles from '../Styles/SideDrawer.css'

const sideDrawer = (props) => {
  return(
    <div className={styles.sideDrawer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </div>
  )
}

export default sideDrawer
