import React, { Component } from 'react'
import { Route } from 'react-router-dom'

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
        <Route path="/courses" component={Courses} />
        <Route path="/course" component={Course} />
        <Route path="/students" component={Students} />
      </div>
    )
  }
}

export default Layout
