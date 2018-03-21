import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'
import styles from '../Styles/Layout.css'

const layout = (props) => (
  <InvisiWrapper>
    <SideDrawer />
    <Toolbar />
    <main className={styles.content}>{props.children}</main>
  </InvisiWrapper>
)

export default layout
