import React, { Component } from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import withErrorHandler from '../../Hoc/withErrorHandler'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls'
import Modal from '../../Components/UI/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary'
import orderAxios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner'


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
    purchasing: false,
    fetching: false
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
    this.setState({fetching: true})
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
    /* comment this out to see the spinner */
    orderAxios.post('/orders.json',order)
      .then( (response) => {
        // console.log(response)
        this.setState({fetching: false, purchasing: false})
      })
      .catch( (err) => {
        // console.log(err)
        this.setState({fetching: false, purchasing: false})
      })
    }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      clickedCancel={this.purchaseCanceledHandler}
      clickedContinue={this.purchaseContinuedHandler}
      price={this.state.totalPrice}
     />
    if( this.state.fetching ) {
      orderSummary = <Spinner />
    }


    return(
      <InvisiWrapper>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
        {orderSummary}
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

export default withErrorHandler(BurgerBuilder, orderAxios)
