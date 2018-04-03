import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../Components/Order/CheckoutSummary'
import ContactData from './ContactData'


class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let price = null
    for( let param of query.entries()) {
      if( param[0] === 'price' ) {
        price = param[1]
      } else {
        ingredients[param[0]] = +param[1]
      }
    }
    this.setState({ ingredients: ingredients, price: price})
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinueHandler = () => {
    this.props.history.replace(this.props.match.path + '/contact-data')
  }

  render() {
    return(
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCanceled={this.checkoutCanceledHandler}
          onCheckoutContinued={this.checkoutContinueHandler}
        />
        <Route path={this.props.match.path + '/contact-data'}
          render={ (props) =>  ( <ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />) } />
      </div>
    )
  }
}

export default Checkout
