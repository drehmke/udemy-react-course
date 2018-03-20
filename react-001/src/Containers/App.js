import React, { Component } from 'react';
import styles from './App.css';
import Person from '../Components/Persons/Person/Person'

class App extends Component {
  state = {
    otherState: 'some other value',
    showPersons: false,
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ]
  }
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
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {
    let persons = null
    let btnClass = ''

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      )
      btnClass= styles.Red
    }

    const workingStyle = []
    if( this.state.persons.length <= 2) {
      workingStyle.push( styles.red) // workingStyle = ['red']
    }
    if( this.state.persons.length <= 1) {
      workingStyle.push( styles.bold ) // workingStyle = ['red', 'bold']
    }
    /* fake error
    const rnd = Math.random()
    if( rnd > 0.7 ) {
      throw new Error('Something went wrong')
    }
    */
    return (
        <div className={styles.App}>
          <h1>Hi, I'm a React app</h1>
          <p className={workingStyle.join(' ')}>This is really working</p>
          {/*
          <button
            style={buttonStyle}
            onClick={() => this.switchNameHandler('Maximilian')}
          >Switch Name</button>
          */}
          <button
            className={btnClass}
            onClick={this.togglePersonHandler}
          >Toggle Person View</button>
          {persons}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "I'm a React App!"))
  }
}

export default App;
