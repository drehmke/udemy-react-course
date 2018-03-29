import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Static components
import Navbar from '../../components/navbar'

// Route components
import Courses from '../Courses/Courses'
import Students from '../Users/Users'


class Layout extends Component {
  render() {
    return(
      <div>
        <h1>Course List</h1>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/students" exact component={Students} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </div>
    )
  }
}

export default Layout
