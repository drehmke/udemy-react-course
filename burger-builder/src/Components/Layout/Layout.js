import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Toolbar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'
import styles from '../Styles/Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }
  toggleSideDrawer = () => {
    this.setState( (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render () {
    return (
      <InvisiWrapper>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar
          sideDrawerToggle={this.toggleSideDrawer}
        />
        <main className={styles.content}>{this.props.children}</main>
      </InvisiWrapper>
    )
  }
}
export default Layout
