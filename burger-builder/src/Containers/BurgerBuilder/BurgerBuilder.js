import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls'
import Modal from '../../Components/UI/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary'
import orderAxios from '../../axios-orders'

const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }
  // methods to mutate the state will be done here
  addIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients }
    const old = this.state.ingredients[type]
    // add a single item of ingredient type
    const updated = old + 1;
    updatedIngredients[type] = updated;
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseable(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const updatedIngredients = { ...this.state.ingredients }
    const old = this.state.ingredients[type]
    if( old <= 0 ) {
      return
    }
    // add a single item of ingredient type
    const updated = old - 1;
    updatedIngredients[type] = updated;
    const priceReduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceReduction
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseable(updatedIngredients)
  }

  updatePurchaseable(ingredients) {
    //const ingredients = { ...this.state.ingredients }
    const sum = Object.keys(ingredients)
                .map((igKey) => { return ingredients[igKey]})
                .reduce((sum, el) => { return sum + el },0)
    this.setState({
      purchasable: sum > 0
    })
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCanceledHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinuedHandler = () => {
    //alert('You Ordered A Burger!')
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice, // do not do this in production - re-calc price
      customer: {
        name: "Donna Ryan",
        address: {
          street: "123 AnyStreet",
          zipCode: '12345',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'bicycle'
    }
    orderAxios.post('/orders.json',order)
      .then( (response) => {
        console.log(response)
      })
      .catch( (err) => {
        console.log(err)
      })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
      <InvisiWrapper>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            clickedCancel={this.purchaseCanceledHandler}
            clickedContinue={this.purchaseContinuedHandler}
            price={this.state.totalPrice}
           />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </InvisiWrapper>
    )
  }
}

export default BurgerBuilder
