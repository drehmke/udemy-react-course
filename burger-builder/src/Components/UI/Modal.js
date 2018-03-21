import React from 'react'
import styles from '../Styles/Modal.css'
import Backdrop from './Backdrop'
import InvisiWrapper from '../../Hoc/InvisiWrapper'

const modal = (props) => {
  return(
    <InvisiWrapper>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </InvisiWrapper>
  )
}

export default modal
