import React from 'react'
import './validation.css'

const ValidationComponent = (props) => {
  const minLen = 5
  const valid = 'Text is valid'
  const short = 'Text too short'
  let len = null
  if( props.text != null ) {
    len = props.text.length
  }


  return (
    <div className="validationContainer">
      <p>{ len >= minLen ? valid : short }</p>
    </div>
  )
}

export default ValidationComponent
