import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Containers/Checkout/Checkout'

class App extends Component {
  state = {
    show: true
  }
  componentDidMount() {
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
            <Route path="/checkout" component={Checkout} />
            <Route path="/" component={BurgerBuilder} exact />
          </Switch>


        </Layout>
      </div>
    );
  }
}

export default App;
