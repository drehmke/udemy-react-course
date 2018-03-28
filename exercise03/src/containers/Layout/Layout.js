import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// Route components
import Courses from '../Courses/Courses'
import Users from '../Users/Users'

class Layout extends Component {
  state = {

  }
  render() {
    return(
      <div>
        <h1>Course List</h1>
        <hr />
        <Route path="/courses" component={Courses} />
        <Route path="/users" component={Users} />
      </div>
    )
  }
}

export default Layout
