import React from 'react'
import './validation.css'

const ValidationComponent = (props) => {
  const minLen = 5
  const valid = 'Text is valid'
  const short = 'Text too short'

  console.log(minLen);

  return (
    <div className="validationContainer">
      <p>{ props.len >= minLen ? valid : short }</p>
    </div>
  )
}

export default ValidationComponent
