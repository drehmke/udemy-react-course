import React from 'react'

const userInput = (props) => {
  return (
    <div style={props.styleDiv}>
      <input style={props.styleInput} type="text" onChange={props.changed} placeholder={props.username} />
    </div>
  )
}

export default userInput
