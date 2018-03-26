import React, { Component } from 'react';
import Layout from './Components/Layout/Layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'

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
          {this.state.show ? <BurgerBuilder /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
