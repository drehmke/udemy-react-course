import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Static components
import Navbar from '../../components/navbar'

// Route components
import Courses from '../Courses/Courses'
import Students from '../Users/Users'
import NotFound from '../ErrorPages/NotFound'

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
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Layout
