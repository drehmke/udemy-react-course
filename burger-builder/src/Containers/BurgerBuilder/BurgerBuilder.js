import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
  render() {
    return(
      <InvisiWrapper>
        <Burger />
        <div>Build Controls</div>
      </InvisiWrapper>
    )
  }
}

export default BurgerBuilder
