import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/nav'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Error404 from './containers/Errors/404'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div>
          <Navbar />
            <Switch>
              <Route path="/courses" component={Courses} strict sensitive />
              <Route path="/students" component={Users} exact strict sensitive />
              <Route component={Error404} />
            </Switch>
        </div>
        <div>
          <div className="instructions">
            <ol>
              <li className="done">Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
              <li className="done">Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
              <li className="done">Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
              <li className="done">Pass the course ID to the "Course" page and output it there</li>
              <li className="done">Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
              <li className="done">Load the "Course" component as a nested component of "Courses"</li>
              <li className="done">Add a 404 error page and render it for any unknown routes</li>
              <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
