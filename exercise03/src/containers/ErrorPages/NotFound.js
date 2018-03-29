import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NotFound extends Component {
  goBackHandler = () => {
    this.props.history.goBack()
  }

  render() {
    return(
      <div>
        <h1>Sorry</h1>
        <p>The file you were looking for was not found. Please <span className="fakeLink" onClick={this.goBackHandler}>go back</span> and try again.</p>
      </div>
    )
  }
}

export default withRouter(NotFound)
