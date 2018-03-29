import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Static components
import Navbar from '../../components/navbar'

// Route components
import Courses from '../Courses/Courses'
import Course from '../Course/Course'
import Students from '../Users/Users'


class Layout extends Component {
  state = {

  }
  render() {
    return(
      <div>
        <h1>Course List</h1>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/courses" exact component={Courses} />
          <Route path={"/courses/course/:id"} exact component={Course} />
          <Route path="/students" exact component={Students} />
        </Switch>
      </div>
    )
  }
}

export default Layout
