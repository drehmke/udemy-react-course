import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Layout from './containers/Layout/Layout'

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="exerciseInstructions">
          <hr />
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
          <hr />
          <ol style={{textAlign: 'left'}}>
            <li className="done">Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li className="done">Add a simple navigation with two links => One leading to "Users", one leading to "Courses" (bonus: active link styling)</li>
            <li className="done">Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li className="done">Pass the course ID to the "Course" page and output it there</li>
            <li className="done">Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li className="done">Load the "Course" component as a nested component of "Courses"</li>
            <li className="done">Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
