import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'

const layout = (props) => (
  <InvisiWrapper>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </InvisiWrapper>
)

export default layout
