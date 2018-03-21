import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Toolbar from '../Navigation/Toolbar'
import styles from '../Styles/Layout.css'

const layout = (props) => (
  <InvisiWrapper>
    <Toolbar />
    <div>SideDrawer, Backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </InvisiWrapper>
)

export default layout
