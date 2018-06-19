import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
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
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/orderhistory" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/auth" component={Auth} />
            <Route path ="/logout" component={Logout} />
            <Route path="/" component={BurgerBuilder} exact />
          </Switch>


        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
