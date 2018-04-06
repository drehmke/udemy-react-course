import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../Store/actions'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import withErrorHandler from '../../Hoc/withErrorHandler'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls'
import Modal from '../../Components/UI/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary'
import orderAxios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner'

/*
const INGREDIENT_PRICES = {
  lettuce: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
*/

class BurgerBuilder extends Component {
  state = {
    //ingredients: null,
    //totalPrice: 4,
    //purchasable: false,
    purchasing: false,
    fetching: false,
    error: false
  }

  componentDidMount() {
    /*
    orderAxios.get('https://react-burger-builder-21383.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch( (error) => {
        this.setState({error: true})
      } )
      */
  }
/*
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
*/

  updatePurchaseable(ingredients) {
    //const ingredients = { ...this.state.ingredients }
    const sum = Object.keys(ingredients)
                .map((igKey) => { return ingredients[igKey]})
                .reduce((sum, el) => { return sum + el },0)
    // this.setState({ purchasable: sum > 0 })
    return sum > 0
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCanceledHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinuedHandler = () => {
    /* pre-firebase */
    //alert('You Ordered A Burger!')
    /* pre-routing */
    /*
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
    /* comment this out to see the spinner, if using firebase */
    /*
    orderAxios.post('/orders.json',order)
      .then( (response) => {
        // console.log(response)
        this.setState({fetching: false, purchasing: false})
      })
      .catch( (err) => {
        // console.log(err)
        this.setState({fetching: false, purchasing: false})
      })
      */
      const queryParams = []
      for( let i in this.state.ingredients ) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
      }
      queryParams.push('price=' + encodeURIComponent(this.state.totalPrice))

      this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryParams.join('&')
      })
    }


  render() {
    const disabledInfo = {
      ...this.props.ings
    }
    for( let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    if( this.props.ings ) {
      burger = (
        <InvisiWrapper>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseable(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </InvisiWrapper>
      )
      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        clickedCancel={this.purchaseCanceledHandler}
        clickedContinue={this.purchaseContinuedHandler}
        price={this.props.price}
       />
    }
    if( this.state.fetching ) {
      orderSummary = <Spinner />
      burger = <Spinner />
    }


    return(
      <InvisiWrapper>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCanceledHandler}
        >
        {orderSummary}
        </Modal>
        {burger}
      </InvisiWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, orderAxios))
