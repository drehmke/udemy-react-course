import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'

import styles from './Layout.css'

const layout = (props) => (
  <InvisiWrapper>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.content}>{props.children}</main>
  </InvisiWrapper>
)

export default layout
