import React, { Component } from 'react';
import './App.css';
import UserInput from './User/Input'
import UserOutput from './User/Output'

class App extends Component {
  state = {
    username: 'No username has been defined.',
    extraText: [
      { text: "Lorem ipsum dolor amet drinking vinegar fixie everyday carry before they sold"},
      { text: "out microdosing roof party shaman iPhone blog sriracha. Humblebrag mixtape"},
      { text: "live-edge mlkshk mumblecore edison bulb. Unicorn viral quinoa letterpress,"},
      { text: "distillery yuccie vinyl offal bushwick copper mug skateboard wayfarers green"},
      { text: "juice cardigan ennui. Viral pitchfork kogi swag fanny pack. Chambray salvia"},
      { text: "Raclette lumbersexual listicle ethical, vaporware kitsch taiyaki vexillologist"},
    ]
  }

  eventUpdateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const divInputStyle = {
      display: 'block',
      width: '100%',
      textAlign: 'center'
    }
    const userInputStyle = {
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        border: 0,
        borderBottom: '3px solid #66ccff',
        padding: 5,
        fontSize: 14,
        color: '#003366'
    }

    return (
      <div className="App">
        <UserInput styleDiv={divInputStyle} styleInput={userInputStyle} changed={this.eventUpdateUsername} username={this.state.username}/>
        <UserOutput username={this.state.username} extra={this.state.extraText[0].text} />
        <UserOutput username={this.state.username} extra={this.state.extraText[1].text} />
        <UserOutput username={this.state.username} extra={this.state.extraText[2].text} />
        <UserOutput username={this.state.username} extra={this.state.extraText[3].text} />
        <UserOutput username={this.state.username} extra={this.state.extraText[4].text} />
        <UserOutput username={this.state.username} extra={this.state.extraText[5].text} />
      </div>
    );
  }
}

export default App;
