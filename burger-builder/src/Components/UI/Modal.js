import React, { Component } from 'react'
import styles from '../Styles/Modal.css'
import Backdrop from './Backdrop'
import InvisiWrapper from '../../Hoc/InvisiWrapper'

class Modal extends Component {
  componentWillUpdate() {
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
  }
  render () {
    return(
      <InvisiWrapper>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </InvisiWrapper>
    )
  }
}

export default Modal
