import React, { Component } from 'react'
import InvisiWrapper from './InvisiWrapper'
import Modal from '../Components/UI/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentWillMount() {
      this.reqInt = axios.interceptors.request.use( req => {
        this.setState({error: null})
        return req
      })
      this.resInt = axios.interceptors.response.use(
        res => res,
        error => { this.setState({error: error})
      })
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInt)
      axios.interceptors.request.eject(this.resInt)
    }

    errorConfirmHandler = () => {
      this.setState({error: null})
    }

    render () {
      return (
        <InvisiWrapper>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </InvisiWrapper>
      )
    }
  }
}

export default withErrorHandler
