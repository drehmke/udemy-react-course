import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Users from './Containers/Users'
//import Pizza from './Containers/Pizza'
import asyncComponent from './HoC/asyncComponent'

const AsyncPizza = asyncComponent( () => {
  return import('./Containers/Pizza.js')
})

class App extends Component {
  render () {
    return (
      <div>
        <div>
          [ <Link to="/">Users</Link> |
          <Link to="/pizza">Pizza</Link> ]
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" exact component={AsyncPizza} />
        </div>
      </div>
    )
  }
}

export default App
