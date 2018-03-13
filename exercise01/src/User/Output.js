import React from 'react'
import './Output.css'

const userOutput = (props) => {
  return(
    <div className="Output">
      <p className="OutputUsername">{props.username}</p>
      <p className="OutputExtraText">{props.extra}</p>
    </div>
  )
}

export default userOutput
