import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Burger from '../../Components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
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
