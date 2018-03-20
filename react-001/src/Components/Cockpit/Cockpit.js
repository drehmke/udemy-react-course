import React from 'react'
import InvisiWrapper from '../../Hoc/InvisiWrapper'
import styles from './cockpit.css'

const cockpit = (props) => {
  const workingStyle = []
  let btnClass = styles.Button

  if( props.personsLen <= 2) {
    workingStyle.push( styles.red) // workingStyle = ['red']
  }
  if( props.personsLen <= 1) {
    workingStyle.push( styles.bold ) // workingStyle = ['red', 'bold']
  }

  if(props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(" ")
  }

  return(
    <InvisiWrapper>
    {/*<div className={styles.Cockpit}>*/}
      <h1>{props.appTitle}</h1>
      <p className={workingStyle}>This is really working</p>
      {/*
      <button
        style={buttonStyle}
        onClick={() => this.switchNameHandler('Maximilian')}
      >Switch Name</button>
      */}
      <button
        className={btnClass}
        onClick={props.click}
      >Toggle Person View</button>
    {/*</div>*/}
  </InvisiWrapper>
  )
}

export default cockpit
