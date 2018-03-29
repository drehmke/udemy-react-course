import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null
  }
    componentDidMount() {
      console.log(this.props)
      const search = this.props.location.search.split("=")
      // const title = search[1] != '' ? search[1] : 'Title failed to pass'
      this.setState({
        title: search[1] != '' ? search[1].replace(/%20/g, ' ') : 'Title failed to pass'
      })
    }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
