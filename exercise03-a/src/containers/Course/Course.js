import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom'

class Course extends Component {
  state = {
    title: null
  }
  componentDidUpdate() {
    const query = this.props.location.search.split("=")
    const title = query[1].replace(/%20/g, " ")
    if( this.state.title == null || this.state.title !== title )
    {
      this.setState({ title:  title})
    }
  }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id} </p>
                <p><NavLink to="/all-courses">View All Courses</NavLink></p>
            </div>
        );
    }
}

export default withRouter(Course);
