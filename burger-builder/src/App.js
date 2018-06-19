import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Containers/Checkout/Checkout'
import Orders from './Containers/Orders/Orders'
import Auth from './Containers/Auth/Auth'
import Logout from './Containers/Auth/Logout/Logout'
import * as actions from './Store/actions/index'

class App extends Component {
  state = {
    show: true
  }
  componentDidMount() {
    this.props.onTryAutoSignup()
    /*
      setTimeout( () => {
        this.setState({show: false})
      }, 5000)
    */
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={BurgerBuilder} exact />
        <Redirect to="/" />
      </Switch>
    )
    if( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/orderhistory" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route path ="/logout" component={Logout} />
          <Route path="/" component={BurgerBuilder} exact />
        </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
