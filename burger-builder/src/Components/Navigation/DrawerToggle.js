import React from 'react'
import styles from '../Styles/DrawerToggle.css'

const drawerToggle = (props) => {
  return(
    <div onClick={props.clicked} className={styles.mobileMenu}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default drawerToggle
