import React from 'react'
import ImgLogo from '../Layout/Logo'
import NavItems from '../Navigation/NavItems'
import DrawerToggle from '../Navigation/DrawerToggle'
import styles from '../Styles/Toolbar.css'

const toolbar = (props) => {

  return(
    <header className={styles.toolBar}>
      <DrawerToggle clicked={props.sideDrawerToggle} />
      <div className={styles.logo}>
        <ImgLogo />
      </div>
      <nav className={styles.desktopOnly}>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar
