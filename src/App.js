import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'

const name = 'Tania'

class App extends Component {

  state = {
    characters: []
  }

  initialCharacters = [
    {
      name: 'Nancy',
      job: 'Janitor'
    },
    {
       name: 'Mac',
       job: 'Bouncer'
    },
    {
       name: 'Jaime',
       job: 'Aspiring actress'
     },
    {
       name: 'Denise',
       job: 'Bartender'
    }
  ]

  addStateMagic = () => {
    this.setState({characters: this.initialCharacters})
  }

  handleSubmit = (character) => {
    const newState = this.state.characters
    newState.push(character)
    this.setState({characters: newState})
    // this.setState({characters: [...this.state.characters, character]})
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {

    const characters = this.state.characters

    return (
      <React.Fragment>
        <div className="container">
          <h1>Welcome, {name}</h1>
          <p>View directory of active professionals</p>
        </div>
        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={this.removeCharacter}
            addStateMagic={this.addStateMagic}
          />
        </div>
        <div className="container">
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
