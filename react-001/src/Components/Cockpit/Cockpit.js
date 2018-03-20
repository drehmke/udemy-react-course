import React from 'react'
import styles from './cockpit.css'

const Cockpit = (props) => {
  const workingStyle = []
  let btnClass = ''

  if( props.personsLen <= 2) {
    workingStyle.push( styles.red) // workingStyle = ['red']
  }
  if( props.personsLen <= 1) {
    workingStyle.push( styles.bold ) // workingStyle = ['red', 'bold']
  }

  if(props.showPersons) {
    btnClass = styles.Red
  }

  return(
    <div className={styles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={workingStyle.join(' ')}>This is really working</p>
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
    </div>
  )
}

export default Cockpit
