import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    /*
    state = {
        persons: []
    }
    */
    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.props.addPerson( newPerson )
        /*
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
        */
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
      console.log(this.props.people)
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.people.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.delPerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson: (newPerson) => dispatch({ type: actionTypes.ADD, payload: newPerson }),
    delPerson: (id) => dispatch({ type: actionTypes.DEL, payload: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
