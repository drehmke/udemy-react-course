import React from 'react'
import ImgLogo from '../Layout/Logo'
import NavItems from '../Navigation/NavItems'
import styles from '../Styles/Toolbar.css'

const toolbar = (props) => {
  return(
    <header className={styles.toolBar}>
      <div>Menu</div>
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
