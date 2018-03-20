import React from 'react'
import './char.css'

const CharComponent = (props) => {
  let c = null
  if( props.c == " ") { c = '-' }
  else                { c = props.c }
  return (
    <div className="charElem">{c}</div>
  )
}

export default CharComponent
