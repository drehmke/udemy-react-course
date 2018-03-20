import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props){
    super(props)
    console.log('[Persons.js] Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[Persons.js] Inside ComponentWillMount()')
  }
  componentDidMount() {
    console.log('[Persons.js] Inside ComponentDidMount()')
  }

/* Replaced by PureCompoent
  shouldComponentUpdate( nextProps, nextState ) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps)
    return nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    //return true
  }
  */

  render () {
    console.log('[Persons.js] Inside Render()')
    return this.props.persons.map( (person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}
          />
      })
  }
}

export default Persons
