import React from 'react'
import styles from '../Styles/Logo.css'
import imgLogo from '../../assets/images/burger-logo.png'

const logo = (props) => {
  return(
    <div className={styles.logo}>
      <img src={imgLogo} alt="My Burger Builder App" />
    </div>
  )
}

export default logo
