import React, { Component } from 'react'
import InvisiWrapper from '../../../Hoc/InvisiWrapper'
import componentClass from '../../../Hoc/componentClass'
import styles from './person.css'

class Person extends Component {
  constructor(props){
    super(props)
    console.log('[Person.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside ComponentWillMount()')
  }
  componentDidMount() {
    console.log('[Person.js] Inside ComponentDidMount()')
  }

  render() {
    console.log('[Person.js] Inside Render()')
    return (
      <InvisiWrapper>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </InvisiWrapper>
    )
  }
}
export default componentClass(Person, styles.Person)
