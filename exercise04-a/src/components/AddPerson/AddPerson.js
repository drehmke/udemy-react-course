import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson  extends Component {
  state = {
    name: '',
    age: 18
  }

  nameChangedHandler = (event) => {
    this.setState({name: event.target.value})
  }
  ageChangedHandler = (event) => {
    this.setState({age: event.target.value})
  }

  render () {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.nameChangedHandler} /><br />
        <input
          type="number"
          placeholder="18"
          value={this.state.age} 
          onChange={this.ageChangedHandler} /><br />
        <button onClick={() => this.props.personAdded( this.state.name, this.state.age)}>Add Person</button>
      </div>
    )
  }
}
export default AddPerson;
