import React from 'react'
import Logo from '../Layout/Logo'
import NavItems from '../Navigation/NavItems'
import styles from '../Styles/Toolbar.css'

const toolbar = (props) => {
  return(
    <header className={styles.toolBar}>
      <div>Menu</div>
      <Logo />
      <nav>
        <NavItems />
      </nav>
    </header>
  )
}

export default toolbar
