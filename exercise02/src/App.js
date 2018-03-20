import React, { Component } from 'react'
import './App.css'
import ValidationComponent from './Components/Validation/Validation'
import CharComponent from './Components/Char/Char'

class App extends Component {
  state = {
    text: '',
    txtCharLen: `Current characters entered: `,
    txtNoTextLen: `You haven't entered anything yet. Try typing in the text field above.`,
    txtNoChar: ` ... waiting ... `
  }

  changeShowText = (event) => {
    this.setState(
      {text: event.target.value}
    )
  }

  clickDeleteCharHandler = (idx) => {
    const text = this.state.text
    const textArr = text.split('')
    textArr.splice(idx, 1)
    this.setState({text: textArr.join('')})
  }

  render() {
    let showTextLength = null
    let charList = null

    if( this.state.text ) {
      /* =========================================== */
      const txt = this.state.text
      showTextLength = (
        <p>{this.state.txtCharLen} {txt.length}</p>
      )
      const arr = txt.split('')
      charList = (
        arr.map((e,i) => {
          return(
            <CharComponent
              click={() => this.clickDeleteCharHandler(i)}
              key={i}
              c={e}
            />
          )
        })
      )
    } else {
      /* =========================================== */
      showTextLength = ( <p>{this.state.txtNoTextLen}</p> )
      charList = ( <p>{this.state.txtNoChar}</p> )
    }

    return(
      <div className="App">
        <hr />
        <input type="text" name="inputText" value={this.state.text}
                className="inputField" onChange={this.changeShowText} />
        <div>{ showTextLength }</div>
        <div className="validationContainer">
          <ValidationComponent text={this.state.text} />
        </div>
        <div className="charContainer">
          {charList}
        </div>
        <hr />
        <ol>
          <li className="done">Create an input field (in App Component) with a change listener which outputs the length of the entered text below it. (e.g. in a paragraph)</li>
          <li className="done">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li className="done">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length. (e.g. take 5 as a minimum length)</li>
          <li className="done">Create another component (=> CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black)</li>
          <li className="done">Render a list of CharComponents where each component receives a different letter of the entered text (in the initial input field) as a prop</li>
          <li className="done">When you click a CharComponent, the character it holds should be removed from the entered text</li>
        </ol>
        <p>Hint: Keep in mind that Javascript strings are basically arrays!</p>
      </div>
    )
  }
}

export default App;
