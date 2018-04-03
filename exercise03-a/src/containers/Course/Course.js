import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Course extends Component {
  state = {
    title: null
  }
  componentDidMount() {
    const query = this.props.location.search.split("=")
    const title = query[1].replace(/%20/g, " ")
    this.setState({
      title: title
    })
  }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id} </p>
            </div>
        );
    }
}

export default withRouter(Course);
