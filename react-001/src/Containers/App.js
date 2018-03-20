import React, { PureComponent } from 'react';
import styles from './App.css';
import InvisiWrapper from '../Hoc/InvisiWrapper'
import componentClass from '../Hoc/componentClass'
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('[App.js] Inside Constructor', props)
    // Older versions of react - initalize state
    this.state = {
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29},
        { id: 3, name: 'Stephanie', age: 26}
      ]
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside ComponentWillMount()')
  }
  componentDidMount() {
    console.log('[App.js] Inside ComponentDidMount()')
  }

/*
  state = {
    otherState: 'some other value',
    showPersons: false,
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ]
  }
*/
/* obsolete */
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {...this.state.persons[personIndex]}
    // without spread
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] Inside Render()')
    let persons = null

    if( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }

    /* fake error
    const rnd = Math.random()
    if( rnd > 0.7 ) {
      throw new Error('Something went wrong')
    }
    */
    return (
        <InvisiWrapper>
          <button onClick={() => {this.setState({showPersons: true})}}>Show All People</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            personsLen={this.state.persons.length}
            click={this.togglePersonHandler}
          />
          {persons}
        </InvisiWrapper>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "I'm a React App!"))
  }
}

export default componentClass(App, styles.App);
