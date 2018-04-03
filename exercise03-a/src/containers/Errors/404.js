import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Error404 extends Component {

  backClickHandler = () => {
    return this.props.history.goBack()
  }

  render() {
    return(
      <div>
        <h2>Sorry</h2>
        <p>The page you were looking for has been misplaced. Please <span onClick={this.backClickHandler} className="fakeLink">go back</span> and try another haystack.</p>
      </div>
    )
  }
}

export default withRouter(Error404)
