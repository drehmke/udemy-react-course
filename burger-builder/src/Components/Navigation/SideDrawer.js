import React from 'react'
import Logo from '../Layout/Logo'
import NavItems from './NavItems'
import Backdrop from '../UI/Backdrop'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import styles from '../Styles/SideDrawer.css'

const sideDrawer = (props) => {
  let attachedStyles = [styles.sideDrawer, styles.close]
  if( props.open ) {
    attachedStyles = [styles.sideDrawer, styles.open]
  }

  return(
    <InvisiWrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(" ")}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </InvisiWrapper>
  )
}

export default sideDrawer
