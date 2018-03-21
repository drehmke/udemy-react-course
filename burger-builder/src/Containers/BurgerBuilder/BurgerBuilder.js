import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return(
      <InvisiWrapper>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </InvisiWrapper>
    )
  }
}

export default BurgerBuilder
