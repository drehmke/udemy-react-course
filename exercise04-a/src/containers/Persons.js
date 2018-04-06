import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    personAddedHandler = (name, age) => {
        this.props.addPerson(name, age)
    }
    /*
    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }
    */
    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.props.people.map((person, index) => (
                    <Person
                        key={index}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.remPerson(person.id)}/>
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
    addPerson: (name, age) => dispatch( {type: actionTypes.ADD, payload: {name: name, age: age}} ),
    remPerson: (remPerson) => dispatch( {type: actionTypes.REM, payload: remPerson} )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
