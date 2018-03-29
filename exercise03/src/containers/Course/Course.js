import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Course extends Component {
  state = {
    id: null,
    title: null
  }
  componentDidMount() {
    this.loadData()
  }
  componentDidUpdate() {
    this.loadData()
  }

  loadData = () => {
    if( this.state.id != this.props.match.params.id ) {
      const search = this.props.location.search.split('=')
      this.setState({
        id: this.props.match.params.id,
        title: search[1] !== '' ? search[1].replace(/%20/g, " ") : null
      })
    }
  }

  render () {
      let post = null
      if( this.state.id != null ) {
        post = (
          <div>
            <hr />
              <h1>{this.state.title}</h1>
              <p>You selected the Course with ID: {this.props.match.params.id}</p>
              <NavLink to="/all-courses">View All Courses</NavLink>
          </div>
        )
    }
      return (
          <div>
            {post}
          </div>
      );
  }
}

export default Course;
